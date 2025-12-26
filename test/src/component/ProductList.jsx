import { useState } from "react";
import ProductCard from "./ProductCard";

export function ProductList({query}) {
    const products = [
        {
            title: "title 1",
            description: "description 1",
            price: "price 1",
            onAddCart: () => {
                alert("product 1 added to cart")
            }
        },
        {
            title: "title 2",
            description: "description 2",
            price: "price 2",
            onAddCart: () => {
                alert("product 2 added to cart")
            }
        },
        {
            title: "title 3",
            description: "description 3",
            price: "price 3",
            onAddCart: () => {
                alert("product 3 added to cart")
            }
        }
    ];
    const filteredProducts= products.filter((product)=>product.title.toLocaleLowerCase()
    .includes(query.toLocaleLowerCase()));
    return (
        <>
            <div className="grid md:grid-cols-3 gap-8 p-12">
                {
                    filteredProducts.map((product) => <ProductCard {...product} />)
                }
            </div>
        </>

    );
}