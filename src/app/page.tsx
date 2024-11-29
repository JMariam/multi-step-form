"use client";
import "./globals.css";
import React, { useState } from "react";
import FStep from "../components/Step1";
import SStep from "../components/Step2";
import TStep from "../components/Step3";
import FRStep from "../components/Step4";
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
    const planPrice = formData.price
      ? parseFloat(formData.price.replace(/\D/g, ""))
      : 0;

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
        <div className="lg:bg-white lg:shadow-md lg:p-3 lg:rounded-xl lg:flex lg:items-center lg:justify-center xl:w-[55%] lg:h-[60%] xl:h-fit">
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
              <FRStep
                formData={formData}
                calculateTotal={calculateTotal}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
