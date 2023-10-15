"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";
import { postsApi } from "@/store/postsApi";

import { PostParams } from "@/types/types";

import Posts from "./Posts";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const startupPosts = useAppSelector((state) => state.search.startupPosts);
  const data = useAppSelector(
    (state) =>
      state.postsApi.queries[`search("${search}")`]?.data as PostParams[]
  );

  useEffect(() => {
    dispatch(postsApi.endpoints.search.initiate(search));
    console.log("SearchInput.tsx DATA ==================")
    console.log(data)
    
  }, [dispatch, search, data]);
  console.log(startupPosts)

  return (
    <div>
      <input
        placeholder="search"
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <Posts posts={search.length ? data ?? [] : startupPosts} />
    </div>
  );
};

export default SearchInput;
