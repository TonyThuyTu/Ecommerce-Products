"use client";

import { useState } from "react";
import Link from "next/link";
import ProductDescriptionEditor from "./description";
import axios from "axios";

export default function BasicInfo() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");
  const [preview, setPreview] = useState<string | null>(null);
  const [imgFile, setImgFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImgFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name_product", name);
      formData.append("slug", slug);
      formData.append("price_product", price);
      formData.append("description", description);
      formData.append("status", status);

      if (imgFile) formData.append("img_main", imgFile);

      const res = await axios.post("http://localhost:5000/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(res.data.message);
      // Reset form if needed
      setName("");
      setSlug("");
      setPrice("");
      setDescription("");
      setStatus("active");
      setImgFile(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Failed to create product");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Basic Product Information
        </h2>

        {/* TOP SECTION — GRID 2 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter product name..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Price
              </label>
              <input
                type="number"
                placeholder="Enter price..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Slug
              </label>
              <input
                type="text"
                placeholder="Auto-generated"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
          </div>

          {/* RIGHT SIDE — MAIN IMAGE */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Main Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center gap-3 hover:border-blue-400 transition">
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-48 h-48 object-cover rounded-lg shadow"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setImgFile(null);
                      const fileInput = document.getElementById("mainImg") as HTMLInputElement;
                      if (fileInput) fileInput.value = "";
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm mt-2"
                  >
                    Remove Image
                  </button>
                </>
              ) : (
                <div className="text-gray-400">No image selected</div>
              )}

              <label
                htmlFor="mainImg"
                className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
              >
                Upload Image
              </label>
              <input
                id="mainImg"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION — FULL WIDTH */}
        <div className="mt-3">
          <ProductDescriptionEditor description={description} setDescription={setDescription} />
        </div>

        <div className="flex justify-end mt-6 gap-3">
          <Link
            href="/admin/products"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition flex items-center justify-center"
          >
            Cancel
          </Link>

          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
