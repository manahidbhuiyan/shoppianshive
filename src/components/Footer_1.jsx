import React from "react";
import footer1 from "../assets/images/footer/footer-1.jpg";
import content1 from "../assets/images/footer/footer-content-icon-1.svg";
import { MapPinned, PhoneCall, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.png";

const Footer_1 = () => {
  return (
    <div className="bg-[#161616]">
      {/* Background Image with Overlay */}
      <div className="relative bg-cover bg-center bg-no-repeat py-[60px] md:py-[80px] lg:py-[110px] rounded-b-[100px]" style={{ backgroundImage: `url(${footer1})` }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(93,88,235,0.4)] to-[rgba(93,88,235,0.64)] rounded-b-[100px]"></div>

        {/* Content Inside */}
        <div className="container mx-auto px-5 relative z-10">
          <div className="flex flex-wrap items-center justify-between ">
            {/* Left - Text Content (col-8) */}
            <div className="w-full md:w-2/3 text-center mb-6 md:mb-0">
              <h2 className="text-white text-[40px] sm:text-[45px] md:text-[50px] lg:text-[68px] font-bold sm:leading-[75px] mt-[30px]  md:mb-4 perspective-[300px]">
                <div className="block relative translate-x-0 translate-y-0 translate-z-0 opacity-100">Let's Make It Happen</div>
              </h2>

              {/* Get in Touch Button */}
              <h3>
                <div className="block relative translate-x-0 translate-y-0 translate-z-0 opacity-100 text-right">
                  <a href="#" className="text-[#f2cc4d] text-[40px] sm:text-[45px] md:text-[50px] lg:text-[60px] font-medium leading-none underline transition-all duration-400 ease-in-out">
                    Get In Touch
                  </a>
                </div>
              </h3>
            </div>

            {/* Right - Image (col-4) */}
            <div className="w-full md:w-1/3 flex justify-center ">
              <img src={content1} alt="content1" className="w-auto max-w-full opacity-100 animate-fadeInUp" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
      {/* footer middle part */}
      <div className="py-[60px] border-b border-[rgba(39,39,39,0.4)] ">
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center justify-between">
            {/* item */}
            <div className="max-w-[280px] w-full md:w-1/2 lg:w-1/3 flex justify-start gap-3 mb-5 lg:mb-0 ">
              <div className="w-12 h-12 text-center rounded-[10px] bg-[#262626] flex justify-center items-center ">
                <PhoneCall className="text-[26px] leading-12 text-[#615cf6] " />
              </div>
              <div className="content mt-[5px] max-w-[220px] ">
                <p className="underline text-[#aaaaaa] text-base leading-[29px]">Always to Help</p>
                <p className=" ">
                  <a href="#" className="text-white text-[17px] font-normal leading-[29px] hover:text-[#3147ff] transition-all ease-in-out duration-400 cursor-pointer ">
                    +44-2002-5432111
                  </a>
                </p>
                <p className=" ">
                  <a href="#" className="text-white text-[17px] font-normal leading-[29px] hover:text-[#3147ff] transition-all ease-in-out duration-400 cursor-pointer ">
                    +44-2002-5432111
                  </a>
                </p>
              </div>
            </div>

            <div className="max-w-[280px] w-full md:w-1/2 lg:w-1/3 flex justify-start gap-3 mb-5 lg:mb-0 ">
              <div className="w-12 h-12 text-center rounded-[10px] bg-[#262626] flex justify-center items-center ">
                <Mail className="text-[26px] leading-12 text-[#615cf6] " />
              </div>
              <div className="content mt-[5px] max-w-[220px] ">
                <p className="underline text-[#aaaaaa] text-base leading-[29px]">Say Hello</p>
                <p className=" ">
                  <a href="#" className="text-white text-[17px] font-normal leading-[29px] hover:text-[#3147ff] transition-all ease-in-out duration-400 cursor-pointer ">
                    info@example.com
                  </a>
                </p>
                <p className=" ">
                  <a href="#" className="text-white text-[17px] font-normal leading-[29px] hover:text-[#3147ff] transition-all ease-in-out duration-400 cursor-pointer ">
                    info@example.com
                  </a>
                </p>
              </div>
            </div>

            <div className="max-w-[280px] w-full md:w-1/2 lg:w-1/3 flex justify-start gap-3 ">
              <div className="w-12 h-12 text-center rounded-[10px] bg-[#262626] flex justify-center items-center ">
                <MapPinned className="text-[26px] leading-12 text-[#615cf6] " />
              </div>
              <div className="content mt-[5px] max-w-[220px] ">
                <p className="underline text-[#aaaaaa] text-base leading-[29px]">Office Address Locations</p>
                <p className=" ">
                  <a href="#" className="text-white text-[17px] font-normal leading-[29px] hover:text-[#3147ff] transition-all ease-in-out duration-400 cursor-pointer ">
                    23 Division Park, New York,NY 10002, USA
                  </a>
                </p>
                {/* <p className=" ">
                <a href="#" className="text-white text-[17px] font-normal leading-[29px] hover:text-[#3147ff] transition-all ease-in-out duration-400 cursor-pointer ">info@example.com</a>
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:pt-10 md:pb-[70px] border-b border-[rgba(39,39,39,0.4)] ">
        <div className="container mx-auto ">
          <div className="flex flex-wrap justify-between">
            {/* item */}
            <div className="max-w-[100%] lg:max-w-[41%] w-full mb-10 lg:mb-0 ">
              <img src={logo} alt="" className="pb-5 md:pb-7 w-[200px] " />
              <p className="text-base font-normal text-[#aaaaaa] pb-5 md:pb-7 ">
                We're passionate about helping businesses thrive in the digital landscape. With our expertise in digital marketing strategies, we empower our clients to reach their goals and exceed
                expectations.
              </p>
              <div className="flex justify-start gap-3">
                <div className="w-[46px] h-[46px] rounded-lg bg-[#262626] hover:bg-[#615cf6] flex justify-center items-center cursor-pointer transition-all duration-300 ">
                  <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 text-white " />
                </div>
                <div className="w-[46px] h-[46px] rounded-lg bg-[#262626] hover:bg-[#615cf6] flex justify-center items-center cursor-pointer transition-all duration-300 ">
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 text-white " />
                </div>
                <div className="w-[46px] h-[46px] rounded-lg bg-[#262626] hover:bg-[#615cf6] flex justify-center items-center cursor-pointer transition-all duration-300 ">
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 text-white " />
                </div>
                <div className="w-[46px] h-[46px] rounded-lg bg-[#262626] hover:bg-[#615cf6] flex justify-center items-center cursor-pointer transition-all duration-300 ">
                  <FontAwesomeIcon icon={faYoutube} className="w-4 h-4 text-white " />
                </div>
              </div>
            </div>
            <div className="max-w-full md:max-w-[50%] lg:max-w-[17%] w-full mb-5 lg:mb-0 ">
              <div class="relative inline-block text-white mb-[30px]">
                <h3 class="text-2xl font-bold">Who We Are</h3>
                <span class="absolute left-0 top-[40px] h-[2px] w-[10px] bg-[linear-gradient(180deg,#615CF6CC_0%,#615CF6CC_100%)]"></span>
                <span class="absolute left-[15px] top-[40px] h-[2px] w-[140px] bg-gradient-to-r from-[#615CF6CC] to-[#161616CC]"></span>
              </div>
              <ul>
                <li className="mb-5 transition-all ease-in-out duration-400">
                  <a href="#" className="text-[#aaaaaa] text-[18px] font-normal hover:text-[#3147ff] ">
                    About Us
                  </a>
                </li>
                <li className="mb-5 transition-all ease-in-out duration-400">
                  <a href="#" className="text-[#aaaaaa] text-[18px] font-normal hover:text-[#3147ff] ">
                    FAQ
                  </a>
                </li>
                <li className="mb-5 transition-all ease-in-out duration-400">
                  <a href="#" className="text-[#aaaaaa] text-[18px] font-normal hover:text-[#3147ff] ">
                    Blog
                  </a>
                </li>
                <li className="mb-5 transition-all ease-in-out duration-400">
                  <a href="#" className="text-[#aaaaaa] text-[18px] font-normal hover:text-[#3147ff] ">
                    Project
                  </a>
                </li>
                <li className="mb-5 transition-all ease-in-out duration-400">
                  <a href="#" className="text-[#aaaaaa] text-[18px] font-normal hover:text-[#3147ff] ">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-w-full md:max-w-[50%] lg:max-w-[25%] w-full ">
              <div class="relative inline-block text-white mb-[30px]">
                <h3 class="text-2xl font-bold">Services</h3>
                <span class="absolute left-0 top-[40px] h-[2px] w-[10px] bg-[linear-gradient(180deg,#615CF6CC_0%,#615CF6CC_100%)]"></span>
                <span class="absolute left-[15px] top-[40px] h-[2px] w-[140px] bg-gradient-to-r from-[#615CF6CC] to-[#161616CC]"></span>
              </div>
              <ul>
                <li className="mb-5 transition-all ease-in-out duration-400">
                  <a href="#" className="text-[#aaaaaa] text-[18px] font-normal hover:text-[#3147ff] ">
                    Search Engine
                  </a>
                </li>
                <li className="mb-5 transition-all ease-in-out duration-400">
                  <a href="#" className="text-[#aaaaaa] text-[18px] font-normal hover:text-[#3147ff] ">
                    Content Marketing
                  </a>
                </li>
                <li className="mb-5 transition-all ease-in-out duration-400">
                  <a href="#" className="text-[#aaaaaa] text-[18px] font-normal hover:text-[#3147ff] ">
                    Email Marketing
                  </a>
                </li>
                <li className="mb-5 transition-all ease-in-out duration-400">
                  <a href="#" className="text-[#aaaaaa] text-[18px] font-normal hover:text-[#3147ff] ">
                    Social Media
                  </a>
                </li>
                <li className="mb-5 transition-all ease-in-out duration-400">
                  <a href="#" className="text-[#aaaaaa] text-[18px] font-normal hover:text-[#3147ff] ">
                    App Development
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div class="bg-transparent bg-[linear-gradient(180deg,#1E1E1E_-17.65%,#161616_100%)] py-[30px] text-center">
        <p className="text-base text-[#aaaaaa] ">
        Copyright 2025 Techtro | Design By <span className="text-[#615cf6] " >Qzency</span>
        </p>
      </div>

    </div>
  );
};

export default Footer_1;
