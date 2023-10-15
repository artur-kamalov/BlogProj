"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setStartupPosts } from "@/store/searchSlice";
import { PostParams } from "@/types/types";

function Preloader({ posts }: { posts: PostParams[] }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupPosts(posts));
    loaded.current = true;
  }

  return null;
}

export default Preloader;
