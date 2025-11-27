import axios from "axios";
import { Product } from "@/types/products";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

//Get all products
export const getAllProducts = async (): Promise<Product[]> => {
    const res = await API.get("/product");
    return res.data;
};