import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({

    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },

});

export const getAllProducts = async () => {

    const res = await api.get("/product");
    return res.data;

}

export default api;
