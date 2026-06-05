"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

const BG = "#F8F9FF";

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").slice(0, 120) + "…";
}

// ── Blog Card ─────────────────────────────────────────────────────────────────
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        {/* Cover image */}
        <div className="relative h-52 overflow-hidden bg-gray-100">
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-blue-100">
              <span className="text-4xl">✈️</span>
            </div>
          )}
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h2 className="text-gray-900 font-extrabold text-lg leading-snug mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
            {stripHtml(post.content)}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs text-gray-400 font-medium">
              By {post.author}
            </span>
            <span className="text-xs text-gray-400">
              {formatDate(post.createdAt)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ── Empty State ───────────────────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
      <div className="text-6xl mb-4">✍️</div>
      <h3 className="text-xl font-extrabold text-gray-800 mb-2">
        No stories yet
      </h3>
      <p className="text-gray-500 text-sm mb-6">
        Be the first to share a travel story with the world.
      </p>
      <Link
        href="/blog/write"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
      >
        Write First Story →
      </Link>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "All",
  "Travel Tips",
  "Family Travel",
  "Honeymoon Guide",
  "Adventure",
  "Budget Travel",
  "Destination Guide",
  "Food & Culture",
];

export default function BlogListingPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("blog_posts");
    if (stored) setPosts(JSON.parse(stored));
    setMounted(true);
  }, []);

  const filtered = posts.filter((p) => {
    const matchCat =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      search.trim() === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG }}>

      {/* ── Hero banner ── */}
      <div
        className="border-b border-gray-200 py-14 sm:pt-36 sm:pb-16 px-4 text-center"
        style={{ backgroundColor: BG }}
      >
        <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">
          Travel Stories
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
          Go Further. Know More.
        </h1>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-8">
          Insider travel intel, destination guides, and trip‑planning wisdom —
          straight from the team that lives and breathes travel every single day.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stories or authors…"
            className="w-full border border-gray-300 rounded-full px-5 py-3 pr-12 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            style={{ backgroundColor: "#fff" }}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            🔍
          </span>
        </div>
      </div>

      {/* ── Category filter ── */}
      <div
        className="sticky top-0 z-10 border-b border-gray-200 shadow-sm"
        style={{ backgroundColor: BG }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-colors border ${
                activeCategory === cat
                  ? "bg-orange-500 text-white border-orange-500"
                  : "text-gray-600 border-gray-200 hover:border-orange-400 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Write button */}
          <Link
            href="/blog/write"
            className="ml-auto whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            + Write Story
          </Link>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {!mounted ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse"
              >
                <div className="h-52 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length === 0 ? (
              <EmptyState />
            ) : (
              filtered.map((post) => <BlogCard key={post.id} post={post} />)
            )}
          </div>
        )}

        {mounted && filtered.length > 0 && (
          <p className="text-center text-gray-400 text-xs mt-10">
            Showing {filtered.length} {filtered.length === 1 ? "story" : "stories"}
          </p>
        )}
      </div>
    </div>
  );
}