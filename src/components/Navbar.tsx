"use client";

interface Link {
  label: string;
  step: string;
  text: string;
}

const Linkss: Link[] = [
  { label: "1", step: "STEP 1", text: "YOUR INFO" },
  { label: "2", step: "STEP 2", text: "SELECT PLANS" },
  { label: "3", step: "STEP 3", text: "ADD-ONS" },
  { label: "4", step: "STEP 4", text: "SUMMARY" },
];

interface NavbarProps {
  currentStep: number; // Accepts the current step as a prop
  onNavigate: (step: number) => void;
}

export default function Navbar({ currentStep, onNavigate }: NavbarProps) {
  const handleNavigation = (step: number) => {
    if (step < currentStep) {
      onNavigate(step); // Only allow navigating to previous steps
    }
  };
  return (
    <div className="back flex lg:flex-col pt-12 justify-center lg:justify-start gap-4 lg:gap-6 lg:px-8">
      {Linkss.map((link) => (
        <div
          onClick={() => handleNavigation(parseInt(link.label))}
          className="lg:flex lg:flex-row lg:items-center lg:gap-4 cursor-pointer"
          key={link.label}
        >
          <p
            className={`flex items-center justify-center w-10 h-10 border rounded-full ${
              currentStep === parseInt(link.label)
                ? "text-black bg-Pastel-blue border-none"
                : "text-white bg-transparent border-white"
            }`}
          >
            {link.label}
          </p>
          <div className="hidden lg:inline">
            <p className="text-Light-gray text-[11px]">{link.step}</p>
            <p className="text-white text-[12px]">{link.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
