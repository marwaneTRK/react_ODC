import { useContext } from "react";
import { Button } from "./Button";
import { AuthContext } from "./AuthContext";

export default function ProductCard({...product}) {
    const {user} = useContext(AuthContext);
    return (
        <div className="bg-gray-100 shadow-ms py-8">
            <h1 className="text-lg font-bold text-green-800">
                {product.title}</h1>
            <p className="text-xs text-gray-800">
                {product.description}
            </p>
            <p className="text-xs text-gray-800"
            > {product.price}</p>
            {
                user==null ? <p>Authentifiez vous pour acheter des prods </p> :
                 <Button onClick={product.onAddCart} variant="danger">
            Ajouter au panier</Button>
            }
          
        </div>
    );
}