import { getAllProducts } from "@/lib/api/products";
import { Product } from "@/types/products";
import Link from "next/link";

export default async function GetListTableProducts() {

    const products: Product[] = await getAllProducts();
    
    const statusBadge = (status: number) => {

        switch (status) {
            case 0: return <span className="px-2 py-1 rounded bg-yellow-200 text-yellow-800 font-semibold">Pending</span>;
            case 1: return <span className="px-2 py-1 rounded bg-green-200 text-green-800 font-semibold">Active</span>;
            case 2: return <span className="px-2 py-1 rounded bg-gray-200 text-gray-800 font-semibold">Private</span>;
        }

    };

    return (
        <div className="p-6">
        <h1 className="text-center mt-3 text-2xl font-bold">Products Manage</h1>

        <Link href="/admin/products/add">
            <button className="px-2 py-1 rounded bg-yellow-200 text-yellow-800 font-semibold hover:bg-yellow-300 transition">
                Add Product
            </button>
        </Link>

        <div className="overflow-x-auto mt-6">
            <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-100">
                <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Image</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Slug</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm">{product.id}</td>
                    <td className="px-4 py-2">
                    <img
                        src={product.img_main}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                    />
                    </td>
                    <td className="px-4 py-2 text-sm">{product.name}</td>
                    <td className="px-4 py-2 text-sm text-red-600 font-semibold">
                    {Number(product.product_price).toLocaleString()}₫
                    </td>
                    <td className="px-4 py-2 text-sm">{product.slug}</td>
                    <td className="px-4 py-2 text-sm">{statusBadge(product.status)}</td>
                    <td className="px-4 py-2 text-sm flex gap-2">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Edit
                    </button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
}
