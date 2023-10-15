import { store } from "@/store";

import Posts from "./Posts";

function SSRPosts() {
  return (
    <div>
      <Posts posts={store.getState().search.startupPosts} />
    </div>
  );
}

export default SSRPosts;
