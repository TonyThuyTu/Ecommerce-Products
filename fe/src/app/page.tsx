// src/app/page.tsx
import type { Metadata } from "next";
import { getProducts } from "@/services/getAll";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description: "Browse all products in our store",
};

export default async function HomePage() {
  // fetch products on the server
  const products = await getProducts();

  // pass them to a client component for rendering
  return <HomeClient initialProducts={products} />;
}
