"use client";
interface ToggleSwitchProps {
  selected: boolean;
  toggleSwitch: () => void;
}

export default function Toggle({selected, toggleSwitch}: ToggleSwitchProps) {

  return (
    <div className="bg-Alabaster rounded-lg flex items-center gap-4 p-3 w-full justify-center">
      <p className={`text-[14px] ${selected ? "text-Cool-gray font-normal" : "text-black font-bold"}`}>Monthly</p>
      <div className="flex items-center">
        <div
          onClick={toggleSwitch}
          className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors bg-Marine-blue`}
        >
          {/* Switch handle */}
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
              selected ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
        {/* <span className="ml-3 text-sm">{selected ? "On" : "Off"}</span> */}
      </div>
      <p className={`text-[14px] ${selected ? "text-black font-bold" : "text-Cool-gray font-normal"}`}>Yearly</p>
    </div>
  );
}
