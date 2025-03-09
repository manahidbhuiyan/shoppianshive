import React from "react";
import { useInView } from "react-intersection-observer";

import { MoveUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

import choose from "../assets/images/choose-1.jpg";
import choose2RemoveBg from "../assets/images/choose-2-removebg.png";
import upWork from "../assets/images/icon/upwork.svg";
import fullStar from "../assets/images/icon/full-star.svg";

import SectionTitle from "../components/SectionTitle";
import Banner from "../components/Banner";
import Counter from "../components/Counter";
import ParallaxSection from "../components/Parallax";
import Portfolio from "../components/Portfolio";
import ClientFeedback from "../components/ClientFeedback";
import Toolset from "../components/Toolset";
import DevelopmentProcess from "../components/DevelopmentProcess";
import Articals from "../components/Articals";
import Footer_1 from "../components/Footer_1";

// partner image
import partner1 from "../assets/images/home/partners/01.png";
import partner2 from "../assets/images/home/partners/02.png";
import partner3 from "../assets/images/home/partners/03.png";
import partner4 from "../assets/images/home/partners/04.png";
import partner5 from "../assets/images/home/partners/05.png";

// You can add this to your global CSS file
const animationCSS = `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }`;

const HomePage = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const partners = [partner1, partner2, partner3, partner4, partner5];

  return (
    <div>
      <Banner />

      {/* partners */}
      <div className="py-10 lg:py-20">
        <div className="container mx-auto">
          <div className="w-full relative py-8 lg:pt-[60px] px-6 lg:px-10 lg:pb-[50px] border border-[#eee3fa] rounded-[30px] ">
            <div className="absolute top-[-17px] left-0 md:left-[67px] text-center py-2.5 px-5 leading-none inline-block bg-white rounded-[46px] mb-[60px] shadow-[0px_1px_2px_0px_rgba(45,54,67,0.05)]">
              <h6 className="text-[15px] text-[#515151] font-medium flex gap-1 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" fill="#2044F4" stroke="#2044F4" stroke-width="0.5" />
                  </svg>
                </span>
                Discover Why 27,000+ Companies Trust Us
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" fill="#2044F4" stroke="#2044F4" stroke-width="0.5" />
                  </svg>
                </span>
              </h6>
            </div>
            <div className="overflow-hidden">
              <div className="inline-flex animate-marquee">
                {/* First set of images */}
                <div className="flex items-center gap-20 whitespace-nowrap">
                  {partners.map((partner, index) => (
                    <img key={`partner-1-${index}`} src={partner} alt={`Partner ${index + 1}`} />
                  ))}
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-20 whitespace-nowrap ml-[800px] ">
                  {partners.map((partner, index) => (
                    <img className="" key={`partner-2-${index}`} src={partner} alt={`Partner ${index + 1}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Add this style tag to your component to include the animation */}
            <style jsx>{animationCSS}</style>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="pt-10 ">
        <div className="container mx-auto">
          {/* 1st section */}
          <div className="w-full flex flex-col xl:flex-row justify-between">
            <div className="w-full xl:w-[50%] flex flex-col px-1 2xs:px-0 md:px-6 animate-bottom-top">
              <SectionTitle title={`Why Choose Us`} textColor={"#515151"} />

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
            <div className="w-full xl:w-[50%] flex justify-center items-center pt-10 xs:pt-15 sm:pt-24 md:36 xl:pt-48 md:px-6">
              <div ref={ref} className="w-full h-[500px] xl:w-[550px] xl:h-[535px] rounded-4xl relative" style={{ backgroundImage: `url(${choose})` }}>
                <div
                  className={`absolute bottom-0 right-0 xl:bottom-[-33px] xl:right-[-90px] z-10 opacity-0 ${
                    inView ? "animate-[img-anim-top_1.3s_forwards_cubic-bezier(0.645,0.045,0.355,1)] [animation-delay:0.8s]" : ""
                  }`}
                >
                  <img className="w-full" src={choose2RemoveBg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd section */}
        <div className="bg-[#f8f8f8] mt-0 xl:mt-[-175px]">
          <div className="container mx-auto py-[64px] xl:py-[90px]">
            <div className="flex w-full px-3 pb-4 lg:pb-10 xl:pb-0 xl:mb-20">
              <div className="max-w-[470px] animate-bottom-top">
                <div className="flex justify-start items-center gap-2 mb-3">
                  <FontAwesomeIcon icon={faSquareCheck} className="text-[26px] text-[#3147ff]" />
                  <h2 className="text-black text-[26px] font-semibold leading-[24px]">Unique Value Preposition</h2>
                </div>
                <p className="transition-all duration-300 text-base text-[#49515b] leading-7">
                  Clearly articulate what sets your company apart from competitors, such as specialized expertise, innovative solutions, or exceptional customer service.
                </p>
              </div>
            </div>
            {/* 2nd row */}
            <div className="w-full flex flex-col md:flex-row justify-between pt-6">
              <div className="w-full md:w-1/2 px-3 pb-10 md:pb-0 animate-bottom-top">
                <div className="flex justify-start items-center gap-2 mb-3">
                  <FontAwesomeIcon icon={faSquareCheck} className="text-[26px] text-[#3147ff]" />
                  <h2 className="text-black text-[26px] font-semibold leading-[24px]">Client-Centric Approach</h2>
                </div>
                <p className="transition-all duration-300 text-base text-[#49515b] leading-7">
                  Clearly articulate what sets your company apart from competitors, such as specialized expertise, innovative solutions, or exceptional customer service.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3 animate-bottom-top">
                <div className="flex justify-start items-center gap-2 mb-3">
                  <FontAwesomeIcon icon={faSquareCheck} className="text-[26px] text-[#3147ff]" />
                  <h2 className="text-black text-[26px] font-semibold leading-[24px]">Expert Team Members</h2>
                </div>
                <p className="transition-all duration-300 text-base text-[#49515b] leading-7">
                  Clearly articulate what sets your company apart from competitors, such as specialized expertise, innovative solutions, or exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Counter />
      <ParallaxSection />
      <Portfolio />
      <ClientFeedback />
      <Toolset />
      <DevelopmentProcess />
      <Articals />
      <Footer_1 />
    </div>
  );
};

export default HomePage;
