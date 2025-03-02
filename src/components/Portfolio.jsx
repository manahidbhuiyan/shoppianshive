import React from "react";
import { MoveUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Image1 from "../assets/images/portfolio/image-1.jpg";
import Image2 from "../assets/images/portfolio/image-2.jpg";
import Image3 from "../assets/images/portfolio/image-3.png";
import Image4 from "../assets/images/portfolio/image-4.png";

const Portfolio = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
          <div className="w-full md:w-2/3 text-left">
            <SectionTitle title={`project showcase`} textColor={"#161616"} />
            <h2 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-[122%] text-[#161616] mb-2">Our Latest Project.</h2>
            <p className="text-[16px] text-[#3f444b]"> Explore a showcase of our latest works, where innovation meets execution. From cutting-edge software solutions to captivating web designs. </p>
          </div>
          <button className="w-[190px] flex justify-center items-center gap-1 bg-transparent border border-[#161616] rounded-md relative overflow-hidden text-black leading-7 mt-6 md:mt-0 py-3 px-[25px] transition-all duration-300 cursor-pointer text-[16px] font-semibold group self-start md:self-auto">
            <span className="relative z-10 flex items-center gap-1 group-hover:text-white ">
              View All Work <MoveUpRight className="text-black group-hover:text-white h-4 w-4 mt-[-3px]" />{" "}
            </span>
            <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
          </button>
        </div>
        {/* portfolio section */}
        <div className="mt-10 grid grid-cols-1 tab:grid-cols-2 w-full">
          {/* inventory */}
          <div className="px-3 pb-5 md:pb-10 tab:pb-28">
            <div className="bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5] to-[#F5F4F4] p-6 rounded-3xl">
              {/* project tag */}
              <div className="flex justify-end gap-2.5 mb-5">
                <a className="inline-block py-1.5 px-[16px] text-[14px] font-medium lead-[18px] tracking-[0.6px] rounded-[46px] border border-[#DEDEDE] hover:bg-black hover:text-white " href="#">
                  Mobile app
                </a>
                <a className="inline-block py-1.5 px-[16px] text-[14px] font-medium lead-[18px] tracking-[0.6px] rounded-[46px] border border-[#DEDEDE] hover:bg-black hover:text-white " href="#">
                  Saas
                </a>
              </div>
              {/* project thumb */}
              <div className="p-6 bg-white rounded-2xl mb-5">
                <img src={Image1} alt="" className="rounded-tl-[20px] rounded-tr-[20px] " />
              </div>
              {/* project content */}
              <div className="p-[40px_50px_34px_40px] block md:grid md:grid-cols-[70%_30%] justify-between items-center rounded-xl bg-white group">
                <h3 className="mb-0">
                  <a href="#" className="text-[#161616] text-[20px] md:text-[28px] font-semibold leading-[38px] group-hover:text-[#3147ff] transition-colors">
                    Inventory & POS Checkout App
                  </a>
                </h3>
                <div className="text-right hidden md:flex md:justify-end">
                  <a href="#" className="inline-flex items-center justify-center w-[70px] h-[70px] border border-[#eee4ff] rounded-xl bg-white group-hover:bg-[#615cf6] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path
                        d="M7 17L17 7M17 7H10M17 7V14"
                        stroke="#6366F1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        className="group-hover:stroke-white transition-colors"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* hospital */}
          <div className="px-3 pb-5 md:pb-10 pt-0 tab:pt-28 ">
            <div className="bg-gradient-to-tr from-[#E5CFE9] to-[#FDEFFF] p-6 rounded-3xl">
              {/* project tag */}
              <div className="flex justify-end gap-2.5 mb-5">
                <a className="inline-block py-1.5 px-[16px] text-[14px] font-medium lead-[18px] tracking-[0.6px] rounded-[46px] border border-[#DEDEDE] hover:bg-black hover:text-white " href="#">
                  Mobile app
                </a>
                <a className="inline-block py-1.5 px-[16px] text-[14px] font-medium lead-[18px] tracking-[0.6px] rounded-[46px] border border-[#DEDEDE] hover:bg-black hover:text-white " href="#">
                  Web Design
                </a>
              </div>
              {/* project thumb */}
              <div className="p-6 bg-white rounded-2xl mb-5">
                <img src={Image2} alt="" className="rounded-tl-[20px] rounded-tr-[20px] " />
              </div>
              {/* project content */}
              <div className="p-[40px_50px_34px_40px] block md:grid md:grid-cols-[70%_30%] justify-between items-center rounded-xl bg-white group">
                <h3 className="mb-0">
                  <a href="#" className="text-[#161616] text-[20px] md:text-[28px] font-semibold leading-[38px] group-hover:text-[#3147ff] transition-colors">
                    Hospital management system
                  </a>
                </h3>
                <div className="text-right hidden md:flex md:justify-end">
                  <a href="#" className="inline-flex items-center justify-center w-[70px] h-[70px] border border-[#eee4ff] rounded-xl bg-white group-hover:bg-[#615cf6] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path
                        d="M7 17L17 7M17 7H10M17 7V14"
                        stroke="#6366F1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        className="group-hover:stroke-white transition-colors"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* calendar */}
          <div className="px-3 pb-5 md:pb-10 tab:pb-28">
            <div className="bg-gradient-to-tr from-[#C1D9CE] to-[#E9FDF4] p-6 rounded-3xl">
              {/* project tag */}
              <div className="flex justify-end gap-2.5 mb-5">
                <a className="inline-block py-1.5 px-[16px] text-[14px] font-medium lead-[18px] tracking-[0.6px] rounded-[46px] border border-[#DEDEDE] hover:bg-black hover:text-white " href="#">
                  Marketing
                </a>
              </div>
              {/* project thumb */}
              <div className="p-6 bg-white rounded-2xl mb-5">
                <img src={Image3} alt="" className="rounded-tl-[20px] rounded-tr-[20px] " />
              </div>
              {/* project content */}
              <div className="p-5 md:p-[40px_50px_34px_40px] block md:grid md:grid-cols-[70%_30%] justify-between items-center rounded-xl bg-white group">
                <h3 className="mb-0">
                  <a href="#" className="text-[#161616] text-[20px] md:text-[28px] font-semibold leading-[38px] group-hover:text-[#3147ff] transition-colors">
                    Calendar Web App Saas Dashboard
                  </a>
                </h3>
                <div className="text-right hidden md:flex md:justify-end">
                  <a href="#" className="inline-flex items-center justify-center w-[70px] h-[70px] border border-[#eee4ff] rounded-xl bg-white group-hover:bg-[#615cf6] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path
                        d="M7 17L17 7M17 7H10M17 7V14"
                        stroke="#6366F1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        className="group-hover:stroke-white transition-colors"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* health */}
          <div className="px-3 pb-5 md:pb-10 pt-0 tab:pt-28 ">
            <div className="bg-gradient-to-tr from-[#F3E1C4] to-[#FFF0D8] p-6 rounded-3xl">
              {/* project tag */}
              <div className="flex justify-end gap-2.5 mb-5">
                <a className="inline-block py-1.5 px-[16px] text-[14px] font-medium lead-[18px] tracking-[0.6px] rounded-[46px] border border-[#DEDEDE] hover:bg-black hover:text-white " href="#">
                  Saas
                </a>
                <a className="inline-block py-1.5 px-[16px] text-[14px] font-medium lead-[18px] tracking-[0.6px] rounded-[46px] border border-[#DEDEDE] hover:bg-black hover:text-white " href="#">
                  Web Design
                </a>
              </div>
              {/* project thumb */}
              <div className="p-6 bg-white rounded-2xl mb-5">
                <img src={Image4} alt="" className="rounded-tl-[20px] rounded-tr-[20px] " />
              </div>
              {/* project content */}
              <div className="p-[40px_50px_34px_40px] block md:grid md:grid-cols-[70%_30%] justify-between items-center rounded-xl bg-white group">
                <h3 className="mb-0">
                  <a href="#" className="text-[#161616] text-[20px] md:text-[28px] font-semibold leading-[38px] group-hover:text-[#3147ff] transition-colors">
                    Health Monitoring App
                  </a>
                </h3>
                <div className="text-right hidden md:flex md:justify-end">
                  <a href="#" className="inline-flex items-center justify-center w-[70px] h-[70px] border border-[#eee4ff] rounded-xl bg-white group-hover:bg-[#615cf6] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path
                        d="M7 17L17 7M17 7H10M17 7V14"
                        stroke="#6366F1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        className="group-hover:stroke-white transition-colors"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
