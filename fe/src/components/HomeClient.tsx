// src/components/HomeClient.tsx
"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { GetAllproducts } from "@/types/getallproducts";

export default function HomeClient({ initialProducts }: { initialProducts: GetAllproducts[] }) {
  const [products, setProducts] = useState<GetAllproducts[]>(initialProducts);
  const [loading, setLoading] = useState(false);

  // optional: refetch client-side if needed
  useEffect(() => {
    // you can call getProducts() here again if you want fresh data
  }, []);

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
