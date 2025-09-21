/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, Variants } from "motion/react";
// import { slideUpVariant } from "../variants/slideUpVariant";
import { slideRightVariant } from "../variants/slideRIghtVariant";
import { Carousel } from "./ui/Carousel";

// const skills = [
//   { image: html, title: "Web Design & Development", tech: "HTML, CSS, JavaScript, TypeScript" },
//   { image: react, title: "Frontend Development", tech: "React, Jinja, Tailwind, MantineUI, DaisyUI" },
//   { image: nodejs, title: "Backend Development", tech: "NodeJs, ExpressJs, Flask, Prisma" },
//   { image: postgresql, title: "Database Management System", tech: "PostgreSQL, MySQL, MongoDB" },
//   { image: figma, title: "UI/UX Design Tools", tech: "Figma, Adobe XD" },
//   { image: docker, title: "Development Tools", tech: "Docker, Github, Git, Trello, VSCode" },
//   { image: arduino, title: "Embedded Systems", tech: "Arduino Uno, ESP32, ESP32 CAM" },
//   { image: python, title: "Other Languages", tech: "Python, PHP, C, C#" },
// ];

const Projects = () => {
  // Get all images from the folder using Vite's glob import
  const pugadModules = import.meta.glob("../assets/projects/pugad/*.png", { eager: true });
  const pugadImages = Object.values(pugadModules).map((module: any) => module.default);

  // Get all images from the folder using Vite's glob import
  const chedModules = import.meta.glob("../assets/projects/chedz/*.png", { eager: true });
  const chedImages = Object.values(chedModules).map((module: any) => module.default);

  // Get all images from the folder using Vite's glob import
  const drivesModules = import.meta.glob("../assets/projects/drives/*.png", { eager: true });
  const drivesImages = Object.values(drivesModules).map((module: any) => module.default);

  const myProjects = [
    {
      id: 1,
      title: "Pugad Maharlika: 2D Mobile Game",
      description:
        "Pugad Maharlika is a 2D fighting mobile game developed to teach the young generation about the history, culture, and martial arts of the Philippines. The players can learn about stories of the Philippine's national heroes in an entertaining and immersive way, while also engaging with Filipino culture and martial arts.",
      images: pugadImages,
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      id: 2,
      title: "Agent Training and Drive Management System",
      description:
        "This platform enables managers to efficiently monitor agent training and manage drives. It automates manual policy calculations and provides real-time status tracking for both new recruits and active campaigns.",
      images: drivesImages,
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      id: 3,
      title: "Inventory, Requisition, and Purchasing System",
      description:
        "This is a comprehensive enterprise resource planning system designed to streamline inventory management, requisition processes, and purchasing workflows. This system provides organizations with a centralized platform to efficiently manage their resources from initial request to final acquisition.",
      images: chedImages,
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
    },
  ];

  const variantDelay1: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };

  const variantDelay2: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const variantDelay3: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const variantslst = [variantDelay1, variantDelay2, variantDelay3];

  return (
    <section id="projects" className="flex h-auto  py-20 flex-col items-center justify-center ">
      <motion.div
        className="flex flex-col items-start w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        variants={slideRightVariant}
      >
        {/* <p className="text-md">Latest</p> */}
        <p className="text-4xl text-blue-500 pl-5 md:pl-15">Projects</p>
      </motion.div>
      <div className="flex flex-row flex-wrap gap-5 mt-10 items-center justify-center ">
        <div className={`flex w-full flex-wrap justify-center gap-5 px-5`}>
          {myProjects.map((project, index) => {
            return (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false }}
                variants={variantslst[index]}
                className="flex"
              >
                <Carousel project={project} autoPlay={false} autoPlayInterval={5000} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
