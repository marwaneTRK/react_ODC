import Layout from "./Layout";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";

const HomePage = ({ query, setQuery }) => {
  return (
    <>
      <Layout>
        <SearchBar query={query} setQuqery={setQuery} />
        <ProductList query={query} setQuqery={setQuery} />
      </Layout>
    </>
  );
};
export default HomePage;
