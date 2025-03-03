import React from "react";
import SectionTitle from "./SectionTitle";

const DevelopmentProcess = () => {
  return (
    <div className="bg-[#f8f4ff] py-20">
      {/* section title */}
      <div className="container mx-auto">
      <div className="max-w-[700px] w-full mx-auto text-center px-1 2xs:px-0 pb-5 sm:pb-10 md:pb-16">
        <SectionTitle title={`WORKING PROCESS`} textColor={"#161616"} />
        {/* heading */}
        <h2 className="text-[38px] sm:text-[45px] md:text-[54px] xl:text-[60px] font-extrabold leading-[122%] text-[#161616] ">
          Our Complete <br /> <span className="text-[#BBA5E0] font-normal leading-[40px] lg:leading-[74px] ">Development Lifecycle</span> <span className="inline-block w-3 h-3 bg-[#3147ff]"></span>
        </h2>
      </div>
      </div>
      {/* main content */}
      <div className="pt-10 pb-0 ">
        <div className="developmentProcess">
          <div className="relative">
            {/* Progress line */}
            <div className="hidden lg:block absolute top-[8px] left-0 w-full h-px bg-black/20"></div>
            <div className="container mx-auto flex flex-wrap justify-between ">
              {/* Step 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col flex-start items-start relative z-10 mb-10 lg:mb-0">
                <div className="w-4 h-4 rounded-full bg-black mb-[10px] md:mb-[15] lg:mb-[25px] "></div>
                <div className="block lg:hidden absolute top-[8px] left-0 w-full h-px bg-black/20"></div>

                <h3
                  className="text-[55px] font-black leading-[66.56px] tracking-[0.06em] text-left mb-2.5 md:mb-5 lg:mb-[30px] transition-all 
                duration-500 text-transparent [-webkit-text-stroke:1px_rgba(117,114,253,0.4)] hover:[-webkit-text-stroke:1px_rgba(117,114,253,1)] "
                >
                  Step-1
                </h3>
                <div className="w-[80%] ">
                  <h4 className="text-[25px] md:text-[32px] font-bold leading-[110%] mb-5 text-[#161616] ">Initial <br /> Consultation</h4>
                  <p className="text-[15px] font-normal leading-[30px] tracking-[0.03em] text-[#161616]/50 ">
                    Conduct thorough market research though understand industry trends and customer behavior our project
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col flex-start items-start relative z-10 mb-10 lg:mb-0">
                <div className="w-4 h-4 rounded-full bg-black mb-[10px] md:mb-[15] lg:mb-[25px] "></div>
                <div className="block lg:hidden absolute top-[8px] left-0 w-full h-px bg-black/20"></div>

                <h3
                  className="text-[55px] font-black leading-[66.56px] tracking-[0.06em] text-left mb-2.5 md:mb-5 lg:mb-[30px] transition-all 
                duration-500 text-transparent [-webkit-text-stroke:1px_rgba(117,114,253,0.4)] hover:[-webkit-text-stroke:1px_rgba(117,114,253,1)] "
                >
                  Step-2
                </h3>
                <div className="w-[80%] ">
                  <h4 className="text-[25px] md:text-[32px] font-bold leading-[110%] mb-5 text-[#161616] ">Research and <br /> Analysis</h4>
                  <p className="text-[15px] font-normal leading-[30px] tracking-[0.03em] text-[#161616]/50 ">
                    Conduct thorough market research though understand industry trends and customer behavior our project
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col flex-start items-start relative z-10">
                <div className="w-4 h-4 rounded-full bg-black mb-[10px] md:mb-[15] lg:mb-[25px] "></div>
                <div className="block lg:hidden absolute top-[8px] left-0 w-full h-px bg-black/20"></div>

                <h3
                  className="text-[55px] font-black leading-[66.56px] tracking-[0.06em] text-left mb-2.5 md:mb-5 lg:mb-[30px] transition-all 
                duration-500 text-transparent [-webkit-text-stroke:1px_rgba(117,114,253,0.4)] hover:[-webkit-text-stroke:1px_rgba(117,114,253,1)] "
                >
                  Step-3
                </h3>

                <div className="w-[80%] ">
                  <h4 className="text-[25px] md:text-[32px] font-bold leading-[110%] mb-5 text-[#161616] ">Strategy <br /> Development</h4>
                  <p className="text-[15px] font-normal leading-[30px] tracking-[0.03em] text-[#161616]/50 ">
                    Conduct thorough market research though understand industry trends and customer behavior our project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
