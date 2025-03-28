import React from "react";
import Image from "next/image";

const CompletionCard: React.FC = () => {
  return (
    <div className="relative lg:w-[1096px] lg:h-[693px] lg:px-14 px-6 py-5 rounded-3xl bg-[linear-gradient(154.83deg,#EA382B_1.33%,#722554_64.73%,#311C60_97.82%)] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assets/quiz-screen/quiz-screen-bg.png')",
          zIndex: 0,
        }}
      ></div>
      <div className="relative z-10">
        <h3 className="lg:text-6xl text-4xl text-white text-center font-dharma font-extrabold uppercase">
          Meet Your Web 3.0 Persona
        </h3>
        <Image
          src="/assets/completion-screen/shape1-lhs.png"
          alt="Quiz Page Image"
          className="absolute top-56 -left-28 z-50"
          width={150}
          height={140}
        />
        <Image
          src="/assets/completion-screen/shape2-lhs.png"
          alt="Quiz Page Image"
          className="absolute top-64 left-20"
          width={105}
          height={105}
        />
        <Image
          src="/assets/completion-screen/shape3-lhs.png"
          alt="Quiz Page Image"
          className="absolute top-[450px] left-16 z-50 hidden lg:block"
          width={137}
          height={131}
        />
        <Image
          src="/assets/completion-screen/shape1-rhs.png"
          alt="Quiz Page Image"
          className="absolute top-24 right-20 hidden lg:block"
          width={150}
          height={150}
        />
        <Image
          src="/assets/completion-screen/shape2-rhs.png"
          alt="Quiz Page Image"
          className="absolute top-72 -right-24 z-[9999px]"
          width={95}
          height={95}
        />
        <Image
          src="/assets/completion-screen/shape3-rhs.png"
          alt="Quiz Page Image"
          className="absolute top-[445px] right-24 z-50 hidden lg:block"
          width={90}
          height={95}
        />
        <div className="flex items-center justify-center mt-7 md:mt-16">
          <div
            style={{
              background:
                "linear-gradient(to bottom, #666666 10%, #000000 100%)",
            }}
            className="w-72 py-5 px-3 flex flex-col border-2 rounded-3xl [border-image:linear-gradient(to right, #6CA0E3, #ACA3DE, #B3A9D7, #85E4B2, #70D6DD, #97ACF1, #D9B9E1, #E7DDD5, #E5CBD9, #E4B7DF, #B8B6E9, #8DB6F2, #B2A9F0, #E3B2E8, #E9DDDA, #81F5F7, #7BA3F4)]"
          >
            <div className="flex justify-center items-center">
              <Image
                src="/assets/completion-screen/completion-img.png"
                alt="completion image"
                width={280}
                height={340}
              />
            </div>
            <h3 className="text-white font-dharma uppercase font-extrabold text-4xl text-center py-5">
              EDUCATOR
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionCard;
