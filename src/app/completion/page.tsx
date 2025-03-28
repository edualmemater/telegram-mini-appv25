import CompletionCard from "@/components/CompletionCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-y-hidden relative">
      <h1 className="text-white flex items-center gap-x-1.5 md:gap-x-5 justify-center text-center py-7 md:text-6xl text-3xl sm:text-4xl font-dharma">
        <Image
          src="/assets/completion-screen/completed-photo-heading.png"
          alt="Hero Image"
          width={60}
          height={60}
          className="-mt-4"
        />
        YOUR WEB 3.0 PERSONA UNVEILED
      </h1>
      <p className="text-white/80 mx-10 lg:mx-96 text-center text-lg font-switzer">
        Congratulations on completing the personality assessment! Now, let's
        take a closer look at your digital persona and uncover the insights
        revealed by your responses.
      </p>
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
        width={300}
        height={310}
      />
      <div className="flex items-center justify-center gap-x-3 mt-10 md:mt-20 sm:mx-44 mx-10 pb-6">
        <CompletionCard />
      </div>
    </main>
  );
}
