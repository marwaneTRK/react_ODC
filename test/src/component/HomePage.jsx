import { useState } from "react";
import { Layout } from "./Layout";
import { ProductList } from "./ProductList";
import { SerachBar } from "./SearchBar";
import { Counter } from "./Counter";

export function HomePage() {
  const [query, setQuery] = useState("");
  return (
    <Layout>
      {/* <div>
                <SerachBar query={query} onChangeQuery={setQuery} />
                <ProductList query={query} />
            </div> */}
      <Counter />
    </Layout>
  );
}
