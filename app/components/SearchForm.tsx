import { FaMapPin } from "react-icons/fa";

export default function searchForm() {
  return (
    <>
      <label className="font-bold mb-2 text-sm text-gray-400">Départ</label>
      <div className="border border-gray-200 relative p-3 rounded-md shadow-md mb-2">
        <FaMapPin className="absolute left-2 top-4 text-gray-400" />
        <input type="text" className="w-full pl-5 outline-none" />
      </div>
      <label className="font-bold mb-2 text-sm text-gray-400">Déstination</label>
      <div className="border border-gray-200 relative p-3 rounded-md shadow-md mb-2">
        <FaMapPin className="absolute left-2 top-4 text-gray-400" />
        <input type="text" className="w-full pl-5 outline-none" />
      </div>
    </>
  )
}
