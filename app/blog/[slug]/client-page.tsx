"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { BlogPost } from "@/types/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl mb-4">🗺️</div>
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Story Not Found</h1>
      <p className="text-gray-500 text-sm mb-6">This story may have been removed or the link is incorrect.</p>
      <Link href="/blog"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
        ← Back to Stories
      </Link>
    </div>
  );
}

export default function BlogPostClient() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/blog/slug/${slug}`)
      .then((r) => {
        if (!r.ok) { setNotFound(true); return null; }
        return r.json();
      })
      .then((p) => {
        if (!p) return;
        const mapped: BlogPost = {
          id: p.id,
          title: p.title,
          category: p.category,
          content: p.content,
          coverImage: p.cover_image ?? "",
          author: p.author,
          createdAt: p.created_at,
          slug: p.slug,
        };
        setPost(mapped);

        // Fetch related posts
        return fetch("/api/blog")
          .then((r) => r.json())
          .then((all) => {
            const rel = all
              .filter((r: any) => r.slug !== slug && r.category === p.category)
              .slice(0, 3)
              .map((r: any) => ({
                id: r.id, title: r.title, category: r.category,
                content: r.content, coverImage: r.cover_image ?? "",
                author: r.author, createdAt: r.created_at, slug: r.slug,
              }));
            setRelated(rel);
          });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 animate-pulse">
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4" />
          <div className="h-10 bg-gray-200 rounded w-3/4" />
          <div className="h-64 bg-gray-200 rounded-2xl w-full" />
          {[1,2,3,4].map((i) => <div key={i} className="h-4 bg-gray-200 rounded w-full" />)}
        </div>
      </div>
    );
  }

  if (notFound || !post) return <NotFound />;

  // Only available once the client-side fetch resolves — Google's slower
  // "second wave" render picks this up rather than the fast initial-HTML pass.
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.coverImage ? [post.coverImage] : undefined,
    datePublished: post.createdAt,
    dateModified: post.createdAt,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Get Trip Go",
      logo: { "@type": "ImageObject", url: "https://gettripgo.com/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gettripgo.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Script
        id="blogposting-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      {post.coverImage && (
        <div className="w-full h-72 sm:h-96 overflow-hidden relative">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute top-5 left-5 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
            {post.category}
          </span>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 transition-colors mb-6">
          ← All Stories
        </Link>

        {!post.coverImage && (
          <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-4">
            {post.category}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">{post.title}</h1>

        <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
            {post.author.charAt(0).toUpperCase()}
          </div>
          <span className="font-medium text-gray-600">{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.createdAt)}</span>
        </div>

        <div className="prose prose-orange prose-lg max-w-none
          prose-headings:font-extrabold prose-headings:text-gray-900
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-orange-400 prose-blockquote:text-gray-600
          prose-img:rounded-xl prose-img:shadow-md
          prose-strong:text-gray-900 prose-li:text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center gap-4">
          <span className="text-sm text-gray-500 font-medium">Share:</span>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
            target="_blank" rel="noopener noreferrer"
            className="text-xs bg-gray-100 hover:bg-orange-100 hover:text-orange-600 text-gray-600 font-semibold px-3 py-1.5 rounded-full transition-colors">
            𝕏 Twitter
          </a>
          <a href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + (typeof window !== "undefined" ? window.location.href : ""))}`}
            target="_blank" rel="noopener noreferrer"
            className="text-xs bg-gray-100 hover:bg-green-100 hover:text-green-600 text-gray-600 font-semibold px-3 py-1.5 rounded-full transition-colors">
            WhatsApp
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <div className="bg-white border-t border-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1">More Stories</p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.slug}`}
                  className="group flex gap-4 bg-gray-50 hover:bg-orange-50 rounded-xl p-4 transition-colors">
                  {r.coverImage && (
                    <img src={r.coverImage} alt={r.title} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                  )}
                  <div className="flex flex-col justify-center">
                    <span className="text-orange-500 text-xs font-bold uppercase tracking-wide mb-1">{r.category}</span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2">{r.title}</h3>
                    <span className="text-xs text-gray-400 mt-1">{formatDate(r.createdAt)}</span>
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