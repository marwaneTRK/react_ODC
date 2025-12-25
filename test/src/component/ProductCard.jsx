import Button from "./Button";

const ProductCard = ({ ...product }) => {
  return (
    <div
      className={`bg-gray-300 shadow-md py-8 p-4 rounded w-1/3 text-center  `}
    >
      <h1 className="text-lg font-bold text-blue-800">{product.title}</h1>
      <p className="text-xs text-red-700">{product.description}</p>
      <p className="text-sm font-semibold">${product.price}</p>

      <Button onClick={product.onAddCart} variant="secondary">
        Ajouter au panier
      </Button>
    </div>
  );
};

export default ProductCard;
