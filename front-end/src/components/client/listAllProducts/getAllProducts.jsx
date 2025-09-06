"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "@/ultis/api";
import { formatVND } from "@/ultis/format";
import Link from "next/link";


export default function GetListProducts () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    getAllProducts()
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error fetching products:", err))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="p-6">Loading...</p>;

    return (
        <div>
            <h1 className="text-center mt-3 text-xl">All Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
                {products.map((product) => (
                    <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    className="border rounded-lg p-4 shadow hover:shadow-md transition"
                    >
                    <img
                        src={product.img_main || "/placeholder.png"}
                        alt={product.name}
                        className="w-full h-auto object-cover rounded"
                    />
                    <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                    <p className="text-gray-600">{formatVND(product.product_price)}</p>
                    </Link>
                ))}
            </div>
        </div>
    );

}