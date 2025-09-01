import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
});

export const getProducts = async () => {
  try {
    const res = await api.get("/api/product");
    return res.data; // this will be your array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};