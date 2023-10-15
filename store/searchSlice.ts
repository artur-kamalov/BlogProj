import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { PostParams } from "@/types/types";

export interface SearchState {
  search: string;
  startupPosts: PostParams[];
}

const initialState: SearchState = {
  search: "",
  startupPosts: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupPosts: (state, action: PayloadAction<PostParams[]>) => {
      state.startupPosts = action.payload;
    },
  },
});

export const { setSearch, setStartupPosts } = searchSlice.actions;
export default searchSlice.reducer;
