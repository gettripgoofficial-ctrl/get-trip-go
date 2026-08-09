const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const EXCLUDE_DIRS = new Set(["node_modules", ".next", ".git", "public"]);
const EXTS = new Set([".ts", ".tsx"]);
const URL_RE = /https:\/\/images\.unsplash\.com\/[^"'`)\s]+/g;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!EXCLUDE_DIRS.has(entry.name)) walk(path.join(dir, entry.name), files);
    } else if (EXTS.has(path.extname(entry.name))) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function slugFromUrl(url, index) {
  const m = url.match(/photo-([a-f0-9-]+)/i);
  const id = m ? m[1].slice(0, 12) : String(index);
  return `unsplash-${id}.jpg`;
}

async function main() {
  const files = walk(".");
  const urlToFiles = new Map();

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const matches = content.match(URL_RE);
    if (!matches) continue;
    for (const url of matches) {
      if (!urlToFiles.has(url)) urlToFiles.set(url, new Set());
      urlToFiles.get(url).add(file);
    }
  }

  const uniqueUrls = [...urlToFiles.keys()];
  console.log(`Found ${uniqueUrls.length} unique Unsplash URLs across ${files.length} scanned files.\n`);

  const outDir = "public/images/external";
  fs.mkdirSync(outDir, { recursive: true });

  const urlToLocalPath = new Map();
  let totalBefore = 0;
  let totalAfter = 0;
  let failed = 0;

  for (let i = 0; i < uniqueUrls.length; i++) {
    const url = uniqueUrls[i];
    process.stdout.write(`[${i + 1}/${uniqueUrls.length}] ${url.slice(0, 70)}... `);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrBuf = await res.arrayBuffer();
      const buf = Buffer.from(arrBuf);
      totalBefore += buf.length;

      const filename = slugFromUrl(url, i);
      const outPath = path.join(outDir, filename);

      const optimized = await sharp(buf)
        .resize({ width: 900, withoutEnlargement: true })
        .jpeg({ quality: 78, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(outPath, optimized);
      totalAfter += optimized.length;

      urlToLocalPath.set(url, `/images/external/${filename}`);
      console.log(`OK (${(buf.length / 1024).toFixed(0)}KB -> ${(optimized.length / 1024).toFixed(0)}KB)`);
    } catch (err) {
      failed++;
      console.log(`FAILED (${err.message})`);
    }
  }

  console.log(`\nDownloaded ${urlToLocalPath.size}/${uniqueUrls.length} images (${failed} failed).`);
  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB\n`);

  let filesChanged = 0;
  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");
    let changed = false;
    for (const [url, localPath] of urlToLocalPath) {
      if (content.includes(url)) {
        content = content.split(url).join(localPath);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(file, content);
      filesChanged++;
    }
  }

  console.log(`Rewrote ${filesChanged} source files to use local paths.`);
  if (failed > 0) {
    console.log(`\n${failed} URL(s) failed to download and were left pointing at Unsplash — check the FAILED lines above.`);
  }
}

main();
