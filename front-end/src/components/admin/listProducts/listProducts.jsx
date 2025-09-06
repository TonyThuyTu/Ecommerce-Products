"use client";

import { useRouter } from "next/navigation";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/ultis/api";
import { formatVND } from "@/ultis/format";

export default function ListProducts () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    const handleUpdate = (productId) => {
        router.push(`/admin/product/${productId}`);
    };

    useEffect(() => {
    getAllProducts()
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error fetching products:", err))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="p-6">Loading...</p>;

    return (
        <div>
            <h1 className="text-center mt-3 text-xl">Products Manager</h1>
            <div className="p-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                    <thead className="bg-black-100">
                        <tr>
                        <th className="px-4 py-2 border">#</th>
                        <th className="px-4 py-2 border">Image</th>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border">Slug</th>
                        <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product, index) => (
                        <tr key={product.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border text-center">{index + 1}</td>
                            <td className="px-4 py-2 border">
                            <img
                                src={product.img_main || "/placeholder.png"}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded"
                            />
                            </td>
                            <td className="px-4 py-2 border">{product.name}</td>
                            <td className="px-4 py-2 border text-red-600 font-semibold">
                            {formatVND(product.product_price)}
                            </td>
                            <td className="px-4 py-2 border">{product.slug}</td>
                            <td className="px-4 py-2 border">
                                <button
                                    className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded px-2 py-1 transition"
                                    onClick={() => handleUpdate(product.id)}
                                    title="Update"
                                    >
                                    <PencilIcon className="w-5 h-5 inline" />
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>

        </div>
    );

}