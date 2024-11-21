import SearchForm from "./components/SearchForm";
import CarOptions from "./components/CarOptions";
import OptionsBuy from "./components/OptionsBuy";

export default function Home() {
  return (
   <>
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 h-screen">
      <div className="h-full border border-gray-200 rounded-md p-5">
        <SearchForm />
        <h2 className="font-medium mt-4 mb-2 text-[14px]">Options</h2>
        <OptionsBuy />
        <h2 className="font-medium mt-4 mb-2 text-[14px]">Buy</h2>
        <CarOptions />
        <h2 className="font-medium mt-4 mb-2 text-[14px]">Cars</h2>
      </div>
    </div>

   </>
  );
}
