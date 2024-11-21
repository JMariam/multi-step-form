/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { step2Schema, Step2Data } from "../app/schema";
import Toggle from "@/components/Toggle";

interface Step2Props {
  onNext: (data: Step2Data) => void;
  onBack: () => void;
}

const plans = [
  {
    img: "/images/icon-arcade.svg",
    title: "Arcade",
    priceM: "9$/mo",
    priceY: "90$/mo",
    text: "2 months free",
  },
  {
    img: "/images/icon-advanced.svg",
    title: "Advanced",
    priceM: "12$/mo",
    priceY: "120$/mo",
    text: "2 months free",
  },
  {
    img: "/images/icon-pro.svg",
    title: "Pro",
    priceM: "15$/mo",
    priceY: "150$/mo",
    text: "2 months free",
  },
];

const SStep: React.FC<Step2Props> = ({ onNext, onBack }) => {
  const [selected, setSelected] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    title: string;
    price: string;
  } | null>(null);

  const toggleSwitch = () => setSelected(!selected);

  const handleNext = () => {
    if (!selectedPlan) {
      alert("Please select a plan.");
      return;
    }
    const result = step2Schema.safeParse({
      plan: selectedPlan.title,
      price: selectedPlan.price,
    });
    if (!result.success) {
      alert(result.error.errors[0].message);
      return;
    }
    onNext({
      plan: selectedPlan.title,
      price: selectedPlan.price,
    });
  };

  return (
    <div className="bg-white lg:bg-transparent w-[90%] mx-auto shadow-Light-gray shadow-xl lg:shadow-none relative -top-[80px] lg:-top-0 rounded-lg px-6 py-8 pb-10 lg:px-10">
      <p className="font-[700] text-[24px] text-black">Select your plan</p>
      <p className="text-[16px] text-Cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-8">
        {selected ? (
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mt-8">
            {plans.map((plan) => (
              <div
                key={plan.title}
                onClick={() =>
                  setSelectedPlan({ title: plan.title, price: plan.priceY })
                } // Set the selected plan on click
                className={`flex lg:flex-col cursor-pointer items-center lg:items-start lg:px-4 gap-4 lg:w-32 px-4 py-2 rounded-lg border border-Light-gray ${
                  selectedPlan?.title === plan.title
                    ? "border-Purplish-blue bg-Alabaster"
                    : "border-Light-gray bg-transparent"
                }`}
              >
                <img src={plan.img} alt="" className="w-12 lg:w-9 lg:mb-4" />
                <div className="">
                  <p className="text-[18px] lg:text-[14px] text-black font-bold">
                    {plan.title}
                  </p>
                  <p className="text-[16px] lg:text-[13px] py- text-Cool-gray">
                    {plan.priceY}
                  </p>
                  <p className="text-black font-[500] text-[12px] ">
                    {plan.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mt-8">
            {plans.map((plan) => (
              <div
                key={plan.title}
                onClick={() =>
                  setSelectedPlan({ title: plan.title, price: plan.priceM })
                } // Set the selected plan on click
                className={`flex lg:flex-col cursor-pointer items-center lg:items-start gap-4 px-4 py-2 lg:py-4 lg:w-32 rounded-lg border border-Light-gray ${
                  selectedPlan?.title === plan.title
                    ? "border-Purplish-blue bg-Alabaster"
                    : "border-Light-gray bg-transparent"
                }`}
              >
                <img src={plan.img} alt="" className="w-12 lg:w-9 lg:mb-4" />
                <div className="">
                  <p className="text-[18px] lg:text-[14px] text-black font-bold">
                    {plan.title}
                  </p>
                  <p className="text-[16px] lg:text-[13px] py- text-Cool-gray">
                    {plan.priceM}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <Toggle selected={selected} toggleSwitch={toggleSwitch} />
        <div className="lg:flex hidden mt-16 items-center justify-between">
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

export default SStep;
