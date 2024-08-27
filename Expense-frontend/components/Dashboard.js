import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { LogoSvg } from "./svg/LogoSvg";

export function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <div className="h-[220px] w-full bg-[#0166FF] mt-[32px] rounded-2xl p-11 relative">
          <div className="bg-[url(/Images/Noise.png)] w-full h-full absolute top-0 left-0 rounded-2xl z-0" />
          <div className="flex text-[white] ">
            <LogoSvg />
            <div className="ml-[9px] text-xl">Geld</div>
          </div>
          <div className="mt-[66px]">
            <div className="text-base">Cash</div>
            <div className="text-[#FFFFFF] text-2xl">10,000,000</div>
          </div>
        </div>
        <div className="h-[220px] w-full bg-[#ffffff] mt-[32px] rounded-2xl">
          <div className="flex text-black p-6">
            <div className="w-[8px] h-[8px] rounded-full bg-[#84CC16] my-auto"></div>
            <div className="text-base ml-[8px]">Your Income</div>
          </div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="p-6">
            <div className="text-3xl text-black">1,200,000₮</div>
            <div className="text-lg text-[#64748B]">Your Income Amount</div>
            <div className="flex items-center mt-[16px]">
              <div className="w-[20px] h-[20px] bg-[#84CC16] rounded-full flex items-center justify-center">
                <ArrowUp size={16} strokeWidth={1.25} color="#fff" />
              </div>
              <div className="text-black my-auto ml-[10px] text-lg">
                32% from last month
              </div>
            </div>
          </div>
        </div>
        <div className="h-[220px] w-full bg-[#ffffff] mt-[32px] rounded-2xl">
          <div className="flex text-black p-6">
            <div className="w-[8px] h-[8px] rounded-full bg-[#84CC16] my-auto"></div>
            <div className="text-base ml-[8px]">Your Income</div>
          </div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="p-6">
            <div className="text-3xl text-black">1,200,000₮</div>
            <div className="text-lg text-[#64748B]">Your Income Amount</div>
            <div className="flex mt-[16px] items-center">
              <div className="w-[20px] h-[20px] bg-[#84CC16] rounded-full flex items-center justify-center">
                <ArrowUp size={16} strokeWidth={1.25} color="#fff" />
              </div>
              <div className="text-black my-auto ml-[10px] text-lg">
                32% from last month
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
