"use client" // Indicates this is a client-side component

import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/EricLiao_headshotSQR.jpg"
            alt="Eric Liao Headshot"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hello, I&#39;m Eric</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m an aspiring{" "} 
            <span className="font-semibold text-teal-600">Software Engineer</span>
            {" "}based in Atlanta, GA. Always feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="flex md:justify-start">
              <Link
                to="projects"
                className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href="mailto:ericliao@gatech.edu"
                className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
