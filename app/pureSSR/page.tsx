import SSRPosts from "@/components/SSRPosts";

import { store } from "@/store";
import { setStartupPosts } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupPosts(data));

  return (
    <main>
      <SSRPosts/>
    </main>
  );
}
