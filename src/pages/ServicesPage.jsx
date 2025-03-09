import React, { useState } from "react";
import BreadCrumb from "../components/breadcrumb";
import Footer_2 from "../components/Footer_2";

import cardBg from "../assets/images/services/card-bg.png";
import shape1 from "../assets/images/services/item-shape.png";
import shape2 from "../assets/images/services/item-shape-2.png";
import star from "../assets/images/services/star.png";

import { Expand, BadgeDollarSign, CircleCheck, Users, Mails, ChartNetwork } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

// You can add this to your global CSS file
const animationCSS = `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-30%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }`;
const ServicesPage = () => {
  const partners = ["Discover the World of InnovateTech", "Quality Assurance", "High Security Website", "Client Satisfaction Work"];

  const [openItem, setOpenItem] = useState(0);

  // faq items
  const faqItems = [
    {
      question: "CRM software, and how can it benefit my business?",
      answer: "CRM (Customer Relationship Management) software helps businesses centralize data, streamline sales processes, and improve customer.",
    },
    {
      question: "How do I get started with CRM software?",
      answer:
        "To get started with CRM software, first assess your business needs, research suitable CRM solutions, set a budget, start with a free trial, prepare your data for migration, train your team, and implement the system gradually with regular reviews for optimization.",
    },
    {
      question: "Is CRM software scalable for businesses of all sizes?",
      answer:
        "Yes, modern CRM software is highly scalable. Most CRM providers offer tiered pricing plans that can accommodate businesses from small startups to large enterprises, allowing you to add features, users, and storage capacity as your business grows.",
    },
    {
      question: "How secure is my data in CRM software?",
      answer:
        "Most reputable CRM providers implement robust security measures including data encryption, regular backups, access controls, compliance with regulations like GDPR, and security certifications such as SOC 2. However, security levels can vary between providers, so it's important to verify specific security features.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? -1 : index);
  };

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
                      <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" fill="#2044F4" stroke="#2044F4" stroke-width="0.5" />
                    </svg>
                  </span>
                  SERVIVCE
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" fill="#2044F4" stroke="#2044F4" stroke-width="0.5" />
                    </svg>
                  </span>
                </h6>
              </div>
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-[122%] text-[#161616] text-center mb-4">Exploring Essential Service</h2>
              <p className="text-[#49515B] text-base font-medium text-center ">
                CRM management is comprehensive contact management, allowing businesses to centralize and organize customer information for easy access.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-bottom bg-cover bg-no-repeat py-10 md:py-20 lg:pt-[55px] lg:pb-[110px] " style={{ backgroundImage: `url(${cardBg})` }}>
          {/* card area */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <Expand className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">Contact management</h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">This title is versatile and can adapted to fit the specific tone and branding of your website quality.</p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon icon={faArrowRight} className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5" style={{ height: "30px" }} />
              </div>
            </div>
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <BadgeDollarSign className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">Sales automation</h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">Streamline your sales process with automation tools to save time, boost efficiency more deals.</p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon icon={faArrowRight} className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5" style={{ height: "30px" }} />
              </div>
            </div>
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <CircleCheck className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">Task Management</h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">
                  Organize, prioritize, and track tasks efficiently with tools designed to boost productivity and collaboration
                </p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon icon={faArrowRight} className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5" style={{ height: "30px" }} />
              </div>
            </div>
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <Users className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">Pipelines Management</h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">Manage and track workflows effectively with pipeline tools for better productivity.</p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon icon={faArrowRight} className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5" style={{ height: "30px" }} />
              </div>
            </div>
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <Mails className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">Email automation</h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">Automate email campaigns to save time, personalize communication, and boost engagement.</p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon icon={faArrowRight} className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5" style={{ height: "30px" }} />
              </div>
            </div>
            {/* item */}
            <div className="relative bg-[#E4E6FF] rounded-2xl p-10 overflow-hidden group cursor-pointer transition-all">
              <div className="absolute inset-0 bg-[#1E2FC0] rounded-2xl h-0 group-hover:h-full transition-all duration-400"></div>
              <div className="relative z-10">
                <div className="mb-[30px] transition-all">
                  <ChartNetwork className="w-[70px] h-[79px] text-[#3147ff] group-hover:text-white stroke-1 " />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#161616] group-hover:text-white transition-all mb-[15px] ">Workflow Automation</h3>
                <p className="text-[#49515B] mt-2 group-hover:text-[#F3F3F3] transition-all">Streamline processes with workflow automation to save time and enhance productivity.</p>
              </div>
              <div className="absolute bottom-0 right-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:bottom-[-150px] ">
                {/* Replace with your shape image */}
                <img src={shape1} alt="Shape" className="w-full" />
              </div>
              <div className="absolute bottom-[-150px] right-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
                {/* Replace with your shape image */}
                <img src={shape2} alt="Shape 2" className="w-full" />
                <FontAwesomeIcon icon={faArrowRight} className="text-[#fff] absolute right-[25px] w-[26px] bottom-20 group-hover:bottom-5" style={{ height: "30px" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="overflow-hidden relative py-[30px] bg-[#141415] ">
            {/* <div className="absolute top-0 right-0 w-[175.149px] h-[68px] bg-gradient-to-r from-white to-[rgba(255,255,255,0)] z-[3]"></div>
              <div className="absolute top-0 left-0 w-[175.149px] h-[68px] bg-gradient-to-r from-white to-[rgba(255,255,255,0)] z-[3]"></div> */}

            <div className="inline-flex animate-marquee">
              {/* First set of images */}
              <div className="flex items-center gap-10 whitespace-nowrap">
                {partners.map((partner, index) => (
                  <div className="flex items-center gap-5  ">
                    <p className="text-[20px] font-medium leading-[32px] uppercase text-white " key={`partner-1-${index}`}>
                      {partner}{" "}
                    </p>
                    <img src={star} alt="" className="w-7 h-7" />
                  </div>
                  // <img key={`partner-1-${index}`} src={partner} alt={`Partner ${index + 1}`} />
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-10 whitespace-nowrap pl-10 ">
                {partners.map((partner, index) => (
                  <div className="flex items-center gap-5 ">
                    <p className="text-[20px] font-medium leading-[32px] uppercase text-white " key={`partner-1-${index}`}>
                      {partner}{" "}
                    </p>
                    <img src={star} alt="" className="w-7 h-7" />
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="absolute top-0 left-0 w-[175.149px] h-[68px] bg-gradient-to-l from-white to-[rgba(255,255,255,0)] z-[3]"></div> */}
            {/* <div className="absolute top-0 right-0 w-[175.149px] h-[68px] bg-gradient-to-l from-white to-[rgba(255,255,255,0)] z-[3]"></div> */}
          </div>

          {/* Add this style tag to your component to include the animation */}
          <style jsx>{animationCSS}</style>
        </div>

        <div className="w-full md:py-20 lg:pt-[55px]">
          <div className="container mx-auto">
            <div className="max-w-full md:max-w-[80%] lg:max-w-[65%] w-full mx-auto  ">
              <div className="flex flex-col justify-center items-center">
                <div className="text-center py-2.5 px-5 leading-none inline-block bg-white mb-2.5">
                  <h6 className="text-[14px] text-[#3147ff] tracking-[2px] font-medium flex gap-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                        <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" fill="#2044F4" stroke="#2044F4" stroke-width="0.5" />
                      </svg>
                    </span>
                    FAQS
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                        <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" fill="#2044F4" stroke="#2044F4" stroke-width="0.5" />
                      </svg>
                    </span>
                  </h6>
                </div>
                <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-[122%] text-[#161616] text-center mb-4">Get Your Have a Questions?</h2>
                <p className="text-[#49515B] text-base font-medium text-center ">
                  Welcome to our FAQS section, where we address common queries and provide helpful solutions to ensure you get the most out of our CRM software.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* faq area start */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="faq-items">
            <div className="accordion transition-all duration-400">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-[#f4f6ff] rounded-2xl mb-4 overflow-hidden group ">
                  <h2>
                    <button className="w-full text-left flex justify-between items-center py-6 px-8 text-xl font-medium text-[#161616] focus:outline-none" onClick={() => toggleAccordion(index)}>
                      <span>Q. {item.question}</span>
                      <span
                        className={`w-10 h-10 rounded-full flex justify-center items-center transition-all duration-500 ${
                          openItem === index ? "bg-[#3147ff] border-[#3147ff]" : "bg-transparent border-[#bac1ff] "
                        } border`}
                      >
                        <FontAwesomeIcon icon={openItem === index ? faArrowUp : faArrowDown} className={`transition-all duration-500 ${openItem === index ? "text-white" : "text-[#bac1ff]"}`} />
                      </span>
                    </button>
                  </h2>

                  <div className={`transition-all duration-500 overflow-hidden ${openItem === index ? "flex" : "hidden"}`}>
                    <div className="px-8 pb-5">
                      <p className="text-[#49515b] text-base leading-8 font-normal">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
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
