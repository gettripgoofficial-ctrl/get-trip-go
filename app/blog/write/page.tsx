"use client";

import AdminLoginGate from "@/components/AdminLoginGate";
import BlogEditor from "@/components/BlogEditor";
import { AdminAuthProvider } from "@/components/AdminAuthContext";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/components/BlogEditor";

export default function WriteBlogPage() {
  const router = useRouter();

  const handleSave = (post: BlogPost) => {
    // After saving, redirect to the blog listing page
    router.push("/blog");
  };

  return (
    <AdminAuthProvider>
      <AdminLoginGate>
        <BlogEditor onSave={handleSave} />
      </AdminLoginGate>
    </AdminAuthProvider>
  );
}