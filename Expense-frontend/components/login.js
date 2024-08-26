import React from "react";

function Login() {
    return (
        <div className="flex">
            <div className="w-1/2 bg-white h-[100vh] mx-auto">
                <div className="p-40">
                    <div className="text-center">Geld</div>
                    <div className="mt-[40px]">
                        <div className="text-center text-[#0F172A] text-2xl">
                            Welcome Back
                        </div>
                        <div className="text-base text-[#334155] text-center">
                            Welcome back, Please enter your details
                        </div>
                    </div>
                    <div className="mt-[40px] text-center">
                        <input
                            placeholder="Email"
                            className="rounded-md bg-[#F3F4F6] w-[420px] h-[48px] p-4"
                        ></input>
                        <input
                            placeholder="Password"
                            className="rounded-md bg-[#F3F4F6] w-[420px] h-[48px] p-4 mt-[14px]"
                        ></input>
                        <button className="border w-[420px] h-[48px] mt-[16px] bg-[#0166FF] rounded-3xl text-center p-3 text-[#FFFFFF] text-xl">
                            Log in
                        </button>
                    </div>
                    <div className="flex justify-center mt-[40px]">
                        <div className="text-base text-[#0F172A] ">Don’t have account?</div>
                        <button className="text-base text-[#0166FF] ml-[12px]">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 bg-[#0166FF] h-[100vh]"></div>
        </div>
    );
}

export default Login;
