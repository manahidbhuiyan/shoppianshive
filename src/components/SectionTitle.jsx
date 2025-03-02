import React from "react";

const SectionTitle = ({ title, bgStyle, textColor }) => {
  const titleName = title;
  console.log("textColor", textColor);

  return (
    <div>
      {/* title box */}
      <div
        className={`max-w-[270px] 2xs:max-w-[320px] px-1 2xs:px-2 py-1 bg-white inline-block rounded-lg mb-5 ${bgStyle}
        shadow-[0px_2px_4px_0px_rgba(45,54,67,0.08),0px_1px_2px_0px_rgba(45,54,67,0.04)]`}
      >
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-1 justify-end items-end">
            <div className="h-px w-3 2xs:w-5 bg-blue-600"></div>
            <div className="h-px w-5 2xs:w-8 bg-blue-600"></div>
          </div>
          <h2 className={`text-[10px] 2xs:text-xs font-normal leading-[26px] tracking-[0.6px] uppercase mx-2.5`} style={{ color: textColor }}>
            {titleName}
          </h2>
          <div className="flex flex-col gap-1 justify-start">
            <div className="h-px w-3 2xs:w-5 bg-blue-600"></div>
            <div className="h-px w-5 2xs:w-8 bg-blue-600 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
