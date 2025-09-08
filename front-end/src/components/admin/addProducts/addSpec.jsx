export default function AddSpec() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">⚙️ Specifications</h2>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Specification Name (e.g. Material)"
          className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Specification Value (e.g. Cotton)"
          className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
