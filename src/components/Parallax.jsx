import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import paralaxImage from "../assets/images/services.jpg";

const ParallaxSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current || !contentRef.current) return;

      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const viewportHeight = window.innerHeight;

      // When approaching or within the section
      if (scrollPosition + viewportHeight >= sectionTop && scrollPosition <= sectionBottom) {
        // Fix the background in place when in view
        bgRef.current.style.position = "fixed";
        bgRef.current.style.top = "0";
        bgRef.current.style.height = "100vh";
        setIsFixed(true);
      } else {
        // Move the background with scroll when out of view
        bgRef.current.style.position = "absolute";

        if (scrollPosition > sectionBottom) {
          // If scrolled past section, position at bottom
          bgRef.current.style.top = `${sectionHeight - viewportHeight}px`;
        } else {
          // If scrolled above section, position at top
          bgRef.current.style.top = "0";
        }
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial calculation after component mounts
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative" ref={sectionRef} style={{ minHeight: "100vh" }}>
      {/* Parallax Background - Takes full viewport height and stays fixed during scroll */}
      <div
        ref={bgRef}
        className="absolute w-full h-screen bg-contain bg-center"
        style={{
          backgroundImage: `url(${paralaxImage})`,
          zIndex: "-1",
        }}
      />

      {/* Top spacer to ensure content can scroll over the background */}
      <div className="h-[15vh]"></div>

      {/* Main Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center">
        {/* Title Section */}
        <div className="flex justify-center flex-col items-center mb-[30px] text-center px-4">
          <SectionTitle title={`OUR EXPERTISE`} bgStyle={`bg-gradient-to-b from-[#F9A474] to-[#F9A474]`} textColor={"#020101"} />
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-[122%] text-white">Our Tech Solutions Services</h2>
        </div>

        {/* Down Arrow Button */}
        <div className="rounded-full bg-[#5C5CFF] p-4 flex items-center justify-center cursor-pointer hover:bg-[#4B4BEE] transition-colors">
          <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 L32 32 L44 20" stroke="white" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 42 L32 54 L44 42" stroke="white" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        {/* Services Grid */}
        <div className="bg-white rounded-xl mt-10 shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto z-10">
          {/* Software Development */}
          <div className="border-[#c8d3ff66] border-r border-b md:border-b-0 lg:border-r lg:border-b-0 p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9061F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7 17L17 7M17 7H10M17 7V14" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
            </div>
            <h3 className="text-[27px] font-bold text-[#161616] mb-4">Software Development</h3>
            <ul className="space-y-2 text-[#515151]">
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Agile Methodologies</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Clear Requirements</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Feedback & Improvement</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Quality Assurance</span>
              </li>
            </ul>
          </div>

          {/* Cybersecurity Services */}
          <div className="border-[#c8d3ff66] border-b lg:border-r lg:border-b-0 p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7 17L17 7M17 7H10M17 7V14" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
            </div>
            <h3 className="text-[27px] font-bold text-[#161616] mb-4">Cybersecurity Services</h3>
            <ul className="space-y-2 text-[#515151]">
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Agile Methodologies</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Clear Requirements</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Feedback & Improvement</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Quality Assurance</span>
              </li>
            </ul>
          </div>

          {/* Cloud Computing Solutions */}
          <div className="border-[#c8d3ff66] border-b md:border-r-0 lg:border-b-0 p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-lime-100 w-16 h-16 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#84CC16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 16.95A7 7 0 0 1 12 23a7 7 0 0 1-5-12m0 0a7 7 0 0 1 10-5m0 0a7 7 0 0 1 5 12M9 17h6"></path>
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7 17L17 7M17 7H10M17 7V14" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
            </div>
            <h3 className="text-[27px] font-bold text-[#161616] mb-4">Cloud Computing Solutions</h3>
            <ul className="space-y-2 text-[#515151]">
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Agile Methodologies</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Clear Requirements</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Feedback & Improvement</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Quality Assurance</span>
              </li>
            </ul>
          </div>

          {/* CRM Management */}
          <div className="border-[#c8d3ff66] border-t border-r border-b lg:border-b-0 md:border-b p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34"></path>
                  <path d="M3 15h12"></path>
                  <path d="M18 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"></path>
                  <line x1="22" y1="13" x2="22" y2="13"></line>
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7 17L17 7M17 7H10M17 7V14" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
            </div>
            <h3 className="text-[27px] font-bold text-[#161616] mb-4">CRM Management</h3>
            <ul className="space-y-2 text-[#515151]">
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Agile Methodologies</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Clear Requirements</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Feedback & Improvement</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Quality Assurance</span>
              </li>
            </ul>
          </div>

          {/* Quality Assurance */}
          <div className="border-[#c8d3ff66] border-t border-b lg:border-r lg:border-b-0 md:border-b p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7 17L17 7M17 7H10M17 7V14" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
            </div>
            <h3 className="text-[27px] font-bold text-[#161616] mb-4">Quality Assurance</h3>
            <ul className="space-y-2 text-[#515151]">
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Agile Methodologies</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Clear Requirements</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Feedback & Improvement</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Quality Assurance</span>
              </li>
            </ul>
          </div>

          {/* E-Commerce Development */}
          <div className="border-[#c8d3ff66] border-t p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7 17L17 7M17 7H10M17 7V14" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
            </div>
            <h3 className="text-[27px] font-bold text-[#161616] mb-4">E-Commerce Development</h3>
            <ul className="space-y-2 text-[#515151]">
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Agile Methodologies</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Clear Requirements</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Feedback & Improvement</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9654;</span>
                <span>Quality Assurance</span>
              </li>
            </ul>
          </div>

        </div>

        {/* View All Services Button */}
        <div className="mt-10 mb-16 z-10">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-medium flex items-center transition-colors">
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Bottom Section with Different Background Color */}
        <div className="w-full bg-slate-100 py-20 px-4 mt-[-330px] h-[380px] ">
          {/* <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Why Choose Our Services?</h3>
            <p className="text-gray-700 mb-8">
              We combine technical expertise with industry knowledge to deliver solutions that drive growth, enhance efficiency, and provide a competitive edge in today's digital landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-indigo-600 mb-2">15+</div>
                <div className="text-gray-700">Years of Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-indigo-600 mb-2">500+</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-indigo-600 mb-2">98%</div>
                <div className="text-gray-700">Client Satisfaction</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
