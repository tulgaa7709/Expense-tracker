import Image from "next/image";
import { LogoSvg } from "./svg/LogoSvg";

export function Header() {
  return (
    <div className="p-9 w-full bg-white">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex">
          <LogoSvg fill="#0166FF" />
          <div className="text-base ml-[24px] my-auto">Dashboard</div>
          <div className="text-base ml-[24px] my-auto">Records</div>
        </div>
        <div className="flex">
          <button className="bg-[#0166FF] text-white w-[120px] h-[32px] rounded-3xl p-1 text-base">
            Record
          </button>
          <Image
            src="Images/Placeholder.svg"
            width={40}
            height={40}
            className="ml-[24px]"
          />
        </div>
      </div>
    </div>
  );
}
