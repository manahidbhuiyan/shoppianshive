import React from "react";
import { MoveUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Image1 from '../assets/images/portfolio/image-1.jpg'
import Image2 from '../assets/images/portfolio/image-2.jpg'
import Image3 from '../assets/images/portfolio/image-3.png'
import Image4 from '../assets/images/portfolio/image-4.png'

const Portfolio = () => {
  return (
    <div className="bg-white py-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-2/3">
          <SectionTitle title={`project showcase`} textColor={"#161616"} />
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-[122%] text-[#161616] mb-2">Our Latest Project.</h2>
          <p className="text-[16px] text-[#3f444b]"> Explore a showcase of our latest works, where innovation meets execution. From cutting-edge software solutions to captivating web designs. </p>
          </div>
          <button className="w-[190px] flex justify-center items-center gap-1 bg-transparent border border-[#161616] rounded-md relative overflow-hidden text-black leading-7 mt-6 md:mt-0 py-3 px-[25px] transition-all duration-300 cursor-pointer text-[16px] font-semibold group">
            <span className="relative z-10 flex items-center gap-1 group-hover:text-white ">
              View All Work <MoveUpRight className="text-black group-hover:text-white h-4 w-4 mt-[-3px]" />{" "}
            </span>
            <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
          </button>
        </div>
        {/* portfolio section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 w-full">
            {/* inventory */}
            <div className="px-2 pb-5">
                <div className="bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5] to-[#F5F4F4] p-6 rounded-3xl">
                    {/* project tag */}
                    <div className="flex justify-end gap-2.5 mb-5">
                        <a className="inline-block py-1.5 px-[16px] text-[14px] font-medium lead-[18px] tracking-[0.6px] rounded-[46px] border border-[#DEDEDE] hover:bg-black hover:text-white " href="#">Mobile app</a>
                        <a className="inline-block py-1.5 px-[16px] text-[14px] font-medium lead-[18px] tracking-[0.6px] rounded-[46px] border border-[#DEDEDE] hover:bg-black hover:text-white " href="#">Saas</a>
                    </div>
                    {/* project thumb */}
                    <div className="p-6 bg-white rounded-2xl mb-5">

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
