import React from "react";
import SectionTitle from "./SectionTitle";
import { MoveUpRight } from "lucide-react";
import heroBgImage from "../assets/images/hero-bg.jpg";
import bannerImage from "../assets/images/banner-1.jpg";
import videoImage from "../assets/images/video-image.png";

// You can add this to your global CSS file
const animationCSS = `
@keyframes img-anim-top {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const Banner = () => {
  return (
    <div className="w-full bg-no-repeat bg-center bg-cover " style={{ backgroundImage: `url(${heroBgImage})` }}>
      <div className="container mx-auto pt-20 md:pt-40 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col px-1 2xs:px-0">
          
          <SectionTitle title={`YOUR PARTNER IN TECH SUCCESS`} textColor={'#161616'} />

          {/* heading */}
          <h2 className="text-[28px] 2xs:text-[33px] xs:text-[45px] md:text-[55px] lg:text-[74px] font-extrabold leading-[114%] text-[#161616] ">
            Our Expertise for Your <br /> Future IT Solutions <span className="inline-block w-3 h-3 bg-[#615cf6]"></span>
          </h2>
          <p className="text-[14px] 2xs:text-base lg:text-[25px] text-[#3f444b] mt-5 ">As a leading provider of digital solutions, we specialize in crafting bespoke software and applications.</p>

          <button className="max-w-[300px] my-[30px] flex justify-center items-center gap-1 bg-[#3147ff] relative overflow-hidden text-white leading-7 py-4 px-[18px] rounded-lg transition-all duration-300 cursor-pointer text-[16px] font-semibold group">
            <span className="relative z-10 flex items-center gap-1">
              Get Free Consultation <MoveUpRight className="text-white h-4 w-4 mt-[-3px]" />{" "}
            </span>
            {/* Hover Effect - Background Sliding in from Left */}
            <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          </button>
        </div>
        <div className="w-full lg:w-[176px] flex justify-center sm:justify-end">
          <div className="flex justify-center items-center bg-no-repeat bg-center bg-cover w-[250px] h-[250px] 2xs:w-[290px] 2xs:h-[290px] lg:w-[176px] lg:h-[176px] cursor-pointer " style={{ backgroundImage: `url(${videoImage})` }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" className="w-9 h-9">
              <circle cx="25" cy="25" r="25" fill="#ffffff" opacity="0.9" />
              <path d="M35 25L20 15V35L35 25Z" fill="#808080" />
            </svg>
          </div>
        </div>
      </div>
      {/* banner bottom */}
      <div className="hero-4 px-2 2xs:px-4 md:px-10">
        <div className="hero-thumb-wrapper">
          <div className="hero-thumb relative mt-[70px]">
            {/* ::before pseudo-element needs to be handled as a separate element in JSX */}
            <div
              className="absolute inset-0 w-full h-full rounded-[40px] z-10"
              style={{
                background: "linear-gradient(180deg, rgba(143, 143, 143, 0) 0%, rgba(97, 92, 246, 0.8) 95.61%)",
              }}
            ></div>

            <img
              className="w-full h-full rounded-[40px] opacity-0 z-0"
              style={{
                animation: "img-anim-top 1.3s forwards cubic-bezier(0.645, 0.045, 0.355, 1)",
              }}
              decoding="async"
              src={bannerImage}
              alt="hero-img"
            />
          </div>
        </div>

        {/* Add this style tag to your component to include the animation */}
        <style jsx>{animationCSS}</style>
      </div>
    </div>
  );
};

export default Banner;
