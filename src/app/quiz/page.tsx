"use client";
import { useState } from "react";
import { CustomBarActive, CustomBarInactive } from "@/components/CustomBar";
import QuizCard from "@/components/QuizCard";
import quizData from "@/data/quiz";
import Image from "next/image";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <main className="bg-black min-h-screen overflow-x-hidden relative">
      <h1 className="text-white flex items-center gap-x-1.5 md:gap-x-5 justify-center text-center py-7 md:text-6xl text-3xl sm:text-4xl font-dharma px-4">
        <Image
          src="/assets/quiz-screen/phone-img.png"
          alt="Hero Image"
          width={60}
          height={60}
          className="-mt-4"
        />
        <span className="break-words">UNLOCK YOUR WEB3.0 PERSONA</span>
      </h1>
      <Image
        src="/assets/quiz-screen/spring-quiz-screen.png"
        alt="Hero Image"
        className="absolute top-0 left-0"
        width={180}
        height={180}
      />
      <Image
        src="/assets/quiz-screen/tube-blurred-quiz.png"
        alt="Hero Image"
        className="absolute -bottom-16 left-0"
        width={300}
        height={400}
      />
      <Image
        src="/assets/quiz-screen/tube-quiz-rhs.png"
        alt="Quiz Page Image"
        className="absolute top-0 right-0"
        width={200}
        height={210}
      />
      <Image
        src="/assets/quiz-screen/tube-quiz-rhs-2.png"
        alt="Quiz Page Image"
        className="absolute top-80 right-0"
        width={200}
        height={310}
      />
      <div className="flex items-center justify-center gap-x-3 mt-3.5 md:mx-auto mx-4 pb-6 max-w-4xl">
        <QuizCard
          question={quizData[currentQuestionIndex].question}
          options={quizData[currentQuestionIndex].options}
        />
      </div>
      <div className="flex justify-between items-center lg:mx-52 mx-5 mt-5">
        <button
          className="relative font-switzer whitespace-pre inline-flex font-extrabold items-center justify-center p-0.5 overflow-hidden text-sm text-white rounded-lg bg-gradient-to-br from-[#C5BDBD] via-[#333333] to-[#666666]"
          onClick={handleBack}
          disabled={currentQuestionIndex === 0}
        >
          <span className="relative whitespace-pre uppercase px-3.5 py-2 sm:px-7 sm:py-3 transition-all ease-in duration-75 bg-black rounded-md">
            &lt; Back
          </span>
        </button>
        <div className="flex gap-x-3.5 justify-center">
          {quizData.map((_, index) =>
            index === currentQuestionIndex ? (
              <CustomBarActive key={index} />
            ) : (
              <CustomBarInactive key={index} />
            )
          )}
        </div>
        {/* display the next button for all questions except the last one */}
        {currentQuestionIndex !== quizData.length - 1 && (
          <button
            onClick={handleNext}
            className="custom-btn whitespace-pre uppercase font-switzer font-extrabold text-white"
          >
            Next &gt;
          </button>
        )}
        {
          //display the submit button only on the last question
          currentQuestionIndex === quizData.length - 1 && (
            <button
              onClick={() => {
                window.location.href = "/completion";
              }}
              className="custom-btn submit-btn whitespace-pre uppercase font-switzer font-extrabold text-white"
            >
              Submit 🌟
            </button>
          )
        }
      </div>
    </main>
  );
}
