"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/types/blog";
import { AdminAuthProvider } from "@/components/AdminAuthContext";
import AdminLoginGate from "@/components/AdminLoginGate";

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDate(iso: string | undefined) {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ── Delete Confirm Modal ──────────────────────────────────────────────────────
function DeleteModal({
  post,
  onConfirm,
  onCancel,
}: {
  post: BlogPost;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
        <div className="text-center mb-5">
          <div className="text-4xl mb-3">🗑️</div>
          <h3 className="text-lg font-extrabold text-gray-900 mb-1">
            Delete this story?
          </h3>
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">"{post.title}"</span>{" "}
            will be permanently removed. This cannot be undone.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 border border-gray-300 text-gray-700 font-bold py-2.5 rounded-full text-sm hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 rounded-full text-sm transition-colors"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Blog Row ──────────────────────────────────────────────────────────────────
function BlogRow({
  post,
  onDelete,
}: {
  post: BlogPost;
  onDelete: (post: BlogPost) => void;
}) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Cover thumbnail */}
      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl">
            ✈️
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-wide">
            {post.category}
          </span>
        </div>
        <h3 className="text-sm font-bold text-gray-900 truncate">{post.title}</h3>
        <p className="text-xs text-gray-400 mt-0.5">
          By {post.author} · {formatDate(post.createdAt)}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          href={`/blog/${post.slug}`}
          target="_blank"
          className="text-xs text-gray-500 hover:text-blue-600 font-semibold px-3 py-1.5 rounded-full border border-gray-200 hover:border-blue-300 transition-colors"
        >
          View
        </Link>
        <Link
          href={`/blog/write?edit=${post.id}`}
          className="text-xs text-white font-semibold px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(post)}
          className="text-xs text-white font-semibold px-3 py-1.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// ── Main Admin Dashboard ──────────────────────────────────────────────────────
function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [deleteTarget, setDeleteTarget] = useState<BlogPost | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const stored: BlogPost[] = JSON.parse(
      localStorage.getItem("blog_posts") ?? "[]"
    );
    setPosts(stored);
    setMounted(true);
  }, []);

  const handleDelete = (post: BlogPost) => setDeleteTarget(post);

  const confirmDelete = () => {
    if (!deleteTarget) return;
    const updated = posts.filter((p) => p.id !== deleteTarget.id);
    setPosts(updated);
    localStorage.setItem("blog_posts", JSON.stringify(updated));
    setDeleteTarget(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1">
              Admin Panel
            </p>
            <h1 className="text-2xl font-extrabold text-gray-900">
              Manage Blog Stories
            </h1>
          </div>
          <Link
            href="/blog/write"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors"
          >
            + New Story
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Stories", value: posts.length, icon: "📝" },
            {
              label: "Categories",
              value: new Set(posts.map((p) => p.category)).size,
              icon: "🗂️",
            },
            {
              label: "Latest",
              value:
                posts.length > 0
                  ? formatDate(posts[0].createdAt)
                  : "—",
              icon: "🕐",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-4 shadow-sm text-center"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-extrabold text-gray-900">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Posts list */}
        {!mounted ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-24 bg-white rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-3">✍️</div>
            <h3 className="text-lg font-extrabold text-gray-800 mb-2">
              No stories yet
            </h3>
            <p className="text-gray-500 text-sm mb-5">
              Start writing your first travel story.
            </p>
            <Link
              href="/blog/write"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Write First Story →
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <BlogRow key={post.id} post={post} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>

      {/* Delete modal */}
      {deleteTarget && (
        <DeleteModal
          post={deleteTarget}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}

// ── Page export wrapped in auth ───────────────────────────────────────────────
export default function AdminPage() {
  return (
    <AdminAuthProvider>
      <AdminLoginGate>
        <AdminDashboard />
      </AdminLoginGate>
    </AdminAuthProvider>
  );
}