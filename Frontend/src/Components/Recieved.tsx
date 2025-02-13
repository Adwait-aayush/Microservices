import { useData } from "./Context";

export default function Received() {
  const { data } = useData();

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-xl font-semibold mb-4">Received</h2>
      <div className="w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-white">
        <p className="text-gray-500 text-sm">
          {data ? JSON.stringify(data,undefined,4) : "No data yet"}
        </p>
      </div>
    </div>
  );
}