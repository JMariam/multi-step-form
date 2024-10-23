/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/components/Navbar";
import Toggle from "@/components/Toggle";
import Link from "next/link";
import { useState } from "react";

const Planss = [
  {
    img: "/images/icon-arcade.svg",
    title: "Arcade",
    priceM: "9$/mo",
    priceY: "90$/mo",
    text: "2 months free"
  },
  {
    img: "/images/icon-advanced.svg",
    title: "Advanced",
    priceM: "12$/mo",
    priceY: "120$/mo",
    text: "2 months free"
  },
  {
    img: "/images/icon-pro.svg",
    title: "Pro",
    priceM: "15$/mo",
    priceY: "150$/mo",
    text: "2 months free"
  },
];
export default function Plans() {
  const [selected, setSelected] = useState(false);

  const toggleSwitch = () => setSelected(!selected);
  return (
    <div className="">
      <div className="bg-Magnolia h-[47rem] lg:h-[100vh] lg:flex lg:items-center lg:justify-center">
        <div className="lg:bg-white lg:shadow-xl lg:px-2 lg:rounded-xl lg:flex lg:items-center  lg:justify-center xl:w-[60%] lg:h-[60%] xl:h-[80%]">
          <Navbar />
          <div className="bg-white w-[90%] mx-auto shadow-Light-gray shadow-xl lg:shadow-none relative -top-[80px] lg:-top-0 rounded-lg px-6 py-8 pb-10 xl:px-20 lg:px-">
            <p className="font-[700] text-[24px] text-black">
              Select your plan
            </p>
            <p className="text-[16px] text-Cool-gray my-3">
              You have the option of monthly or yearly billing.
            </p>
            <div className="flex flex-col gap-6 mt-4">
              {selected ? (
                <div className="flex flex-col gap-6 mt-4">
                  {Planss.map((plan) => (
                    <div
                      className="flex items-center gap-4 p-4 rounded-lg border border-Light-gray"
                      key={plan.title}
                    >
                      <img src={plan.img} alt="" className="w-12" />
                      <div className="">
                        <p className="text-[18px] text-black font-bold">
                          {plan.title}
                        </p>
                        <p className="text-[16px] text-Cool-gray">
                          {plan.priceY}
                        </p>
                        <p className="text-black font-semibold text-[12px]">{plan.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-6 mt-4">
                  {Planss.map((plan) => (
                    <div
                      className="flex items-center gap-4 p-4 rounded-lg border border-Light-gray"
                      key={plan.title}
                    >
                      <img src={plan.img} alt="" className="w-12" />
                      <div className="">
                        <p className="text-[18px] text-black font-bold">
                          {plan.title}
                        </p>
                        <p className="text-[16px] text-Cool-gray">
                          {plan.priceM}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <Toggle selected={selected} toggleSwitch={toggleSwitch} />
            </div>
            <div className="lg:flex hidden mt-6 items-center justify-between">
              <Link href="/" className="text-[12px] text-Cool-gray">
                Go back
              </Link>
              <Link
                href="/addons"
                className="w-fit bg-Marine-blue cursor-pointer text-white p-2 text-[12px] rounded"
              >
                Next Step
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex my-[11.5%] items-center justify-between w-[90%] m-auto cursor-pointer">
        <Link href="/" className="text-[12px] text-Cool-gray">
          Go back
        </Link>
        <Link
          href="/addons"
          className="w-fit bg-Marine-blue text-white py-3 px-4 rounded text-[12px]"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
}
