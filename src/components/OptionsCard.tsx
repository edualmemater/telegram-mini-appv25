import Image from "next/image";
import React from "react";

interface OptionsCardProps {
  option?: string;
}

const OptionsCard: React.FC<OptionsCardProps> = ({ option = "" }) => {
  return (
    <div className="relative bg-[radial-gradient(ellipse_at_center,rgba(165,239,255,0.2)_0%,rgba(165,239,255,0.044)_77%)] border rounded-3xl [border-image:linear-gradient(to right, #6CA0E3, #ACA3DE, #B3A9D7, #85E4B2, #70D6DD, #97ACF1, #D9B9E1, #E7DDD5, #E5CBD9, #E4B7DF, #B8B6E9, #8DB6F2, #B2A9F0, #E3B2E8, #E9DDDA, #81F5F7, #7BA3F4)] w-72 md:w-96 overflow-hidden xl:w-[414px] xl:h-40">
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/assets/quiz-screen/options-card-img.png"
          alt="Background"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="relative z-50 py-7 px-5">
        <p className="text-white text-center text-lg font-switzer lg:text-2xl">
          {option ? option : "I am a developer"}
        </p>
      </div>
    </div>
  );
};

export default OptionsCard;
