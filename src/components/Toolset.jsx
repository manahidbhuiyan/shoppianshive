import React, { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";
import SectionTitle from "../components/SectionTitle";

const Toolset = () => {
  const [activeFilter, setActiveFilter] = useState("front-end");
  const isotope = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Isotope when component mounts
    isotope.current = new Isotope(containerRef.current, {
      itemSelector: ".tech-item",
      layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".tech-item",
      },
    });

    // Cleanup
    return () => {
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, []);

  // Filter function for Isotope
  useEffect(() => {
    if (isotope.current) {
      const filterValue = activeFilter === "all" ? "*" : `.${activeFilter}`;
      isotope.current.arrange({ filter: filterValue });
    }
  }, [activeFilter]);

  // Handle filter button click
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Technology data
  const frontEndTechnologies = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  ];

  const backEndTechnologies = [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  ];

  return (
    <div className="bg-[#fff] my-20">
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
            className={`px-[35px] py-[17px] rounded-[10px] leading-none text-[17px] font-medium transition-all duration-300 cursor-pointer ${activeFilter === "front-end" ? "bg-[#615cf6] text-white" : "bg-[#f3f6f9] text-[#161616] hover:[#f3f6f9] "}`}
            onClick={() => handleFilterChange("front-end")}
          >
            Front End
          </button>
          <button
            className={`px-[35px] py-[17px] rounded-[10px] leading-none text-[17px] font-medium transition-all duration-300 cursor-pointer ${
              activeFilter === "back-end" ? "bg-[#615cf6] text-white" : "bg-[#f3f6f9] text-[#161616] hover:[#f3f6f9] "
            }`}
            onClick={() => handleFilterChange("back-end")}
          >
            Back End
          </button>
        </div>

        {/* Isotope Grid */}
        <div className="bg-[#f8f8f8] p-[65px_53px_35px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[38px] rounded-[30px] "ref={containerRef}>
            {/* Front End Items */}
            {frontEndTechnologies.map((tech, index) => (
              <div key={`frontend-${index}`} className="tech-item front-end bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full" />
                </div>
                <h3 className="text-gray-700 font-medium text-center">{tech.name}</h3>
              </div>
            ))}

            {/* Back End Items */}
            {backEndTechnologies.map((tech, index) => (
              <div key={`backend-${index}`} className="tech-item back-end bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center">
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
