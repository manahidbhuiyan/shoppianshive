import React from "react";

import { MoveUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import footer2 from "../assets/images/footer/footer-2.jpg";

const Footer_2 = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat pt-[60px] md:pt-[80px] lg:pt-[110px]"
      style={{ backgroundImage: `url(${footer2})` }}
    >
      <div className="container mx-auto">
        <div className="max-w-full md:max-w-[80%] lg:max-w-[65%] w-full mx-auto text-center ">
          <h2 className="text-[30px] md-[42px] font-bold text-white mb-[15px] ">Try It Free Explore for 7 Days</h2>
          <p className="text-[19px] font-medium text-white ">Start building your dream CRM pipeline today</p>
          <div className="mt-10 flex justify-center gap-10 ">
            <a
              href="#"
              className="hidden xl:flex justify-center items-center gap-1 bg-white relative overflow-hidden text-black leading-none min-w-[170px] py-[21px] px-10 rounded-[66px] transition-all duration-500 cursor-pointer text-[18px] font-semibold group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial <MoveUpRight className="text-black group-hover:text-white h-4 w-4 " strokeWidth={3} />
              </span>

              {/* Hover Effect - Background Sliding in from Left */}
              <span className="absolute inset-0 bg-[#3147ff] translate-x-[-100%] rounded-[66px] transition-transform duration-500 ease-in-out group-hover:translate-x-0 "></span>
            </a>
            <a
              href="#"
              className="hidden xl:flex justify-center items-center gap-1 bg-transparent relative overflow-hidden text-white leading-none min-w-[170px] py-[21px] px-10 border border-white hover:border-[#3147ff] rounded-[66px] transition-all duration-500 cursor-pointer text-[18px] font-semibold group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get A Demo <MoveUpRight className="text-white h-4 w-4 " strokeWidth={3} />
              </span>

              {/* Hover Effect - Background Sliding in from Left */}
              <span className="absolute inset-0 bg-[#3147ff] translate-x-[-100%] rounded-[66px] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
            </a>
          </div>
        </div>
      </div>
      {/* footer bottom area */}
      <div className="bg-white mt-10 shadow-md w-full max-w-[90%] md:max-w-7xl mx-auto rounded-tl-[20px] rounded-tr-[20px] ">
        <div className="py-2.5 md:py-8 lg:py-[50px] px-2.5 md:px-10 lg:px-[80px] flex flex-wrap lg:flex-nowrap justify-between gap-5 ">
          <div className="w-full md:w-1/2 lg:w-[33%] mb-5 lg:mb-0 ">
            <img src={logo} alt="" className="pb-5 md:pb-7 w-[200px] " />
            <p className="text-base font-normal text-[#49515B] pb-5 md:pb-7 ">
              We're passionate about helping businesses thrive in the digital landscape. With our expertise in digital
              marketing strategies, we empower our clients to reach their goals and exceed expectations.
            </p>
            <div className="flex justify-start gap-3">
              <div className="w-[34px] h-[34px] border border-[rgba(222,226,253,0.8)] rounded-full bg-[#fff] hover:bg-[#3147FF] flex justify-center items-center group cursor-pointer transition-all duration-400 ">
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 text-[#3147FF] group-hover:text-white " />
              </div>
              <div className="w-[34px] h-[34px] border border-[rgba(222,226,253,0.8)] rounded-full bg-[#fff] hover:bg-[#3147FF] flex justify-center items-center group cursor-pointer transition-all duration-400 ">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 text-[#3147FF] group-hover:text-white " />
              </div>
              <div className="w-[34px] h-[34px] border border-[rgba(222,226,253,0.8)] rounded-full bg-[#fff] hover:bg-[#3147FF] flex justify-center items-center group cursor-pointer transition-all duration-400 ">
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 text-[#3147FF] group-hover:text-white " />
              </div>
              <div className="w-[34px] h-[34px] border border-[rgba(222,226,253,0.8)] rounded-full bg-[#fff] hover:bg-[#3147FF] flex justify-center items-center group cursor-pointer transition-all duration-400 ">
                <FontAwesomeIcon icon={faYoutube} className="w-4 h-4 text-[#3147FF] group-hover:text-white " />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[24%] mb-5 lg:mb-0 ">
            <div class="relative inline-block text-[#161616] mb-[30px]">
              <h3 class="text-2xl font-bold">Our Product</h3>
              <span class="absolute left-0 top-[40px] h-[2px] w-[10px] bg-[linear-gradient(180deg,#615CF6CC_0%,#615CF6CC_100%)]"></span>
              <span class="absolute left-[15px] top-[40px] h-[2px] w-[140px] bg-gradient-to-r from-[#615CF6CC] to-[#fff]"></span>
            </div>
            <ul>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                Product Overview
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                Pricing
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                Features
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                Integrations
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-[24%] mb-5 lg:mb-0 ">
            <div class="relative inline-block text-[#161616] mb-[30px]">
              <h3 class="text-2xl font-bold">Our Company</h3>
              <span class="absolute left-0 top-[40px] h-[2px] w-[10px] bg-[linear-gradient(180deg,#615CF6CC_0%,#615CF6CC_100%)]"></span>
              <span class="absolute left-[15px] top-[40px] h-[2px] w-[140px] bg-gradient-to-r from-[#615CF6CC] to-[#fff]"></span>
            </div>
            <ul>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                About Us
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                Leadership Team
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                Leadership Team
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                Press
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-[18%] ">
            <div class="relative inline-block text-[#161616] mb-[30px]">
              <h3 class="text-2xl font-bold">Resources</h3>
              <span class="absolute left-0 top-[40px] h-[2px] w-[10px] bg-[linear-gradient(180deg,#615CF6CC_0%,#615CF6CC_100%)]"></span>
              <span class="absolute left-[15px] top-[40px] h-[2px] w-[140px] bg-gradient-to-r from-[#615CF6CC] to-[#fff]"></span>
            </div>
            <ul>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                  Blog
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                Support Center
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                Get Demo
                </a>
              </li>
              <li className="mb-5">
                <a href="#" className="text-[#49515B] text-[18px] font-normal hover:text-[#3147ff] transition-all ease-in-out duration-400 hover:pl-2 ">
                Community Forums
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* info area */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5 py-5 px-2.5 md:px-10 lg:px-[80px] border-t border-b border-[#d5dcfc] ">
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-start items-center gap-3 ">
              <div className="w-10 h-10 text-center rounded-full bg-[#DEE2FD] flex justify-center items-center ">
              <FontAwesomeIcon icon={faPhoneVolume} className="w-4 h-4 text-[#3147FF]" />
              </div>
              <p className=" ">
                  <a href="#" className="text-[18px] font-normal leading-[29px] text-[#49515b] hover:text-[#3147ff] transition-all ease-in-out duration-400 cursor-pointer ">
                  0123-333-7689
                  </a>
                </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-start items-center gap-3 ">
              <div className="w-10 h-10 text-center rounded-full bg-[#DEE2FD] flex justify-center items-center ">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-[#3147FF]" />
              </div>
              <p className=" ">
                  <a href="#" className="text-[18px] font-normal leading-[29px] text-[#49515b] hover:text-[#3147ff] transition-all ease-in-out duration-400 cursor-pointer ">
                  info@example.com
                  </a>
                </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-start items-center gap-3 ">
              <div className="w-10 h-10 text-center rounded-full bg-[#DEE2FD] flex justify-center items-center ">
              <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-[#3147FF]" />
              </div>
              <p className=" ">
                  <a href="#" className="text-[18px] font-normal leading-[29px] text-[#49515b] hover:text-[#3147ff] transition-all ease-in-out duration-400 cursor-pointer ">
                  House 5919 Trussville, USA.
                  </a>
                </p>
            </div>
        </div>
        {/* last part */}
        <div class="bg-[#EDF0FF] py-[30px] text-center">
        <p className="text-base text-[#161616] ">
        Copyright 2025 Techtro | Design By <span className="text-[#615cf6] " >Qzency</span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Footer_2;
