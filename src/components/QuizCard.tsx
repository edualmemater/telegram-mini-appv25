import React from "react";
import OptionsCard from "./OptionsCard";

interface QuizCardProps {
  question?: string;
  options?: string[];
}

const QuizCard: React.FC<QuizCardProps> = ({ question = "", options = [] }) => {
  return (
    <div className="relative lg:w-[1096px] lg:h-[693px] lg:px-14 px-3 py-5 rounded-3xl bg-[linear-gradient(154.83deg,#EA382B_1.33%,#722554_64.73%,#311C60_97.82%)] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/quiz-screen/quiz-screen-bg.png')",
          zIndex: 0,
        }}
      ></div>
      <div className="relative z-10">
        <h3 className="lg:text-6xl text-4xl text-white text-center font-dharma font-extrabold uppercase">
          {question
            ? question
            : "What is the most important thing in your life?"}
        </h3>
        <p className="text-white text-center text-base mt-3 lg:mt-7">
          Select one option from the following
        </p>
        <div className="flex flex-col md:gap-y-5 lg:mt-10">
          <div className="flex flex-col lg:flex-row gap-y-7 lg:gap-y-0 items-center justify-center gap-x-7 mt-10">
            {
              //display only the first two options
              options.slice(0, 2).map((option, index) => (
                <OptionsCard key={index} option={option} />
              ))
            }
          </div>
          <div className="flex flex-col lg:flex-row gap-y-7 lg:gap-y-0 items-center justify-center gap-x-7 mt-10">
            {
              //display only the next two options
              options.slice(2, 4).map((option, index) => (
                <OptionsCard key={index} option={option} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
