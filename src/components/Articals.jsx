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
            <h2 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-[122%] text-[#161616] mb-2">
              Explore Our Latest Articles.
            </h2>
          </div>
          <button className="w-[190px] flex justify-center items-center gap-1 bg-transparent border border-[#161616] rounded-md relative overflow-hidden text-black leading-7 mt-6 md:mt-0 py-3 px-[25px] transition-all duration-300 cursor-pointer text-[16px] font-semibold group self-start md:self-auto">
            <span className="relative z-10 flex items-center gap-1 group-hover:text-white ">
              View All Blog <MoveUpRight className="text-black group-hover:text-white h-4 w-4 mt-[-3px]" />{" "}
            </span>
            <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
          </button>
        </div>
        {/* setion content */}
        <div className="w-full flex flex-wrap justify-start gap-5 pt-10 lg:pt-16">
          {/* item */}
          <div className="w-full flex-1 min-w-[100%] md:min-w-[calc(50%-20px)] lg:min-w-[calc(33.33%-20px)] item relative overflow-hidden group">
            {/* image */}
            <div className="w-full relative">
              <img src={Image1} alt="" className="w-full" />
              <img
                src={Image1}
                alt="Hover Image"
                className="w-full absolute top-0 left-0 transform -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-0"
              />

              <a
                href="#"
                className="absolute top-3 right-3 bg-black py-1 px-3 rounded-md text-[14px] font-medium text-white leading-6 tracking-[0.6px] "
              >
                Marketting
              </a>
            </div>
            <div className="group py-4">
              {/* sub text */}
              <div className="flex justify-start gap-5 py-2">
                <a
                  href="#"
                  className="flex justify-start gap-1 items-center cursor-pointer text-[#161616] font-normal text-[15px] leading-[14px] hover:text-[#3147ff]"
                >
                  <User className="w-[14px] h-[15px]" />
                  <span className="">Qzency</span>
                </a>
                <a
                  href="#"
                  className="flex justify-start gap-1 items-center cursor-pointer text-[#161616] font-normal text-[15px] leading-[14px] hover:text-[#3147ff]"
                >
                  <CalendarDays className="w-[14px] h-[15px]" />
                  <span className="">January 23, 2025</span>
                </a>
              </div>
              <h3 className="text-[#161616] group-hover:text-[#3147ff] font-semibold text-[26px] leading-[35px] cursor-pointer transition-all duration-400">
                How to Comprehensive at SaaS Developments.
              </h3>

              <a
                href="#"
                className="min-h-14 pt-8 group-hover:pt-5 text-[#161616] group-hover:text-[#3147ff] underline font-medium text-[16px] capitalize flex gap-1 cursor-pointer transition-all duration-700 "
              >
                Learn More
                <span className="w-[22px] h-[22px] bg-[#161616] group-hover:bg-[#3147ff] rounded-full flex justify-center items-center transition-all duration-300">
                  <MoveUpRight className="text-white h-3 w-3" />
                </span>
              </a>
            </div>
          </div>

          <div className="w-full flex-1 min-w-[100%] md:min-w-[calc(50%-20px)] lg:min-w-[calc(33.33%-20px)] item relative overflow-hidden group">
            {/* image */}
            <div className="w-full relative">
              <img src={Image2} alt="" className="w-full" />
              <img
                src={Image2}
                alt="Hover Image"
                className="w-full absolute top-0 left-0 transform -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-0"
              />

              <a
                href="#"
                className="absolute top-3 right-3 bg-black py-1 px-3 rounded-md text-[14px] font-medium text-white leading-6 tracking-[0.6px] "
              >
                Marketting
              </a>
            </div>
            <div className="group py-4">
              {/* sub text */}
              <div className="flex justify-start gap-5 py-2">
                <a
                  href="#"
                  className="flex justify-start gap-1 items-center cursor-pointer text-[#161616] font-normal text-[15px] leading-[14px] hover:text-[#3147ff]"
                >
                  <User className="w-[14px] h-[15px]" />
                  <span className="">Qzency</span>
                </a>
                <a
                  href="#"
                  className="flex justify-start gap-1 items-center cursor-pointer text-[#161616] font-normal text-[15px] leading-[14px] hover:text-[#3147ff]"
                >
                  <CalendarDays className="w-[14px] h-[15px]" />
                  <span className="">January 23, 2025</span>
                </a>
              </div>
              <h3 className="text-[#161616] group-hover:text-[#3147ff] font-semibold text-[26px] leading-[35px] cursor-pointer transition-all duration-400">
              6 Essential Tips for Big Commerce Stores
              </h3>

              <a
                href="#"
                className="min-h-14 pt-8 group-hover:pt-5 text-[#161616] group-hover:text-[#3147ff] underline font-medium text-[16px] capitalize flex gap-1 cursor-pointer transition-all duration-700 "
              >
                Learn More
                <span className="w-[22px] h-[22px] bg-[#161616] group-hover:bg-[#3147ff] rounded-full flex justify-center items-center transition-all duration-300">
                  <MoveUpRight className="text-white h-3 w-3" />
                </span>
              </a>
            </div>
          </div>

          <div className="w-full flex-1 min-w-[100%] md:min-w-[calc(50%-20px)] lg:min-w-[calc(33.33%-20px)] item relative overflow-hidden group">
            {/* image */}
            <div className="w-full relative">
              <img src={Image3} alt="" className="w-full" />
              <img
                src={Image3}
                alt="Hover Image"
                className="w-full absolute top-0 left-0 transform -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-0"
              />

              <a
                href="#"
                className="absolute top-3 right-3 bg-black py-1 px-3 rounded-md text-[14px] font-medium text-white leading-6 tracking-[0.6px] "
              >
                Development
              </a>
            </div>
            <div className="group py-4">
              {/* sub text */}
              <div className="flex justify-start gap-5 py-2">
                <a
                  href="#"
                  className="flex justify-start gap-1 items-center cursor-pointer text-[#161616] font-normal text-[15px] leading-[14px] hover:text-[#3147ff]"
                >
                  <User className="w-[14px] h-[15px] "  />
                  <span className="">Qzency</span>
                </a>
                <a
                  href="#"
                  className="flex justify-start gap-1 items-center cursor-pointer text-[#161616] font-normal text-[15px] leading-[14px] hover:text-[#3147ff]"
                >
                  <CalendarDays className="w-[14px] h-[15px]" />
                  <span className="">January 23, 2025</span>
                </a>
              </div>
              <h3 className="text-[#161616] group-hover:text-[#3147ff] font-semibold text-[26px] leading-[35px] cursor-pointer transition-all duration-400">
              Looking For Inspiration & Unique The World.
              </h3>

              <a
                href="#"
                className="min-h-14 pt-8 group-hover:pt-5 text-[#161616] group-hover:text-[#3147ff] underline font-medium text-[16px] capitalize flex gap-1 cursor-pointer transition-all duration-700 "
              >
                Learn More
                <span className="w-[22px] h-[22px] bg-[#161616] group-hover:bg-[#3147ff] rounded-full flex justify-center items-center transition-all duration-300">
                  <MoveUpRight className="text-white h-3 w-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articals;
