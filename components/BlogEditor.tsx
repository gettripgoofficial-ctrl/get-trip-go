"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function ToolbarButton({
  onClick, active, title, children,
}: {
  onClick: () => void; active?: boolean; title: string; children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
        active ? "bg-orange-500 text-white" : "text-gray-600 hover:bg-orange-100 hover:text-orange-600"
      }`}
    >
      {children}
    </button>
  );
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  content: string;
  coverImage: string;
  author: string;
  createdAt: string;
  slug: string;
}

interface BlogEditorProps {
  onSave?: (post: BlogPost) => void;
  initialData?: Partial<BlogPost>;
}

const CATEGORIES = [
  "Travel Tips", "Family Travel", "Honeymoon Guide",
  "Adventure", "Budget Travel", "Destination Guide", "Food & Culture",
];

const toSlug = (str: string) =>
  str.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

export default function BlogEditor({ onSave, initialData }: BlogEditorProps) {
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [category, setCategory] = useState(initialData?.category ?? CATEGORIES[0]);
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? "");
  const [author, setAuthor] = useState(initialData?.author ?? "");
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");
  const [editPost, setEditPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (editId) {
      const stored: BlogPost[] = JSON.parse(localStorage.getItem("blog_posts") ?? "[]");
      const found = stored.find((p) => p.id === editId) ?? null;
      if (found) {
        setEditPost(found);
        setTitle(found.title);
        setCategory(found.category);
        setCoverImage(found.coverImage);
        setAuthor(found.author);
      }
    }
  }, [editId]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false, allowBase64: true }),
      Placeholder.configure({ placeholder: "Write your travel story here…" }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-orange max-w-none min-h-[320px] px-6 py-4 focus:outline-none text-gray-800 text-base leading-relaxed",
      },
    },
  });

  useEffect(() => {
    if (editor && editPost && !editor.isDestroyed) {
      editor.commands.setContent(editPost.content);
    }
  }, [editor, editPost]);

  const addImage = useCallback(() => {
    const url = window.prompt("Enter image URL:");
    if (url && editor) editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const handleSave = async () => {
    if (!title.trim() || !editor) return;
    setSaving(true);

    const post: BlogPost = {
      id: editPost?.id ?? Date.now().toString(),
      title: title.trim(),
      category,
      content: editor.getHTML(),
      coverImage,
      author: author.trim() || "Admin",
      createdAt: editPost?.createdAt ?? new Date().toISOString(),
      slug: editPost?.slug ?? toSlug(title),
    };

    const existing: BlogPost[] = JSON.parse(localStorage.getItem("blog_posts") ?? "[]");
    const idx = existing.findIndex((p) => p.id === post.id);
    if (idx >= 0) existing[idx] = post;
    else existing.unshift(post);
    localStorage.setItem("blog_posts", JSON.stringify(existing));

    onSave?.(post);
    setSaving(false);
    setSavedMsg(editPost ? "✓ Post updated!" : "✓ Post published!");
    setTimeout(() => setSavedMsg(""), 3000);
  };

  if (!editor) return null;
  const isEditing = !!editPost || !!editId;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1">Travel Stories</p>
          <h1 className="text-3xl font-extrabold text-gray-900">
            {isEditing ? "Edit Story" : "Write a New Story"}
          </h1>
        </div>
        {isEditing && (
          <a href="/blog/admin" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
            ← Back to Admin
          </a>
        )}
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Post Title <span className="text-orange-500">*</span>
          </label>
          <input
            type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. 10 Hidden Gems in Rajasthan"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-400 transition">
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Author Name</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Cover Image URL</label>
          <input type="url" value={coverImage} onChange={(e) => setCoverImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          {coverImage && (
            <img src={coverImage} alt="Cover preview"
              className="mt-3 w-full h-48 object-cover rounded-lg border border-gray-200" />
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Content <span className="text-orange-500">*</span>
          </label>
          <div className="flex flex-wrap items-center gap-1 border border-b-0 border-gray-300 rounded-t-lg bg-gray-50 px-3 py-2">
            <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} title="Bold"><strong>B</strong></ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} title="Italic"><em>I</em></ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive("strike")} title="Strikethrough"><s>S</s></ToolbarButton>
            <span className="w-px h-5 bg-gray-300 mx-1" />
            <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })} title="Heading 2">H2</ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })} title="Heading 3">H3</ToolbarButton>
            <span className="w-px h-5 bg-gray-300 mx-1" />
            <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} title="Bullet List">• List</ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} title="Ordered List">1. List</ToolbarButton>
            <span className="w-px h-5 bg-gray-300 mx-1" />
            <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")} title="Blockquote">❝</ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Divider" active={false}>─</ToolbarButton>
            <ToolbarButton onClick={addImage} title="Insert Image" active={false}>🖼 Image</ToolbarButton>
            <span className="w-px h-5 bg-gray-300 mx-1" />
            <ToolbarButton onClick={() => editor.chain().focus().undo().run()} title="Undo" active={false}>↩</ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().redo().run()} title="Redo" active={false}>↪</ToolbarButton>
          </div>
          <div className="border border-gray-300 rounded-b-lg bg-white focus-within:ring-2 focus-within:ring-orange-400 focus-within:border-transparent transition">
            <EditorContent editor={editor} />
          </div>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button type="button" onClick={handleSave} disabled={saving || !title.trim()}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-8 py-3 rounded-full transition-colors text-sm tracking-wide">
            {saving ? "Saving…" : isEditing ? "Update Story →" : "Publish Story →"}
          </button>
          {savedMsg && <span className="text-green-600 font-medium text-sm">{savedMsg}</span>}
        </div>
      </div>
    </div>
  );
}