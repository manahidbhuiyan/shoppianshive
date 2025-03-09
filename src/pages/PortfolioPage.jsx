import React from "react";
import BreadCrumb from "../components/BreadCrumb.jsx";

import portfolio1 from "../assets/images/portfolio/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio/portfolio-2.png";
import portfolio3 from "../assets/images/portfolio/portfolio-3.png";
import portfolio4 from "../assets/images/portfolio/portfolio-4.png";
import portfolio5 from "../assets/images/portfolio/portfolio-5.jpg";
import portfolio6 from "../assets/images/portfolio/portfolio-6.jpg";
import Footer_2 from "../components/Footer_2";

const PortfolioPage = () => {
  return (
    <div>
      <BreadCrumb current={"Portfolio"} />

      {/* main content */}
      <div className="py-10 md:py-20 tab:py-[110px] ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#F8F8F8] hover:bg-[#fff6f1] pt-10 px-5 md:px-10  rounded-[16px] transition-all duration-400 group">
              <div className="project-content">
                <h3 className="text-[26px] font-bold mb-[15px] ">
                  <a href="#" className="text-[#161616] group-hover:text-[#ff7322] ">
                    Mobile APPS Development
                  </a>
                </h3>
                <p className="text-base font-normal pb-5 mb-[25px] border-b border-[#f6ddce]">
                  The task management web development project aims to create a web-based platform that users to efficiently manage tasks, & team collaboration.
                </p>
                <div className="app-button flex flex-start items-center gap-2.5 mb-[30px] ">
                  <a href="#" className="text-[14px] font-semibold text-[#515151] py-3 px-5 bg-white hover:bg-[#000] hover:text-white rounded-[41px] inline-block leading-normal border border-[#E1E1E1] transition-all duration-400">
                    Mobile App
                  </a>
                  <a href="#" className="text-[14px] font-semibold text-[#515151] py-3 px-5 bg-white hover:bg-[#000] hover:text-white rounded-[41px] inline-block leading-normal border border-[#E1E1E1] transition-all duration-400">
                    SaaS
                  </a>
                </div>
              </div>
              <div className="project-thumb relative overflow-hidden ">
                <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-t-xl bg-[rgba(2,15,12,0.3)] opacity-0 invisible  group-hover:opacity-100  group-hover:visible transition-all duration-400 ease-in-out"></div>
                <img src={portfolio1} alt="" className="w-full h-full rounded-tl-[20px] rounded-tr-[20px] " />
                <a
                  href="#"
                  className="w-[104px] h-[104px] block text-base font-semibold rounded-full bg-[#ff7322] text-white text-center pt-[30px] px-2.5 leading-[1.4]
                 absolute top-[-100px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-400 group-hover:top-[50%] hover:bg-[#161616] "
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>

            <div className="bg-[#F8F8F8] hover:bg-[#fff6f1] pt-10 px-5 md:px-10  rounded-[16px] transition-all duration-400 group">
              <div className="project-content">
                <h3 className="text-[26px] font-bold mb-[15px] ">
                  <a href="#" className="text-[#161616] group-hover:text-[#ff7322] ">
                  Email Marketing Apps
                  </a>
                </h3>
                <p className="text-base font-normal pb-5 mb-[25px] border-b border-[#f6ddce]">
                  The task management web development project aims to create a web-based platform that users to efficiently manage tasks, & team collaboration.
                </p>
                <div className="app-button flex flex-start items-center gap-2.5 mb-[30px] ">
                  <a href="#" className="text-[14px] font-semibold text-[#515151] py-3 px-5 bg-white hover:bg-[#000] hover:text-white rounded-[41px] inline-block leading-normal border border-[#E1E1E1] transition-all duration-400">
                    Marketing
                  </a>
                </div>
              </div>
              <div className="project-thumb relative overflow-hidden ">
                <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-t-xl bg-[rgba(2,15,12,0.3)] opacity-0 invisible  group-hover:opacity-100  group-hover:visible transition-all duration-400 ease-in-out"></div>
                <img src={portfolio2} alt="" className="w-full h-full rounded-tl-[20px] rounded-tr-[20px] " />
                <a
                  href="#"
                  className="w-[104px] h-[104px] block text-base font-semibold rounded-full bg-[#ff7322] text-white text-center pt-[30px] px-2.5 leading-[1.4]
                 absolute top-[-100px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-400 group-hover:top-[50%] hover:bg-[#161616] "
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
            <div className="bg-[#F8F8F8] hover:bg-[#fff6f1] pt-10 px-5 md:px-10  rounded-[16px] transition-all duration-400 group">
              <div className="project-content">
                <h3 className="text-[26px] font-bold mb-[15px] ">
                  <a href="#" className="text-[#161616] group-hover:text-[#ff7322] ">
                  Health Monitoring App
                  </a>
                </h3>
                <p className="text-base font-normal pb-5 mb-[25px] border-b border-[#f6ddce]">
                  The task management web development project aims to create a web-based platform that users to efficiently manage tasks, & team collaboration.
                </p>
                <div className="app-button flex flex-start items-center gap-2.5 mb-[30px] ">
                  <a href="#" className="text-[14px] font-semibold text-[#515151] py-3 px-5 bg-white hover:bg-[#000] hover:text-white rounded-[41px] inline-block leading-normal border border-[#E1E1E1] transition-all duration-400">
                  SaaS
                  </a>
                  <a href="#" className="text-[14px] font-semibold text-[#515151] py-3 px-5 bg-white hover:bg-[#000] hover:text-white rounded-[41px] inline-block leading-normal border border-[#E1E1E1] transition-all duration-400">
                    Web Design
                  </a>
                </div>
              </div>
              <div className="project-thumb relative overflow-hidden ">
                <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-t-xl bg-[rgba(2,15,12,0.3)] opacity-0 invisible  group-hover:opacity-100  group-hover:visible transition-all duration-400 ease-in-out"></div>
                <img src={portfolio3} alt="" className="w-full h-full rounded-tl-[20px] rounded-tr-[20px] " />
                <a
                  href="#"
                  className="w-[104px] h-[104px] block text-base font-semibold rounded-full bg-[#ff7322] text-white text-center pt-[30px] px-2.5 leading-[1.4]
                 absolute top-[-100px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-400 group-hover:top-[50%] hover:bg-[#161616] "
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
            <div className="bg-[#F8F8F8] hover:bg-[#fff6f1] pt-10 px-5 md:px-10  rounded-[16px] transition-all duration-400 group">
              <div className="project-content">
                <h3 className="text-[26px] font-bold mb-[15px] ">
                  <a href="#" className="text-[#161616] group-hover:text-[#ff7322] ">
                    Mobile APPS Development
                  </a>
                </h3>
                <p className="text-base font-normal pb-5 mb-[25px] border-b border-[#f6ddce]">
                  The task management web development project aims to create a web-based platform that users to efficiently manage tasks, & team collaboration.
                </p>
                <div className="app-button flex flex-start items-center gap-2.5 mb-[30px] ">
                  <a href="#" className="text-[14px] font-semibold text-[#515151] py-3 px-5 bg-white hover:bg-[#000] hover:text-white rounded-[41px] inline-block leading-normal border border-[#E1E1E1] transition-all duration-400">
                    Marketing
                  </a>
                </div>
              </div>
              <div className="project-thumb relative overflow-hidden ">
                <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-t-xl bg-[rgba(2,15,12,0.3)] opacity-0 invisible  group-hover:opacity-100  group-hover:visible transition-all duration-400 ease-in-out"></div>
                <img src={portfolio4} alt="" className="w-full h-full rounded-tl-[20px] rounded-tr-[20px] " />
                <a
                  href="#"
                  className="w-[104px] h-[104px] block text-base font-semibold rounded-full bg-[#ff7322] text-white text-center pt-[30px] px-2.5 leading-[1.4]
                 absolute top-[-100px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-400 group-hover:top-[50%] hover:bg-[#161616] "
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
            <div className="bg-[#F8F8F8] hover:bg-[#fff6f1] pt-10 px-5 md:px-10  rounded-[16px] transition-all duration-400 group">
              <div className="project-content">
                <h3 className="text-[26px] font-bold mb-[15px] ">
                  <a href="#" className="text-[#161616] group-hover:text-[#ff7322] ">
                  Hospital management system
                  </a>
                </h3>
                <p className="text-base font-normal pb-5 mb-[25px] border-b border-[#f6ddce]">
                  The task management web development project aims to create a web-based platform that users to efficiently manage tasks, & team collaboration.
                </p>
                <div className="app-button flex flex-start items-center gap-2.5 mb-[30px] ">
                  <a href="#" className="text-[14px] font-semibold text-[#515151] py-3 px-5 bg-white hover:bg-[#000] hover:text-white rounded-[41px] inline-block leading-normal border border-[#E1E1E1] transition-all duration-400">
                  Mobile app
                  </a>
                  <a href="#" className="text-[14px] font-semibold text-[#515151] py-3 px-5 bg-white hover:bg-[#000] hover:text-white rounded-[41px] inline-block leading-normal border border-[#E1E1E1] transition-all duration-400">
                    Web Design
                  </a>
                </div>
              </div>
              <div className="project-thumb relative overflow-hidden ">
                <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-t-xl bg-[rgba(2,15,12,0.3)] opacity-0 invisible  group-hover:opacity-100  group-hover:visible transition-all duration-400 ease-in-out"></div>
                <img src={portfolio5} alt="" className="w-full h-full rounded-tl-[20px] rounded-tr-[20px] " />
                <a
                  href="#"
                  className="w-[104px] h-[104px] block text-base font-semibold rounded-full bg-[#ff7322] text-white text-center pt-[30px] px-2.5 leading-[1.4]
                 absolute top-[-100px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-400 group-hover:top-[50%] hover:bg-[#161616] "
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
            <div className="bg-[#F8F8F8] hover:bg-[#fff6f1] pt-10 px-5 md:px-10  rounded-[16px] transition-all duration-400 group">
              <div className="project-content">
                <h3 className="text-[26px] font-bold mb-[15px] ">
                  <a href="#" className="text-[#161616] group-hover:text-[#ff7322] ">
                  Inventory & POS Checkout App
                  </a>
                </h3>
                <p className="text-base font-normal pb-5 mb-[25px] border-b border-[#f6ddce]">
                  The task management web development project aims to create a web-based platform that users to efficiently manage tasks, & team collaboration.
                </p>
                <div className="app-button flex flex-start items-center gap-2.5 mb-[30px] ">
                  <a href="#" className="text-[14px] font-semibold text-[#515151] py-3 px-5 bg-white hover:bg-[#000] hover:text-white rounded-[41px] inline-block leading-normal border border-[#E1E1E1] transition-all duration-400">
                  Mobile app
                  </a>
                  <a href="#" className="text-[14px] font-semibold text-[#515151] py-3 px-5 bg-white hover:bg-[#000] hover:text-white rounded-[41px] inline-block leading-normal border border-[#E1E1E1] transition-all duration-400">
                    Saas
                  </a>
                </div>
              </div>
              <div className="project-thumb relative overflow-hidden ">
                <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-t-xl bg-[rgba(2,15,12,0.3)] opacity-0 invisible  group-hover:opacity-100  group-hover:visible transition-all duration-400 ease-in-out"></div>
                <img src={portfolio6} alt="" className="w-full h-full rounded-tl-[20px] rounded-tr-[20px] " />
                <a
                  href="#"
                  className="w-[104px] h-[104px] block text-base font-semibold rounded-full bg-[#ff7322] text-white text-center pt-[30px] px-2.5 leading-[1.4]
                 absolute top-[-100px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-400 group-hover:top-[50%] hover:bg-[#161616] "
                >
                  {" "}
                  View Project{" "}
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

export default PortfolioPage;
