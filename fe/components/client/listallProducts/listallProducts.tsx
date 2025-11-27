import { getAllProducts } from "@/lib/api/products"
import { Product } from "@/types/products"
import Link from "next/link";

export default async function GetListProducts () {

    const products: Product[] = await getAllProducts();

    return (

        <>
        
            <h1 className="text-center mt-3 text-xl">All Products Are Here</h1>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
            {products.map((product) => (
                <Link
                key={product.id}
                href={`/products/${product.slug}`}
                title={product.name} // Tooltip like alt
                className="bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition cursor-pointer block"
                >
                <img
                    src={product.img_main}
                    alt={product.name}
                    className="w-auto h-auto object-cover rounded-md"
                />

                <h2 className="text-sm font-medium mt-2 line-clamp-2">
                    {product.name}
                </h2>

                <p className="text-red-600 font-semibold mt-1">
                    {Number(product.product_price).toLocaleString()}₫
                </p>
                </Link>
            ))}
            </div>


        </>

    )

}