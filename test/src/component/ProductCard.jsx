const ProductCard = ({ title, description, price, custom = "", onAddCart }) => {
  return (
    <div
      className={`bg-gray-100 shadow-md py-8 p-4 rounded w-1/4 text-center ${custom}`}
    >
      <h1 className="text-lg font-bold text-blue-800">{title}</h1>
      <p className="text-xs text-red-700">{description}</p>
      <p className="text-sm font-semibold">${price}</p>

      <button
        onClick={onAddCart}
        className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
