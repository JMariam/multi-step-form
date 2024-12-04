/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

interface AddOn {
  name: string;
  priceM: string;
  priceY: string;
}

interface Step4Props {
  formData: {
    plan?: string;
    price?: string;
    billingType?: "yearly" | "monthly";
    addOns?: AddOn[];
  };
  calculateTotal: () => string;
  onBack: () => void;
  onBackLast: () => void;
}

const FRStep: React.FC<Step4Props> = ({ formData, onBack, calculateTotal, onBackLast }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white lg:bg-transparent w-[90%] mx-auto shadow-md lg:shadow-none relative -top-[80px] lg:-top-0 rounded-lg px-6 py-16">
        <div className="flex flex-col items-center gap-6">
          <img src="/images/icon-thank-you.svg" alt="" />
          <div className="text-center">
            <p className="text-[28px] font-bold leading-[55px]">Thank you!</p>
            <p className="text-[17px] px-3 md:px-0 text-Cool-gray ">
              {" "}
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white lg:bg-transparent w-[90%] mx-auto shadow-Light-gray shadow-md lg:shadow-none relative -top-[80px] lg:-top-0 rounded-lg px-6 py-8 pb-10 lg:px-10">
      <p className="font-[700] text-[24px] text-black">Finishing up</p>
      <p className="text-[16px] text-Cool-gray">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-Alabaster rounded-2xl shadow-md p-8 my-6">
        <div className="flex justify-between items-center border-b border-slate-400 pb-4 text-[16px]">
          <div>
            <p className="text-black font-bold">
              {formData.plan} (
              {formData.billingType === "yearly" ? "Yearly" : "Monthly"})
            </p>
            <button className="underline text-Cool-gray" onClick={onBackLast}>
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
      <div className=" flex items-center justify-between text-[18px] px-4">
        <p className="text-Cool-gray">
          Total (per
          {formData.billingType === "yearly" ? " year" : " month"})
        </p>
        <p className="text-Purplish-blue">${calculateTotal()}</p>
      </div>

      <div className="flex mt-16 items-center justify-between">
        <button onClick={onBack} className="text-[12px] text-Cool-gray">
          Go Back
        </button>
        <button
          onClick={handleSubmit}
          className="w-fit bg-Purplish-blue cursor-pointer text-white p-2 text-[12px] rounded"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FRStep;
