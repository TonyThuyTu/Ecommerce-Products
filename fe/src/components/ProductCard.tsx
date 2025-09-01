import Image from "next/image";
import Link from "next/link";
import { GetAllproducts } from "@/types/getallproducts";

interface Props {
  product: GetAllproducts;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="p-4 border rounded-2xl shadow hover:shadow-lg transition bg-white cursor-pointer flex flex-col items-center">
        <Image
          src={product.img_main}
          alt={product.name}
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-50"
        />
        <h2 className="mt-3 text-lg font-semibold text-center text-red-500">{product.name}</h2>
        <p className="text-blue-600 font-bold text-center mt-1 text-xl">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(Number(product.product_price))}
        </p>
      </div>
    </Link>
  );
}
