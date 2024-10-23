"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

const Linkss = [
  { href: "/", label: "1", step: "STEP 1", text: "YOUR INFO" },
  { href: "/plans", label: "2", step: "STEP 2", text: "SELECT PLANS" },
  { href: "/addons", label: "3", step: "STEP 3", text: "ADD-ONS" },
  { href: "/summary", label: "4", step: "STEP 4", text: "SUMMARY" },
];
export default function Navbar() {
  const pathname = usePathname();
  return(
    <div className="back flex lg:flex-col pt-12 justify-center lg:justify-start gap-4 lg:gap-6 lg:px-8">
    {Linkss.map((link) => (
      <div
        className="lg:flex lg:flex-row lg:items-center lg:gap-4"
        key={link.href}
      >
        <Link
          href={link.href}
          className={`flex items-center justify-center w-10 h-10 border rounded-full ${
            pathname === link.href
              ? "text-black bg-Pastel-blue border-none"
              : "text-white bg-transparent border-white"
          }`}
        >
          {link.label}
        </Link>
        <div className=" hidden lg:inline">
          <p className="text-Light-gray text-[11px]">{link.step}</p>
          <p className="text-white text-[12px]">{link.text}</p>
        </div>
      </div>
    ))}
  </div>
  )
}