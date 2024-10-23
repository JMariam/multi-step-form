"use client";
/* eslint-disable @next/next/no-img-element */
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <div className="bg-Magnolia h-[47rem] lg:h-[100vh] lg:flex lg:items-center lg:justify-center">
        <div className="lg:bg-white lg:shadow-xl lg:px-2 lg:rounded-xl lg:flex lg:items-center  lg:justify-center xl:w-[60%] lg:h-[60%] xl:h-[80%]">
          <Navbar />
          <div className="bg-white w-[90%] mx-auto shadow-Light-gray shadow-xl lg:shadow-none relative -top-[80px] lg:-top-0 rounded-lg px-6 py-8 pb-10 xl:px-20 lg:px-">
            <p className="font-[700] text-[24px] text-black">Personal info</p>
            <p className="text-[16px] text-Cool-gray my-3">
              Please provide your name, email address and phone number.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="e.g Stephan King"
                  className="outline-none rounded border border-Light-gray text-Cool-gray placeholder:text-Cool-gray py-2 px-3"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  type="email"
                  placeholder="e.g stephanking@lorem.com"
                  className="outline-none rounded border border-Light-gray text-Cool-gray placeholder:text-Cool-gray py-2 px-3"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  type="number"
                  placeholder="e.g =1 234 567 890"
                  className="outline-none rounded border border-Light-gray text-Cool-gray placeholder:text-Cool-gray py-2 px-3"
                />
              </div>
            </div>
            <div className="lg:flex hidden mt-6 items-center justify-end">
              <Link href="/plans" className="w-fit bg-Marine-blue cursor-pointer text-white p-2 text-[14px] rounded">
                Next Step
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex my-[11.5%] items-center justify-end w-[90%] m-auto cursor-pointer">
        <Link href="/plans" className="w-fit bg-Marine-blue text-white py-3 px-4 rounded">
          Next Step
        </Link>
      </div>
    </div>
  );
}
