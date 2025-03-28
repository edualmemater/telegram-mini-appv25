"use client";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="md:w-1/2 bg-[linear-gradient(154.83deg,#EA382B_1.33%,#722554_64.73%,#311C60_97.82%)] flex flex-col justify-center items-center px-20">
        <Image
          src="/assets/landing/spring-landing.png"
          alt="Hero Image"
          width={125}
          height={125}
          className="absolute top-0 left-0"
        />
        <h1 className="text-[80px] leading-tight text-white font-dharma font-extrabold">
          READY TO UNCOVER YOUR DIGITAL PERSONALITY IN THE WORLD OF WEB3.0?
        </h1>
        <div className="flex items-center justify-center gap-x-3 mt-10">
          <button
            onClick={() => {
              window.location.href = "/quiz";
            }}
            className="flex font-switzer uppercase items-center gap-x-3 font-extrabold text-lg custom-btn text-white py-3.5 px-8 rounded-[10px] "
          >
            Let&apos;s Begin
            <span>🚀</span>
          </button>
        </div>
        <Image
          src="/assets/landing/tube-landing.png"
          alt="Hero Image"
          width={200}
          height={200}
          className="absolute bottom-0 left-0"
        />
      </div>
      <div className="md:w-1/2 bg-[radial-gradient(circle,#6a4a3a_0%,#3c141d_50%,#0b1227_100%)]">
        <div className="flex relative items-center justify-center gap-x-3 mt-48">
          <Image
            src="/assets/landing/hero-rhs-glow.png"
            alt="Hero Image"
            width={420}
            height={420}
            className="absolute top-0 right-0"
          />
          <Image
            src="/assets/landing/top-left-person-1.png"
            alt="Hero Image"
            width={150}
            height={150}
            className="absolute top-0 left-36"
          />
          <Image
            src="/assets/landing/top-left-person-2.png"
            alt="Hero Image"
            width={90}
            height={90}
            className="absolute top-36 left-28"
          />
          <Image
            src="/assets/landing/bottom-left-person-1.png"
            alt="Hero Image"
            width={100}
            height={100}
            className="absolute top-56 left-48 z-50"
          />
          <Image
            src="/assets/landing/bottom-left-person-2.png"
            alt="Hero Image"
            width={80}
            height={80}
            className="absolute top-80 left-64"
          />
          <Image
            src="/assets/landing/bottom-person-1.png"
            alt="Hero Image"
            width={110}
            height={110}
            className="absolute top-80 left-[330px]"
          />
          <Image
            src="/assets/landing/center-person-1.png"
            alt="Hero Image"
            width={180}
            height={180}
            className="absolute top-20 left-[275px]"
          />
          <Image
            src="/assets/landing/bottom-right-person-1.png"
            alt="Hero Image"
            width={105}
            height={105}
            className="absolute top-60 right-[217.5px]"
          />
          <Image
            src="/assets/landing/top-right-person-1.png"
            alt="Hero Image"
            width={130}
            height={130}
            className="absolute top-0 right-52"
          />
          <Image
            src="/assets/landing/top-right-person-2.png"
            alt="Hero Image"
            width={100}
            height={100}
            className="absolute top-20 right-36"
          />
          <Image
            src="/assets/landing/sphere-landing.png"
            alt="Hero Image"
            width={420}
            height={420}
          />
        </div>
        <Image
          src="/assets/landing/tube-landing-2.png"
          alt="Hero Image"
          width={220}
          height={220}
          className="absolute top-0 right-0"
        />
        <Image
          src="/assets/landing/tube-landing-3.png"
          alt="Hero Image"
          width={185}
          height={185}
          className="absolute bottom-0 right-0"
        />
      </div>
    </main>
  );
}
