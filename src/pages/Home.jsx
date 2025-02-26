import React from "react";
import SectionTitle from "../components/SectionTitle";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { MoveUpRight } from "lucide-react";
import choose from "../assets/images/choose-1.jpg";
import choose2 from "../assets/images/choose-2.jpg";
import upWork from "../assets/images/icon/upwork.svg";
import fullStar from "../assets/images/icon/full-star.svg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      {/* why choose us */}
      <div className="container mx-auto py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <div className="flex flex-col px-1 2xs:px-0 w-[50%] ">
            <SectionTitle title={`Why Choose Us`} />

            {/* heading */}
            <h2 className="text-[28px] 2xs:text-[32px] xs:text-[45px] md:text-[55px] lg:text-[60px] font-extrabold leading-[114%] text-[#161616] ">
              Why customers <br /> select our company
            </h2>
            <p className="text-[14px] 2xs:text-base text-[#3f444b] mt-5 leading-7 ">
              Our company stands out as the preferred choice for clients seeking reliable and innovative IT solutions. With a strong focus on customer satisfaction, we prioritize understanding our
              clients' unique needs and delivering tailored solutions.
            </p>

            <div className="w-full flex justify-start items-center gap-20 mt-16 ">
              <button className="w-[170px] flex justify-center items-center gap-1 bg-transparent border border-[#161616] rounded-md relative overflow-hidden text-black leading-7 py-3 px-[25px] transition-all duration-300 cursor-pointer text-[16px] font-semibold group">
                <span className="relative z-10 flex items-center gap-1 group-hover:text-white ">
                  Know More <MoveUpRight className="text-black group-hover:text-white h-4 w-4 mt-[-3px]" />{" "}
                </span>
                <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
              </button>
              <div>
                <h6 className="text-base font-bold text-[#161616] transition-all duration-300 ">(6k) Highest rated</h6>
                <div className="flex w-full justify-center gap-4 mt-0.5">
                  <img src={upWork} alt="" className="w-[73px] " />
                  <div className="star flex justify-center gap-0.5">
                    <img src={fullStar} className="w-3" alt="" />
                    <img src={fullStar} className="w-3" alt="" />
                    <img src={fullStar} className="w-3" alt="" />
                    <img src={fullStar} className="w-3" alt="" />
                    <img src={fullStar} className="w-3" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-48">
            <div className="w-[550px] h-[535px] rounded-4xl " style={{ backgroundImage: `url(${choose})` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
