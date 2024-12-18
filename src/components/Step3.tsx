import React, { useState } from "react";

interface AddOn {
  id: string;
  name: string;
  description: string;
  priceM: string;
  priceY: string;
}

interface AddOnsProps {
  onNext: (
    selectedAddOns: { name: string; priceM: string; priceY: string }[]
  ) => void;
  onBack: () => void;
  isYearly: boolean;
}

const addOns: AddOn[] = [
  {
    id: "1",
    name: "Online Gaming",
    description: "Access to multiplayer games.",
    priceM: "$1/mo",
    priceY: "$10/yr",
  },
  {
    id: "2",
    name: "Larger Storage",
    description: "Extra 1TB of cloud save.",
    priceM: "$2/mo",
    priceY: "$20/yr",
  },
  {
    id: "3",
    name: "Customizable Profile",
    description: "Custom theme your profile.",
    priceM: "$2/mo",
    priceY: "$20/yr",
  },
];

const TStep: React.FC<AddOnsProps> = ({ onNext, onBack, isYearly }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((addOn) => addOn !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    const selectedAddOnDetails = selectedAddOns.map((id) => {
      const addOn = addOns.find((addOn) => addOn.id === id);
      return {
        name: addOn?.name || "",
        priceM: addOn?.priceM || "",
        priceY: addOn?.priceY || "",
      };
    });
    onNext(selectedAddOnDetails);
  };

  return (
    <div className="bg-white lg:bg-transparent w-[90%] mx-auto shadow-md lg:shadow-none relative -top-[80px] lg:-top-0 rounded-lg px-6 py-8 pb-10 lg:px-10">
      <p className="font-[700] text-[24px] text-black">Pick add-ons</p>
      <p className="text-[16px] text-Cool-gray">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 mt-8">
          {addOns.map((addOn) => (
            <div
              key={addOn.id}
              className={`flex items-center justify-between px-4 py-2 shadow-sm rounded-lg border border-Light-gray ${
                selectedAddOns.includes(addOn.id)
                  ? "border-Purplish-blue bg-Alabaster"
                  : "border-Light-gray bg-transparent"
              }`}
            >
              <div className="flex gap-6 items-center ">
                <input
                  type="checkbox"
                  checked={selectedAddOns.includes(addOn.id)}
                  onChange={() => handleToggle(addOn.id)}
                  className="w-5 h-5 cursor-pointer"
                />
                <div>
                  <h3 className="text-[18px] lg:text-[14px] text-black font-bold">
                    {addOn.name}
                  </h3>
                  <p className="text-[14px] lg:text-[13px] py- text-Cool-gray">
                    {addOn.description}
                  </p>
                </div>
              </div>

              <p className="text-Purplish-blue text-[14px]">
                {isYearly ? addOn.priceY : addOn.priceM}
              </p>
            </div>
          ))}
        </div>
        <div className="flex mt-16 items-center justify-between">
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
