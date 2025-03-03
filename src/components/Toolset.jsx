import React, { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";
import SectionTitle from "../components/SectionTitle";

const Toolset = () => {
  const [activeFilter, setActiveFilter] = useState("frontend");
  const isotopeRef = useRef(null);
  const containerRef = useRef(null);

  // Technology data
  const Technologies = [
    // Frontend technologies
    { name: "HTML5", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Sass", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Vue.js", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  
    // Backend technologies
    { name: "Node.js", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Express.js", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "FastAPI", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "MongoDB", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "NoSQL", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  ];

  useEffect(() => {
    // Initialize Isotope when component mounts
    isotopeRef.current = new Isotope(containerRef.current, {
      itemSelector: ".tech-item",
      layoutMode: "masonry",
      percentPosition: true,
      masonry: {
        columnWidth: ".tech-item",
        gutter: 32,
      },
    });

    // Apply initial filter
    isotopeRef.current.arrange({ filter: `.${activeFilter}` });

    // Cleanup
    return () => {
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []);

  // Filter function for Isotope
  useEffect(() => {
    if (isotopeRef.current) {
      isotopeRef.current.arrange({ filter: `.${activeFilter}` });
    }
  }, [activeFilter]);

  return (
    <div className="bg-[#fff] my-20 px-3 ">
      {/* section title */}
      <div className="max-w-[700px] w-full mx-auto text-center px-1 2xs:px-0 pb-5 sm:pb-10 md:pb-16">
        <SectionTitle title={`Our Toolset`} textColor={"#161616"} />
        {/* heading */}
        <h2 className="text-[38px] sm:text-[45px] md:text-[54px] xl:text-[60px] font-extrabold leading-[122%] text-[#161616] ">
          Technologies Behind Our Solutions <span className="inline-block w-3 h-3 bg-[#161616]"></span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex gap-4 mb-10">
          <button
            className={`px-[35px] py-[17px] rounded-[10px] leading-none text-[17px] font-medium transition-all duration-300 cursor-pointer ${
              activeFilter === "frontend" ? "bg-[#615cf6] text-white" : "bg-[#f3f6f9] text-[#161616] hover:bg-[#e9ecef]"
            }`}
            onClick={() => setActiveFilter("frontend")}
          >
            Front End
          </button>
          <button
            className={`px-[35px] py-[17px] rounded-[10px] leading-none text-[17px] font-medium transition-all duration-300 cursor-pointer ${
              activeFilter === "backend" ? "bg-[#615cf6] text-white" : "bg-[#f3f6f9] text-[#161616] hover:bg-[#e9ecef]"
            }`}
            onClick={() => setActiveFilter("backend")}
          >
            Back End
          </button>
        </div>

        {/* Isotope Grid */}

        <div ref={containerRef} className="bg-[#f8f8f8] p-[65px_53px_35px] rounded-[30px]">
          {Technologies.map((tech, index) => (
            <div
              key={index}
              className={`tech-item ${tech.category} bg-white max-w-[200px] max-h-[200px] p-[15px] rounded-2xl shadow-[0px_4px_8px_-2px_rgba(45,54,67,0.08),0px_2px_4px_-2px_rgba(45,54,67,0.06)] flex flex-col items-center justify-center m-3`}
              style={{ width: "200px" }} // Fixed width
            >
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full" />
              </div>
              <h3 className="text-gray-700 font-medium text-center">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toolset;
