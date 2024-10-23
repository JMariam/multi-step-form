import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Plans() {
  return (
    <div className="">
      <div className="bg-Magnolia h-[47rem] lg:h-[100vh] lg:flex lg:items-center lg:justify-center">
        <div className="lg:bg-white lg:shadow-xl lg:px-2 lg:rounded-xl lg:flex lg:items-center  lg:justify-center xl:w-[60%] lg:h-[60%] xl:h-[80%]">
          <Navbar />
          <div className="bg-white w-[90%] mx-auto shadow-Light-gray shadow-xl lg:shadow-none relative -top-[80px] lg:-top-0 rounded-lg px-6 py-8 pb-10 xl:px-20 lg:px-">
            <p className="font-[700] text-[24px] text-black">
              Pick add-ons
            </p>
            <p className="text-[16px] text-Cool-gray my-3">
              Add-ons help enhamce your gaming experience.
            </p>
            <div className="flex flex-col gap-4 mt-4"></div>
            <div className="lg:flex hidden mt-6 items-center justify-between">
              <Link href="/plans" className="text-[12px] text-Cool-gray">
                Go back
              </Link>
              <Link
                href="/summary"
                className="w-fit bg-Marine-blue cursor-pointer text-white p-2 text-[12px] rounded"
              >
                Next Step
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex my-[11.5%] items-center justify-between w-[90%] m-auto cursor-pointer">
        <Link href="/plans" className="text-[12px] text-Cool-gray">
          Go back
        </Link>
        <Link
          href="/summary"
          className="w-fit bg-Marine-blue text-white py-3 px-4 rounded text-[12px]"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
}
