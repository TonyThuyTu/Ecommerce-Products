import Link from "next/link";

export default function AddButton() {
  return (
    <div className="flex justify-end mt-6">
        <Link
            href='/admin/product'
            className="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-xl shadow hover:bg-gray-300 transition"
        >
            Cancle
        </Link>

        <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition ml-1"
        >
            Save
        </button>
    </div>
  );
}
