import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return <div>details of product with {id}</div>;
};

export default ProductDetails;
