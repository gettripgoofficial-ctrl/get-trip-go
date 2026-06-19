import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(_: NextRequest, { params }: { params: { slug: string } }) {
  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 404 });
  return NextResponse.json(data);
}