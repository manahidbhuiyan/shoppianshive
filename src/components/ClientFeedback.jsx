import React from "react";
import SectionTitle from "../components/SectionTitle";
import clientMainImage from "../assets/images/home/feedback/clientMain.jpg";
import client1 from "../assets/images/home/feedback/client-1.jpg";
// import client2 from '../assets/images/home/feedback/client-2.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Testimonial1 from "../assets/images/home/feedback/trustpilot.png";
import Testimonial2 from "../assets/images/home/feedback/google.png";
import Testimonial3 from "../assets/images/home/feedback/clutch.png";
// import Shape1 from '../assets/images/home/feedback/shape1.png'
// import Shape2 from '../assets/images/home/feedback/shape2.png'
// import Shape3 from '../assets/images/home/feedback/shape3.png'
import Shape4 from "../assets/images/home/feedback/shape4.png";

const ClientFeedback = () => {
  return (
    <div className="bg-[#f8f8f8] pt-20 px-3 ">
      {/* section title */}
      <div className="max-w-[700px] w-full mx-auto text-center px-1 2xs:px-0 pb-5 sm:pb-10 md:pb-16">
        <SectionTitle title={`client feedback`} textColor={"#161616"} />
        {/* heading */}
        <h2 className="text-[38px] sm:text-[45px] md:text-[54px] xl:text-[60px] font-extrabold leading-[122%] text-[#161616] ">
          Why Our Clients Trust <span className="inline-block w-3 h-3 bg-[#161616]"></span>
        </h2>
        {/* sub heading */}
        <p className="text-[14px] 2xs:text-base lg:text-[16px] text-[#3f444b] mt-5 w-full text-wrap break-all ">
          Explore a showcase of our latest works, where innovation meets execution. From cutting-edge software solutions to captivating web designs.
        </p>
      </div>
      {/* section content */}
      <div className="w-full bg-gradient-to-b from-[#DECFF6] to-[#EEE4FF] rounded-[30px] py-10 md:py-20 tab:py-[110px] ">
        <div className="container mx-auto">
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="w-full lg:w-5/12 xl:w-4/12 px-3 pb-8 md:pb-16 lg:pb-0">
              <img src={clientMainImage} alt="" className="w-full rounded-[20px] " />
            </div>
            <div className="w-full lg:w-7/12 xl:w-8/12 px-3">
              <div className="card-items pb-[45px] border-b border-[#D5C5EF] ">
                <h6 className="text-[20px] font-medium leading-[40px] text-[#3147ff] ">I'm a new customer</h6>
                <p className="text-[20px] md:text-[26px] font-normal leading-[46px] text-[#3F444B] mb-9 ">
                  It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently into.
                </p>
                <div className="item flex justify-between items-center">
                  <div className="items-left flex justify-start items-center gap-5">
                    <img src={client1} alt="" className="w-[70px] rounded-[10px]" />
                    <div>
                      <h5 className="text-[#3F444B] text-[20px] font-semibold leading-[30px]">Eleanor Pena</h5>
                      <p className="text-[#3147ff] text-[15px] font-normal leading-[26px]">Senior Director</p>
                    </div>
                  </div>
                  <div className="flex justify-end items-center gap-2">
                    <div className="left-arrow w-[45px] h-[45px] leading-[45px] text-center rounded-full transition-all duration-400 shadow-[0px_2px_4px_0px_rgba(45,54,67,0.08),0px_1px_2px_0px_rgba(45,54,67,0.04)] bg-white hover:bg-blue-500 flex items-center justify-center cursor-pointer group">
                      <FontAwesomeIcon icon={faArrowLeft} className="text-black group-hover:text-white transition-colors" />
                    </div>
                    <div className="right-arrow w-[45px] h-[45px] leading-[45px] text-center rounded-full transition-all duration-400 shadow-[0px_2px_4px_0px_rgba(45,54,67,0.08),0px_1px_2px_0px_rgba(45,54,67,0.04)] bg-white hover:bg-blue-500 flex items-center justify-center cursor-pointer group">
                      <FontAwesomeIcon icon={faArrowRight} className="text-black group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center mt-[35px] gap-[35px] ">
                <div>
                  <h5 className="text-[#161616] text-[18px] font-bold">Read More Reviews</h5>
                </div>
                <div>
                  <img src={Shape4} alt="" />
                </div>
                <div className="text-center">
                  <img src={Testimonial1} alt="" />
                  <p className="text-[16px] text-[#161616]">1K Reviews</p>
                </div>
                <div className="text-center">
                  <img src={Testimonial2} alt="" />
                  <p className="text-[16px] text-[#161616]">4K Reviews</p>
                </div>
                <div className="text-center">
                  <img src={Testimonial3} alt="" />
                  <p className="text-[16px] text-[#161616]">69K Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
