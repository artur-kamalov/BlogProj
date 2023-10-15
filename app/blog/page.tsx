import SearchInput from "@/components/SearchInput";
import Providers from "@/components/Provider";
import Preloader from "@/components/Preloader";

import { store } from "@/store";
import { setStartupPosts } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupPosts(data));
  
  return (
    <div>
      <h1 className='m-8 grid place-items-center font-bold'>
          Blog page
      </h1>
      <Preloader posts={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </div>
  );
}
