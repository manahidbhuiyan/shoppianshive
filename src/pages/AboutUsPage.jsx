import React from "react";

import BreadCrumb from "../components/breadcrumb";
import CounterTow from "../components/about/CounterTwo.jsx";

import bannerImage from "../assets/images/about/banner.jpg";
import thumb from "../assets/images/about/thumb.png";
import story0 from "../assets/images/about/story-0.jpg";
import story1 from "../assets/images/about/story-1.jpg";
import story2 from "../assets/images/about/story-2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { MoveUpRight, User, CalendarDays } from "lucide-react";

// partner image
import partner1 from "../assets/images/home/partners/01.png";
import partner2 from "../assets/images/home/partners/02.png";
import partner3 from "../assets/images/home/partners/03.png";
import partner4 from "../assets/images/home/partners/04.png";
import partner5 from "../assets/images/home/partners/05.png";

// articals
import Image1 from "../assets/images/home/articals/image-1.png";
import Image2 from "../assets/images/home/articals/image-2.png";
import Image3 from "../assets/images/home/articals/image-3.png";
import Footer_2 from "../components/Footer_2.jsx";



// You can add this to your global CSS file
const animationCSS = `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }`;

const AboutUsPage = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5];
  return (
    <div>
      <BreadCrumb current={"About"} />

      {/* banner area start */}
      <div className="w-full bg-no-repeat bg-center bg-cover relative h-[700px] mb-[100px] md:mb-[150px] lg:mb-[250px] " style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[rgba(15,15,15,0.41)] to-[rgba(15,15,15,0.41)]"></div>
        <div
          class="absolute bottom-[-120px] left-1/2 bg-white shadow-[0px_24px_50px_rgba(45,54,67,0.12)] p-[30px_40px] rounded-[20px]
            max-w-[1200px] transform -translate-x-1/2 w-full flex flex-col lg:flex-row gap-7 lg:gap-5 items-center justify-between z-10 "
        >
          <h3 className="text-[#161616] text-[32px] font-mediu">
            100% Proudly Delivering Full Customer <br /> Satisfaction <span className="text-[#3147ff] underline "> Affordable Solutions. </span>
          </h3>
          <div className="py-[33px] px-[17px] rounded-[20px] flex items-center gap-5 bg-[#3147ff] ">
            <img className="w-full" src={thumb} alt="" />
            <div className="content">
              <h4 className="text-[30px] text-white font-bold leading-[130%] ">Since</h4>
              <p className="text-[20px] text-white font-medium whitespace-nowrap ">From our experience</p>
            </div>
          </div>
        </div>
      </div>
      {/* our story */}
      <div className="w-full">
        <div className="story-container mx-auto bg-[#f7f9ff] py-[70px] px-20 rounded-[32px]">
          <div className="w-full flex flex-col md:flex-row justify-center gap-5 ">
            <div className="w-full lg:w-3/4 relative ">
              <h3 className="text-[48px] mb-5 font-bold text-[#161616] transition-all duration-300 fadeInUp ">Our Story</h3>
              <p className="text-[16px] text-[#49515B] font-medium transition-all duration-500 fadeInUp ">
                Our mission is simple yet profound: to empower businesses with cutting-edge CRM solutions that drive growth and enhance customer satisfaction. We operate on core values of innovation,
                integrity, and customer-centricity, ensuring that every solution we provide aligns with these principles.
              </p>
              <ul className="mt-10 mb-[50px]  ">
                <li className="text-[18px] font-medium text-[#161616] flex justify-start items-center gap-3 mb-2.5 ">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-[#3147ff] " />
                  Expertise and Innovation
                </li>
                <li className="text-[18px] font-medium text-[#161616] flex justify-start items-center gap-3 mb-2.5 ">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-[#3147ff] " />
                  Straightforward Process
                </li>
                <li className="text-[18px] font-medium text-[#161616] flex justify-start items-center gap-3 mb-2.5 ">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-[#3147ff] " />
                  Client-Centric Approach
                </li>
                <li className="text-[18px] font-medium text-[#161616] flex justify-start items-center gap-3 mb-2.5 ">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-[#3147ff] " />
                  Affordable Solutions
                </li>
              </ul>
              <button className="hidden xl:flex justify-center items-center gap-1 bg-black relative overflow-hidden text-white leading-none min-w-[170px] py-[21px] px-10 rounded-[66px] transition-all duration-300 cursor-pointer text-[18px] font-semibold group">
                <span className="relative z-10 flex items-center gap-2">
                  About More <MoveUpRight className="text-white h-4 w-4 " strokeWidth={3} />
                </span>

                {/* Hover Effect - Background Sliding in from Left */}
                <span className="absolute inset-0 bg-[#3147ff] translate-x-[-100%] rounded-[66px] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              </button>
              <div className="max-w-full xl:max-w-[400px] relative xl:absolute right-0 bottom-0">
                <img src={story0} alt="" className=" w-full rounded-[20px]" />
              </div>
            </div>
            <div className="w-full lg:w-1/4 flex flex-col gap-5">
              <img src={story1} alt="" className="rounded-[20px] " />
              <img src={story2} alt="" className="rounded-[20px] " />
            </div>
          </div>

          <div className="pt-10 md:pt-20">
            <CounterTow />
          </div>
        </div>
      </div>

      {/* partners */}

      <div className="py-10 lg:py-20">
        <div className="container mx-auto">
          <div className="w-full ">
            <div className="flex items-center justify-center py-2.5 px-5 leading-none mb-[50px] ">
              <h6 className="text-[18px] text-[#49515b] font-normal text-center ">
                Powering <span className="text-[#3147ff] ">200 +</span>startups online worldwide through our trusted partners.
              </h6>
            </div>

            <div className="overflow-hidden relative pb-[45px] border-b-[2px] border-transparent before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[rgba(139,144,150,0.05)] before:via-[#D8DFE9] before:to-[rgba(121,125,131,0.05)] before:content-['']">
              {/* <div className="absolute top-0 right-0 w-[175.149px] h-[68px] bg-gradient-to-r from-white to-[rgba(255,255,255,0)] z-[3]"></div> */}
              <div className="absolute top-0 left-0 w-[175.149px] h-[68px] bg-gradient-to-r from-white to-[rgba(255,255,255,0)] z-[3]"></div>

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

              {/* <div className="absolute top-0 left-0 w-[175.149px] h-[68px] bg-gradient-to-l from-white to-[rgba(255,255,255,0)] z-[3]"></div> */}
              <div className="absolute top-0 right-0 w-[175.149px] h-[68px] bg-gradient-to-l from-white to-[rgba(255,255,255,0)] z-[3]"></div>

            </div>

            {/* Add this style tag to your component to include the animation */}
            <style jsx>{animationCSS}</style>
          </div>
        </div>
      </div>

      {/* artical */}
      <div className="bg-white pb-20 px-3">
      <div className="container mx-auto">
        {/* setion top */}
      <div className="max-w-full md:max-w-[80%] lg:max-w-[65%] w-full mx-auto  ">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center py-2.5 px-5 leading-none inline-block bg-white mb-2.5">
              <h6 className="text-[15px] text-[#515151] font-medium flex gap-1 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" fill="#2044F4" stroke="#2044F4" stroke-width="0.5" />
                  </svg>
                </span>
                Blog & Article
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" fill="#2044F4" stroke="#2044F4" stroke-width="0.5" />
                  </svg>
                </span>
              </h6>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-[122%] text-[#161616] mb-2">
            Our latest articles
            </h2>
            <p className="text-[#49515B] text-base font-medium text-center ">
            Welcome to our FAQS section, where we address common queries and provide helpful solutions to ensure you get the most out of our CRM software.
            </p>
      </div>
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
    {/* footer */}
    <Footer_2 />
    </div>
  );
};

export default AboutUsPage;
