import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "C" },
  { skill: "C#" },
  { skill: "M" },
  { skill: "Assembly" },
  { skill: "Jenkins" },
  { skill: "CI/CD" },
  { skill: "JavaScript" },
  { skill: "PyCharm" },
  { skill: "ReactJS" },
  { skill: "AWS" },
  { skill: "Django" },
  { skill: "Docker" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Eric and I am an
              <span className="font-bold">{" aspiring"}</span> software engineer
              based in Atlanta, GA.
            </p>
            <br />
            <p>
              I am currently a senior at the Georgia Institute of Technology,
              pursuing a Bachelor of Science in Computer Science.
            </p>
            <br />
            <p>
              A wide range of hobbies and pastimes help me keep busy.
              From playing tennis and saxophone, to weightlifting and making YouTube videos,
              I always try to make time for new engaging learning experiences and problem-solving opportunities.🙂
            </p>
            <br />
            
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/globe.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
