import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { PostParams } from "@/types/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    search: builder.query<PostParams[], string>({
      query: (q) => `search?title=${q}`,
      providesTags: (result, error, search) => [{ type: "post", search }],
    }),
  }),
});