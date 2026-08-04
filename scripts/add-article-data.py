"""
Usage: python3 scripts/add-article-data.py <slug> <faq_block> <related_block> <seo_line>
Appends a new entry to kenyaArticleFaqs.ts / kenyaArticleRelated.ts / kenyaArticleSeo.ts
safely, regardless of whether the file already ends with a trailing comma.
"""
import re, sys, pathlib

def append_entry(path, new_entry_block):
    p = pathlib.Path(path)
    c = p.read_text().rstrip()
    # Strip one or more trailing commas right before the final closing brace
    c = re.sub(r",*\s*}\s*$", "", c)
    c = c.rstrip()
    if not c.endswith(","):
        c += ","
    c += "\n" + new_entry_block.rstrip() + "\n}"
    p.write_text(c + "\n")

if __name__ == "__main__":
    print("Import append_entry() and call per-file — see inline usage in future article scripts.")
