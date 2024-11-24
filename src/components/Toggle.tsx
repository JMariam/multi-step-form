"use client";

interface ToggleSwitchProps {
  billingType: "monthly" | "yearly"; // Restrict to valid billing types
  toggleSwitch: () => void; // Function to toggle between billing types
}

export default function Toggle({ billingType, toggleSwitch }: ToggleSwitchProps) {
  return (
    <div className="bg-Alabaster rounded-lg flex items-center gap-4 p-3 w-full justify-center">
      {/* Monthly Label */}
      <p
        className={`text-[14px] ${
          billingType === "monthly"
            ? "text-black font-bold"
            : "text-Cool-gray font-normal"
        }`}
      >
        Monthly
      </p>

      {/* Toggle Switch */}
      <div
        onClick={toggleSwitch} // Call toggleSwitch to change billing type
        className="relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors bg-Marine-blue"
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
            billingType === "yearly" ? "translate-x-6" : ""
          }`}
        ></div>
      </div>

      {/* Yearly Label */}
      <p
        className={`text-[14px] ${
          billingType === "yearly"
            ? "text-black font-bold"
            : "text-Cool-gray font-normal"
        }`}
      >
        Yearly
      </p>
    </div>
  );
}

