import React from "react";
import SectionTitle from "./SectionTitle";
import { MoveUpRight, User, CalendarDays } from "lucide-react";
import Image1 from "../assets/images/home/articals/image-1.png";
import Image2 from "../assets/images/home/articals/image-2.png";
import Image3 from "../assets/images/home/articals/image-3.png";

const Articals = () => {
  return (
    <div className="bg-white py-20 px-3">
      <div className="container mx-auto">
        {/* setion top */}
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
          <div className="w-full md:w-2/3 text-left">
            <SectionTitle title={`INSIGHTS`} textColor={"#161616"} />
            <h2 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-[122%] text-[#161616] mb-2">Explore Our Latest Articles.</h2>
          </div>
          <button className="w-[190px] flex justify-center items-center gap-1 bg-transparent border border-[#161616] rounded-md relative overflow-hidden text-black leading-7 mt-6 md:mt-0 py-3 px-[25px] transition-all duration-300 cursor-pointer text-[16px] font-semibold group self-start md:self-auto">
            <span className="relative z-10 flex items-center gap-1 group-hover:text-white ">
              View All Blog <MoveUpRight className="text-black group-hover:text-white h-4 w-4 mt-[-3px]" />{" "}
            </span>
            <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
          </button>
        </div>
        {/* setion content */}
        <div className="flex flex-wrap justify-between gap-5 ">
          {/* item */}
          <div className="item">
            {/* image */}
            <div className="w-full relative">
              <img src={Image1} alt="" className="w-full" />

              <a href="#" className="absolute top-3 right-3 bg-black py-1 px-3 rounded-md text-[14px] font-medium text-white leading-6 tracking-[0.6px] ">
                Marketting
              </a>
            </div>
            {/* sub text */}
            <div className="flex justify-start gap-2 py-2">
              <a href="#" className="flex justify-start gap-1 items-center cursor-pointer text-[rgba(63,68,75,0.7)] font-normal text-[15px] leading-[14px]">
                <User />
                <span className="">Qzency</span>
              </a>
              <a href="#" className="flex justify-start gap-1 items-center cursor-pointer text-[rgba(63,68,75,0.7)] font-normal text-[15px] leading-[14px]">
                <CalendarDays />
                <span>January 23, 2025</span>
              </a>
            </div>
            <h3 className="text-[#161616] font-semibold text-[26px] leading-[35px] transition-all duration-400">How to Comprehensive at SaaS Developments.</h3>

                <a href="#" className="underline font-medium text-[16px] capitalize flex gap-1">
                    Learn More
                    <span className="w-[22px] h-[22px] text-[11px] bg-[#161616] text-white rounded-full text-center leading-[22px]">
                        <MoveUpRight className="text-white h-4 w-4 mt-[-3px]" />
                    </span>
                </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Articals;
