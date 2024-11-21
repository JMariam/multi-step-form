/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { step2Schema, Step2Data } from "../app/schema";

interface Step2Props {
  onNext: (data: Step2Data) => void;
  onBack: () => void;
}

const plans = [
  {
    title: "Online service",
    priceM: "1$/mo",
    priceY: "10$/mo",
    text: "Access to multplayer games",
  },
  {
    title: "Larger Storage",
    priceM: "2$/mo",
    priceY: "20$/mo",
    text: "Extra 1TB d cloud storage",
  },
  {
    title: "Customizable profile",
    priceM: "2$/mo",
    priceY: "20$/mo",
    text: "Custom theme on your profile",
  },
];

const TStep: React.FC<Step2Props> = ({ onNext, onBack }) => {
  // const [selectedPlan, setSelectedPlan] = useState<{
  //   title: string;
  //   price: string;
  // } | null>(null);

  // const handleNext = () => {
  //   if (!selectedPlan) {
  //     alert("Please select a plan.");
  //     return;
  //   }
  //   const result = step2Schema.safeParse({
  //     plan: selectedPlan.title,
  //     price: selectedPlan.price,
  //   });
  //   if (!result.success) {
  //     alert(result.error.errors[0].message);
  //     return;
  //   }
  //   onNext({
  //     plan: selectedPlan.title,
  //     price: selectedPlan.price,
  //   });
  // };

  return (
    <div className="bg-white lg:bg-transparent w-[90%] mx-auto shadow-Light-gray shadow-xl lg:shadow-none relative -top-[80px] lg:-top-0 rounded-lg px-6 py-8 pb-10 lg:px-10">
      <p className="font-[700] text-[24px] text-black">Pick add-ons</p>
      <p className="text-[16px] text-Cool-gray">
        Add-ons help enhamce your gaming experience.
      </p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 mt-8">
          {plans.map((plan) => (
            <div
              key={plan.title}
              onClick={() =>
                setSelectedPlan({ title: plan.title, price: plan.priceY })
              } // Set the selected plan on click
              className={`flex cursor-pointer items-center justify-between lg:px-4 gap-4 px-4 py-2 rounded-lg border border-Light-gray ${
                selectedPlan?.title === plan.title
                  ? "border-Purplish-blue bg-Alabaster"
                  : "border-Light-gray bg-transparent"
              }`}
            >
              <div className="">
                <p className="text-[18px] lg:text-[14px] text-black font-bold">
                  {plan.title}
                </p>
                <p className="text-[16px] lg:text-[13px] py- text-Cool-gray">
                  {plan.text}
                </p>
              </div>
              <p className="text-black font-[500] text-[12px] ">
                {plan.priceY}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:flex hidden mt-10 items-center justify-between">
          <button onClick={onBack} className="text-[12px] text-Cool-gray">
            Go Back
          </button>
          <button
            onClick={handleNext}
            className="w-fit bg-Marine-blue cursor-pointer text-white p-2 text-[12px] rounded"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default TStep;
