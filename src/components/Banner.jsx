import React from "react";
import { MoveUpRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-full bg-white container mx-auto py-40">
      <div className="flex flex-col">
        <div className="px-2 py-1 max-w-[380px] bg-white rounded-lg mb-5 shadow-[0px_2px_4px_0px_rgba(45,54,67,0.08),0px_1px_2px_0px_rgba(45,54,67,0.04)]">
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-1 justify-end items-end">
              <div className="h-px w-10 bg-blue-600"></div>
              <div className="h-px w-6 bg-blue-600"></div>
            </div>
            <h2 className="text-sm font-normal leading-[26px] tracking-[0.6px] uppercase mx-2.5">YOUR PARTNER IN TECH SUCCESS</h2>
            <div className="flex flex-col gap-1 justify-start">
              <div className="h-px w-6 bg-blue-600"></div>
              <div className="h-px w-10 bg-blue-600"></div>
            </div>
          </div>
        </div>
        {/* heading */}
        <h2 className="text-[74px] font-extrabold leading-[114%] text-[#161616] "> 
            Our Expertise for Your <br /> Future IT Solutions <span className="inline-block w-2 h-2 bg-[#615cf6]"></span>
        </h2>
        <p className="text-base text-[#3f444b] mt-5 ">As a leading provider of digital solutions, we specialize in crafting bespoke software and applications.</p>

        <button className="max-w-[300px] my-[30px] flex justify-center items-center gap-1 bg-[#3147ff] relative overflow-hidden text-white leading-7 py-4 px-[18px] rounded-lg transition-all duration-300 cursor-pointer text-[16px] font-semibold group">
            <span className="relative z-10 flex items-center gap-1">Get Free Consultation <MoveUpRight className="text-white h-4 w-4 mt-[-3px]" /> </span>

            {/* Hover Effect - Background Sliding in from Left */}
            <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          </button>

      </div>
    </div>
  );
};

export default Banner;
