"use client";
import "./globals.css";
import React, { useState } from "react";
import FStep from "../components/Step1";
import SStep from "../components/Step2";
import TStep from "../components/Step3";
import Navbar from "@/components/Navbar";
import { Step1Data, Step2Data } from "./schema";

interface FormData extends Step1Data, Step2Data {}

const Home: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const handleNext = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div>
      <div className="bg-Magnolia h-fit lg:h-[100vh] lg:flex lg:items-center lg:justify-center">
        <div className="lg:bg-white lg:shadow-xl lg:p-3 lg:rounded-xl lg:flex lg:items-center lg:justify-center xl:w-[55%] lg:h-[60%] xl:h-fit">
        <Navbar currentStep={step} />
          <div className="lg:w-[65%]">
            {step === 1 && <FStep onNext={handleNext} />}
            {step === 2 && <SStep onNext={handleNext} onBack={handleBack} />}
            {step === 3 && <TStep onNext={handleNext} onBack={handleBack} />}
            {step === 4 && (
              <div>
                <h2>Summary</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Number: {formData.number}</p>
                <p>
                  Plan: {formData.plan} ({formData.price})
                </p>
                <button onClick={handleBack}>Back</button>
                <button onClick={() => alert("Form Submitted!")}>Submit</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
