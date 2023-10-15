import { NextResponse } from "next/server";

import posts from "@/posts.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");
  const postData = posts.filter((p) =>
    p.title.toLowerCase().includes(title?.toLowerCase() ?? "")
  );
  console.log(postData)
  return NextResponse.json(postData);
}
