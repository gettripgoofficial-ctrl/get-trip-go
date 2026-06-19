"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useState, useCallback, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

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

interface SupabasePost {
  id: string;
  title: string;
  category: string;
  content: string;
  cover_image: string;
  author: string;
  created_at: string;
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

export default function BlogEditor({ onSave, initialData }: BlogEditorProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const editId = searchParams.get("edit");

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [category, setCategory] = useState(initialData?.category ?? CATEGORIES[0]);
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? "");
  const [author, setAuthor] = useState(initialData?.author ?? "");
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");
  const [editPost, setEditPost] = useState<SupabasePost | null>(null);

  // Fetch post for editing
  useEffect(() => {
    if (!editId) return;
    fetch(`/api/blog/${editId}`)
      .then((r) => r.json())
      .then((post: SupabasePost) => {
        setEditPost(post);
        setTitle(post.title);
        setCategory(post.category);
        setCoverImage(post.cover_image ?? "");
        setAuthor(post.author);
      })
      .catch(console.error);
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

    const payload = {
      title: title.trim(),
      category,
      content: editor.getHTML(),
      cover_image: coverImage,
      author: author.trim() || "Admin",
    };

    try {
      let savedPost: SupabasePost;

      if (editPost) {
        // Update existing
        const res = await fetch(`/api/blog/${editPost.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        savedPost = await res.json();
      } else {
        // Create new
        const res = await fetch("/api/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        savedPost = await res.json();
      }

      // Convert to BlogPost shape for onSave callback
      const blogPost: BlogPost = {
        id: savedPost.id,
        title: savedPost.title,
        category: savedPost.category,
        content: savedPost.content,
        coverImage: savedPost.cover_image,
        author: savedPost.author,
        createdAt: savedPost.created_at,
        slug: savedPost.slug,
      };

      onSave?.(blogPost);
      setSavedMsg(editPost ? "✓ Post updated!" : "✓ Post published!");
      setTimeout(() => {
        setSavedMsg("");
        router.push("/blog");
      }, 1500);
    } catch (err) {
      console.error(err);
      setSavedMsg("✗ Error saving post");
    } finally {
      setSaving(false);
    }
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
          <label className="block text-sm font-semibold text-gray-700 mb-1">Cover Image Path</label>
          <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)}
            placeholder="/images/blogs/my-cover.jpg"
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
          {savedMsg && (
            <span className={`font-medium text-sm ${savedMsg.startsWith("✗") ? "text-red-500" : "text-green-600"}`}>
              {savedMsg}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}