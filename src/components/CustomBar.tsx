import Image from "next/image";
import React from "react";

const CustomBarActive = () => {
  return (
    <div className="sm:w-14 w-3 h-2.5 py-1 px-1 sm:h-5 sm:py-2.5 sm:px-4 bg-gradient-to-r from-[#CD53F5] via-[#AC2AF4] to-[#5418F9] rounded-[20px]"></div>
  );
};

const CustomBarInactive = () => {
  return (
    <div className="sm:w-14 w-[0.85px] h-[0.85px] py-1 px-1 sm:h-5 sm:py-2.5 sm:px-4 border border-[#857F7F] bg-[linear-gradient(90deg,#666666_10%,#000000_100%)] rounded-[20px]"></div>
  );
};

export { CustomBarActive, CustomBarInactive };
