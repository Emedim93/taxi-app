import SearchForm from "./components/SearchForm";
import CarOptions from "./components/CarOptions";
import OptionsBuy from "./components/OptionsBuy";

export default function Home() {
  return (
   <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-screen">
        <div className="h-full border border-gray-200 rounded-md p-5 md:col-span-1 order-last md:order-first">
          <SearchForm />
          <h2 className="font-medium mt-4 mb-2 text-[14px]">Options</h2>
          <CarOptions />
          <OptionsBuy />
          <button className="bg-yellow-400 text-black border border-yellow-500 hover:bg-transparent p-2 text-sm rounded-md mt-5 transition-all">
            Calculate the course
          </button>
        </div>
        <div className="h-full col-span-2md:order-2 order-first p-4 border border-gray-200 rounded-md"><iframe className="h-full w-full rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9677766613!2d2.2646365588019544!3d48.85882549354105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1732198169198!5m2!1sfr!2sfr" width="600" height="450"  loading="lazy" ></iframe>
        </div>
      </div>
   </>
  );
}
