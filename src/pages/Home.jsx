import React from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { MoveUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import choose from "../assets/images/choose-1.jpg";
import choose2RemoveBg from "../assets/images/choose-2-removebg.png";
import upWork from "../assets/images/icon/upwork.svg";
import fullStar from "../assets/images/icon/full-star.svg";
import Counter from "../components/Counter";
import ParallaxSection from "../components/Parallax";
import Portfolio from "../components/Portfolio";
import ClientFeedback from "../components/ClientFeedback";
import Toolset from "../components/Toolset";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div>
      <Navbar />
      <Banner />
      {/* why choose us */}
      <div className="pt-20 ">
        <div className="container mx-auto">
          {/* 1st section */}
          <div className="w-full flex flex-col xl:flex-row justify-between">
            <div className="w-full xl:w-[50%] flex flex-col px-1 2xs:px-0 md:px-6">
              <SectionTitle title={`Why Choose Us`} textColor={'#515151'} />

              {/* heading */}
              <h2 className="text-[28px] 2xs:text-[32px] xs:text-[45px] md:text-[55px] lg:text-[60px] font-extrabold leading-[114%] text-[#161616] ">
                Why customers <br /> select our company
              </h2>
              <p className="text-[14px] 2xs:text-base text-[#3f444b] mt-5 leading-7 ">
                Our company stands out as the preferred choice for clients seeking reliable and innovative IT solutions.
                With a strong focus on customer satisfaction, we prioritize understanding our clients' unique needs and
                delivering tailored solutions.
              </p>

              <div className="w-full flex justify-start items-center gap-20 mt-16 ">
                <button className="w-[170px] flex justify-center items-center gap-1 bg-transparent border border-[#161616] rounded-md relative overflow-hidden text-black leading-7 py-3 px-[25px] transition-all duration-300 cursor-pointer text-[16px] font-semibold group">
                  <span className="relative z-10 flex items-center gap-1 group-hover:text-white ">
                    Know More <MoveUpRight className="text-black group-hover:text-white h-4 w-4 mt-[-3px]" />{" "}
                  </span>
                  <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                </button>
                <div>
                  <h6 className="text-base font-bold text-[#161616] transition-all duration-300 ">
                    (6k) Highest rated
                  </h6>
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
              <div
                ref={ref}
                className="w-full h-[500px] xl:w-[550px] xl:h-[535px] rounded-4xl relative"
                style={{ backgroundImage: `url(${choose})` }}
              >
                <div
                  className={`absolute bottom-0 right-0 xl:bottom-[-33px] xl:right-[-90px] z-10 opacity-0 ${
                    inView
                      ? "animate-[img-anim-top_1.3s_forwards_cubic-bezier(0.645,0.045,0.355,1)] [animation-delay:0.8s]"
                      : ""
                  }`}
                >
                  <img className="w-full" src={choose2RemoveBg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2ns section */}
        <div className="bg-[#f8f8f8] mt-0 xl:mt-[-175px]">
          <div className="container mx-auto py-[64px] xl:py-[90px]">
            <div className="flex w-full px-3 pb-4 lg:pb-10 xl:pb-0 xl:mb-20">
              <div className="max-w-[470px]">
                <div className="flex justify-start items-center gap-2 mb-3">
                  <FontAwesomeIcon icon={faSquareCheck} className="text-[26px] text-[#3147ff]" />
                  <h2 className="text-black text-[26px] font-semibold leading-[24px]">Unique Value Preposition</h2>
                </div>
                <p className="transition-all duration-300 text-base text-[#49515b] leading-7">
                  Clearly articulate what sets your company apart from competitors, such as specialized expertise,
                  innovative solutions, or exceptional customer service.
                </p>
              </div>
            </div>
            {/* 2nd row */}
            <div className="w-full flex flex-col md:flex-row justify-between pt-6">
              <div className="w-full md:w-1/2 px-3 pb-10 md:pb-0">
                <div className="flex justify-start items-center gap-2 mb-3">
                  <FontAwesomeIcon icon={faSquareCheck} className="text-[26px] text-[#3147ff]" />
                  <h2 className="text-black text-[26px] font-semibold leading-[24px]">Client-Centric Approach</h2>
                </div>
                <p className="transition-all duration-300 text-base text-[#49515b] leading-7">
                  Clearly articulate what sets your company apart from competitors, such as specialized expertise,
                  innovative solutions, or exceptional customer service.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <div className="flex justify-start items-center gap-2 mb-3">
                  <FontAwesomeIcon icon={faSquareCheck} className="text-[26px] text-[#3147ff]" />
                  <h2 className="text-black text-[26px] font-semibold leading-[24px]">Expert Team Members</h2>
                </div>
                <p className="transition-all duration-300 text-base text-[#49515b] leading-7">
                  Clearly articulate what sets your company apart from competitors, such as specialized expertise,
                  innovative solutions, or exceptional customer service.
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



       {/* Section 6 - Content that scrolls over the parallax background */}
       <section className="bg-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Content Below Parallax</h2>
          <p className="mb-4">This content scrolls over the fixed background image when scrolling down.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          
          <p className="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
      </section>
      
      {/* Section 7 */}
      <section className="h-screen flex justify-center items-center bg-red-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Section 7</h2>
          <p className="text-xl">Call to action or contact information</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
