"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { GetAllproducts } from "@/types/getallproducts";
import { getProducts } from "@/services/getAll";

export default function HomePage() {
  const [products, setProducts] = useState<GetAllproducts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []); // ✅ run once on mount

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <main className="p-6 bg-gray-50 min-h-screen flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
