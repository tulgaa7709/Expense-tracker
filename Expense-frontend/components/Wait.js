import Image from "next/image";

export function Wait() {

    return (
        <div className="flex">
            <div className="w-1/2 bg-white h-[100vh] mx-auto">
                <div className="p-40">
                    <div className="">      
                        <div className="text-center text-2xl text-[#000000]">Geld</div>
                    </div>
                    <div className="mt-[50px] text-center">
                        <span className="loading loading-spinner loading-md"></span>
                        <div className="text-base text-[#0F172A] mt-[10px]">Түр хүлээнэ үү...</div>
                    </div>
                </div>
            </div>
        </div>
    )
}