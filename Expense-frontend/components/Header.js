import Image from "next/image";

export function Header() {
    return (
        <div className="flex p-9">
            <div className="flex "> 
                <Image src="Images/Vector.svg" alt="logo" width={29} height={28}></Image>
                <div className="text-base ml-[24px] `">Dashboard</div>
                <div className="text-base ml-[24px]">Records</div>
            </div>
            <div className="ml-[811px] flex">
                <button className="bg-[#0166FF] w-[99px] h-[32px] text-[#FFFFFF] rounded-3xl p-1 text-base">Record</button>
                <Image src="Images/Placeholder.svg" width={40} height={40} className="ml-[24px]"></Image>
            </div>
        </div>
    )
}