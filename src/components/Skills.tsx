import { motion } from "motion/react";
import html from "../assets/html-5-svgrepo-com.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/nodejs-icon-svgrepo-com.svg";
import postgresql from "../assets/postgresql-logo-svgrepo-com.svg";
import figma from "../assets/figma-svgrepo-com.svg";
import docker from "../assets/docker-svgrepo-com.svg";
import python from "../assets/python-svgrepo-com.svg";
import arduino from "../assets/arduino-svgrepo-com.svg";

import { slideUpVariant } from "../variants/slideUpVariant";
import { slideRightVariant } from "../variants/slideRIghtVariant";

const skills = [
  { image: html, title: "Web Design & Development", tech: "HTML, CSS, JavaScript, TypeScript" },
  { image: react, title: "Frontend Development", tech: "React, Jinja, Tailwind, MantineUI, DaisyUI" },
  { image: nodejs, title: "Backend Development", tech: "NodeJs, ExpressJs, Flask, Prisma" },
  { image: postgresql, title: "Database Management System", tech: "PostgreSQL, MySQL, MongoDB" },
  { image: figma, title: "UI/UX Design Tools", tech: "Figma, Adobe XD" },
  { image: docker, title: "Development Tools", tech: "Docker, Github, Git, Trello, VSCode" },
  { image: arduino, title: "Embedded Systems", tech: "Arduino Uno, ESP32, ESP32 CAM" },
  { image: python, title: "Other Languages", tech: "Python, PHP, C, C#" },
];

const Skills = () => {
  return (
    <section id="about" className="flex h-dvh pt-20 flex-col items-center justify-center ">
      <motion.div
        className="flex flex-col items-start w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={slideRightVariant}
      >
        {/* <p className="text-md">Latest</p> */}
        <p className="text-4xl text-blue-500 pl-5 md:pl-15">Technical Skills</p>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={slideUpVariant}
        className="flex flex-row flex-wrap gap-5 mt-10 items-center justify-center "
      >
        {skills.map((skill) => {
          return (
            <div className="flex flex-row justify-start border-primary rounded-sm p-4 text-xs md:text-sm shadow-lg gap-4 w-[250px] md:w-[400px] transition-all ease-in-out hover:bg-blue-50 hover:scale-105 cursor-pointer">
              <img className="w-10 h-10" src={skill.image} alt="" />
              <div>
                <p className="font-bold hover:hidden">{skill.title}</p>
                <p>({skill.tech})</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
