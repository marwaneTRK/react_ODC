import Layout from "./component/Layout";
import ProductList from "./component/ProductList";
function App() {
  return (
    <div className="h-screen w-screen flex flex-col gap-6 p-6">
      <Layout />
      <ProductList />
    </div>
  );
}

export default App;
