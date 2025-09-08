export default function AddDescription () {

    return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Description</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea
          placeholder="Description"
          rows={4}
          className="col-span-2 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );

}