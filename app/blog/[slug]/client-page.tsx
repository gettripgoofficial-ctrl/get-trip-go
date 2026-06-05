"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── Not Found ─────────────────────────────────────────────────────────────────
function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl mb-4">🗺️</div>
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
        Story Not Found
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        This story may have been removed or the link is incorrect.
      </p>
      <Link
        href="/blog"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
      >
        ← Back to All Stories
      </Link>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function BlogPostClient() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored: BlogPost[] = JSON.parse(
      localStorage.getItem("blog_posts") ?? "[]"
    );
    const found = stored.find((p) => p.slug === slug) ?? null;
    setPost(found);

    // Related posts — same category, exclude current
    if (found) {
      const rel = stored
        .filter((p) => p.slug !== slug && p.category === found.category)
        .slice(0, 3);
      setRelated(rel);
    }

    setMounted(true);
  }, [slug]);

  // Loading skeleton
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 animate-pulse">
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4" />
          <div className="h-10 bg-gray-200 rounded w-3/4" />
          <div className="h-64 bg-gray-200 rounded-2xl w-full" />
          <div className="space-y-3 pt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Cover image hero ── */}
      {post.coverImage && (
        <div className="w-full h-72 sm:h-96 overflow-hidden relative">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {/* Category badge */}
          <span className="absolute top-5 left-5 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
            {post.category}
          </span>
        </div>
      )}

      {/* ── Article ── */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 transition-colors mb-6"
        >
          ← All Stories
        </Link>

        {/* Category (if no cover image) */}
        {!post.coverImage && (
          <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-4">
            {post.category}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
            {post.author.charAt(0).toUpperCase()}
          </div>
          <span className="font-medium text-gray-600">{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.createdAt)}</span>
        </div>

        {/* Rich text content */}
        <div
          className="prose prose-orange prose-lg max-w-none
            prose-headings:font-extrabold prose-headings:text-gray-900
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-orange-400 prose-blockquote:text-gray-600
            prose-img:rounded-xl prose-img:shadow-md
            prose-strong:text-gray-900
            prose-li:text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ── Share + Actions ── */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 font-medium">Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-gray-100 hover:bg-orange-100 hover:text-orange-600 text-gray-600 font-semibold px-3 py-1.5 rounded-full transition-colors"
            >
              𝕏 Twitter
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-gray-100 hover:bg-green-100 hover:text-green-600 text-gray-600 font-semibold px-3 py-1.5 rounded-full transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <Link
            href="/blog"
            className="text-sm text-orange-500 hover:text-orange-600 font-semibold transition-colors"
          >
            ← Back to All Stories
          </Link>
        </div>
      </div>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <div className="bg-white border-t border-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1">
              More Stories
            </p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              You Might Also Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="group flex gap-4 bg-gray-50 hover:bg-orange-50 rounded-xl p-4 transition-colors"
                >
                  {r.coverImage && (
                    <img
                      src={r.coverImage}
                      alt={r.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                  <div className="flex flex-col justify-center">
                    <span className="text-orange-500 text-xs font-bold uppercase tracking-wide mb-1">
                      {r.category}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <span className="text-xs text-gray-400 mt-1">
                      {formatDate(r.createdAt)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}