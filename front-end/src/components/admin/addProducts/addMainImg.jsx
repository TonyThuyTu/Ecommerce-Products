
export default function AddMainImg () {
     return (
        <div className="bg-white rounded-2xl shadow p-6 w-2/5">
        <h2 className="text-lg font-semibold mb-4">Add Main Img</h2>
        
            <input
            type="file"
            placeholder="Product Img"
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            
        </div>
  );
}