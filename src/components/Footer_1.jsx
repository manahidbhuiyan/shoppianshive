import React from "react";
import footer1 from "../assets/images/footer/footer-1.jpg";
import content1 from "../assets/images/footer/footer-content-icon-1.svg"; // Right side image

const Footer_1 = () => {
  return (
    <div className="bg-[#161616]">
      {/* Background Image with Overlay */}
      <div
        className="relative bg-cover bg-center bg-no-repeat pb-[110px] pt-[110px] rounded-b-[100px]"
        style={{ backgroundImage: `url(${footer1})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(93,88,235,0.4)] to-[rgba(93,88,235,0.64)] rounded-b-[100px]"></div>

        {/* Content Inside */}
        <div className="container mx-auto px-5 relative z-10">
          <div className="flex flex-wrap items-center justify-between">
            {/* Left - Text Content (col-8) */}
            <div className="w-full md:w-2/3 text-center ">
              <h2 className="text-white text-[68px] font-bold leading-[75px] mt-[30px] mb-4 perspective-[300px]">
                <div className="block relative translate-x-0 translate-y-0 translate-z-0 opacity-100">
                  Let's Make It Happen
                </div>
              </h2>

              {/* Get in Touch Button */}
              <h3>
                <div className="block relative translate-x-0 translate-y-0 translate-z-0 opacity-100 md:text-right">
                  <a
                    href="#"
                    className="text-[#f2cc4d] text-[60px] font-medium leading-none underline transition-all duration-400 ease-in-out"
                  >
                    Get In Touch
                  </a>
                </div>
              </h3>
            </div>

            {/* Right - Image (col-4) */}
            <div className="w-full md:w-1/3 flex justify-center ">
              <img
                src={content1}
                alt="content1"
                className="w-auto max-w-full opacity-100 animate-fadeInUp"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_1;
