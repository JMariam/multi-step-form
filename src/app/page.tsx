"use client";
import "./globals.css";
import React, { useState } from "react";
import FStep from "../components/Step1";
import SStep from "../components/Step2";
import TStep from "../components/Step3";
import Navbar from "@/components/Navbar";
import { Step1Data, Step2Data } from "./schema";

interface AddOnData {
  name: string;
  priceM: string; // Monthly price
  priceY: string; // Yearly price
}

interface FormData extends Step1Data, Step2Data {
  addOns?: AddOnData[];
}

const Home: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const handleNext = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const calculateTotal = () => {
    // Parse the plan price
    const planPrice = formData.price
      ? parseFloat(formData.price.replace(/\D/g, ""))
      : 0;

    // Add up the add-on prices based on the selected billing type
    const isYearly = formData.billingType === "yearly";
    const addOnsTotal = formData.addOns
      ? formData.addOns.reduce((total, addOn) => {
          const price = isYearly
            ? parseFloat(addOn.priceY.replace(/\D/g, ""))
            : parseFloat(addOn.priceM.replace(/\D/g, ""));
          return total + price;
        }, 0)
      : 0;

    return (planPrice + addOnsTotal).toFixed(2);
  };

  return (
    <div>
      <div className="bg-Magnolia h-fit lg:h-[100vh] lg:flex lg:items-center lg:justify-center">
        <div className="lg:bg-white lg:shadow-xl lg:p-3 lg:rounded-xl lg:flex lg:items-center lg:justify-center xl:w-[55%] lg:h-[60%] xl:h-fit">
          <Navbar currentStep={step} />
          <div className="lg:w-[65%]">
            {step === 1 && <FStep onNext={handleNext} />}
            {step === 2 && <SStep onNext={handleNext} onBack={handleBack} />}
            {step === 3 && (
              <TStep
                onNext={(selectedAddOns) =>
                  handleNext({ addOns: selectedAddOns })
                }
                onBack={handleBack}
                isYearly={formData.billingType === "yearly"}
              />
            )}
            {step === 4 && (
              <div className="bg-white lg:bg-transparent w-[90%] mx-auto shadow-Light-gray shadow-xl lg:shadow-none relative -top-[80px] lg:-top-0 rounded-lg px-6 py-8 pb-10 lg:px-10">
                <p className="font-[700] text-[24px] text-black">
                  Finishing up
                </p>
                <p className="text-[16px] text-Cool-gray">
                  Double-check everything looks OK before confirming.
                </p>
                <div className="bg-Alabaster rounded-2xl p-8">
                  <div className="flex justify-between items-center border-b border-slate-400 pb-4 text-[16px]">
                    <div>
                      <p className="text-black font-bold">
                        {formData.plan} (
                        {formData.billingType === "yearly"
                          ? "Yearly"
                          : "Monthly"}
                        )
                      </p>
                      <button
                        className="underline text-Cool-gray"
                        onClick={handleBack}
                      >
                        Change
                      </button>
                    </div>
                    <p className="text-black font-bold">{formData.price}</p>
                  </div>
                  <div>
                    <div className="">
                      {formData.addOns && formData.addOns.length > 0 ? (
                        <div className="flex flex-col gap-4 mt-4 text-[16px]">
                          {formData.addOns.map((addOn, index) => (
                            <div
                              key={index}
                              className="text-Cool-gray text-[16px] flex items-center justify-between"
                            >
                              <p>{addOn.name}</p>
                              <p className="text-black">
                                {formData.billingType === "yearly"
                                  ? addOn.priceY
                                  : addOn.priceM}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No add-ons selected</p>
                      )}
                    </div>
                  </div>
                </div>
                {/* <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Number: {formData.number}</p> */}

                <div className=" flex items-center justify-between text-[18px] pt-6 px-4">
                  <p className="text-Cool-gray">Total  (per  
                        {formData.billingType === "yearly"
                          ? " year"
                          : " month"}
                        )</p>
                  <p className="text-Purplish-blue">${calculateTotal()}</p> 
                </div>
                {/* <button onClick={handleBack}>Back</button>
                <button onClick={() => alert("Form Submitted!")}>Submit</button> */}
                <div className="flex mt-16 items-center justify-between">
                  <button
                    onClick={handleBack}
                    className="text-[12px] text-Cool-gray"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={() => alert("Form Submitted!")}
                    className="w-fit bg-Purplish-blue cursor-pointer text-white p-2 text-[12px] rounded"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
