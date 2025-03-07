import React from "react";
import BreadCrumb from "../components/breadcrumb";
import Footer_2 from "../components/Footer_2";

import cardBg from "../assets/images/services/card-bg.png";
import shape1 from "../assets/images/services/item-shape.png";
import shape2 from "../assets/images/services/item-shape-2.png";

import { Expand, BadgeDollarSign, CircleCheck, Users, Mails, ChartNetwork } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ServicesPage = () => {
  return (
    <div>
      <BreadCrumb current={"Services"} />

      {/* main content */}
      <div className="w-full py-[60px] md:py-[80px] lg:py-[110px] ">
        <div className="container mx-auto">
          <div className="max-w-full md:max-w-[80%] lg:max-w-[65%] w-full mx-auto  ">
            <div className="flex flex-col justify-center items-center">
              <div className="text-center py-2.5 px-5 leading-none inline-block bg-white mb-2.5">
                <h6 className="text-[14px] text-[#3147ff] tracking-[2px] font-medium flex gap-1 items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                      <path
                        d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z"
                        fill="#2044F4"
                        stroke="#2044F4"
                        stroke-width="0.5"
                      />
                    </svg>
                  </span>
                  SERVIVCE
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                      <path
                        d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z"
                        fill="#2044F4"
                        stroke="#2044F4"
                        stroke-width="0.5"
                      />
                    </svg>
                  </span>
                </h6>
              </div>
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-[122%] text-[#161616] text-center mb-4">
                Exploring Essential Service
              </h2>
              <p className="text-[#49515B] text-base font-medium text-center ">
                CRM management is comprehensive contact management, allowing businesses to centralize and organize
                customer information for easy access.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full bg-bottom bg-cover bg-no-repeat py-10 md:py-20 lg:pt-[55px] lg:pb-[110px] "
          style={{ backgroundImage: `url(${cardBg})` }}
        >
          {/* card area */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <Expand className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">
                  Contact management
                </h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">
                  This title is versatile and can adapted to fit the specific tone and branding of your website quality.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5"
                  style={{ height: "30px" }}
                />
              </div>
            </div>
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <BadgeDollarSign className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">
                  Sales automation
                </h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">
                  Streamline your sales process with automation tools to save time, boost efficiency more deals.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5"
                  style={{ height: "30px" }}
                />
              </div>
            </div>
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <CircleCheck className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">
                  Task Management
                </h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">
                  Organize, prioritize, and track tasks efficiently with tools designed to boost productivity and
                  collaboration
                </p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5"
                  style={{ height: "30px" }}
                />
              </div>
            </div>
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <Users className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">
                  Pipelines Management
                </h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">
                  Manage and track workflows effectively with pipeline tools for better productivity.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5"
                  style={{ height: "30px" }}
                />
              </div>
            </div>
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <Mails className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">
                  Email automation
                </h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">
                  Automate email campaigns to save time, personalize communication, and boost engagement.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5"
                  style={{ height: "30px" }}
                />
              </div>
            </div>
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <ChartNetwork className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">
                  Workflow Automation
                </h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">
                  Streamline processes with workflow automation to save time and enhance productivity.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5"
                  style={{ height: "30px" }}
                />
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

export default ServicesPage;
