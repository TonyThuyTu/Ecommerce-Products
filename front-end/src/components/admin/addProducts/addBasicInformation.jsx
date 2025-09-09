

export default function AddBasicInformation() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-3/5">
      <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
      
        <input
          type="text"
          placeholder="Product Name"
          className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input 
            type="text"
            placeholder="Product Price"
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-3"
        />

        <input 
            type="text" 
            placeholder="Product Slug (auto)" 
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-3"
            disabled
        />
        
    </div>
  );
}
