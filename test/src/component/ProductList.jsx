import ProductCard from "./ProductCard";

const ProductList = ({ query }) => {
  const product = [
    {
      title: "title1",
      description: "description1",
      price: "price 1",
      onAddCart: () => {
        alert("product 1 added to cart");
      },
    },
    {
      title: "title2",
      description: "description2",
      price: "price 2",
      onAddCart: () => {
        alert("product 2 added to cart");
      },
    },
    {
      title: "title3",
      description: "description3",
      price: "price 3",
      onAddCart: () => {
        alert("product 3 added to cart");
      },
    },
  ];
  const filterProducts = product.filter((product) =>
    product.title.toLocaleLowerCase().includes(query)
  );
  return (
    <>
      <div className="grid md:grid-cols-3 gap-2 p-12 ">
        {filterProducts.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
