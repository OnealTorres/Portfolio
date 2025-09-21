import amerikanaPiatos from "../assets/amerikana_attire_cropped_piatos.png";
import { motion, Variants } from "motion/react";
import { slideUpVariant } from "../variants/slideUpVariant";
import { slideRightVariant } from "../variants/slideRIghtVariant";

function About() {
  const slideUpVariant1: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.7,
      },
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.8,
      },
    },
  };

  const slideUpVariant2: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.7,
      },
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 1,
      },
    },
  };

  const slideUpVariant3: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.7,
      },
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 1.2,
      },
    },
  };

  return (
    <section id="about" className="flex h-auto md:h-dvh pt-20 flex-col items-center justify-center ">
      <motion.div
        className="flex flex-col items-center w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        variants={slideRightVariant}
      >
        <p className="text-md">Get To Know More</p>
        <p className="text-4xl text-blue-500">About Me</p>
      </motion.div>
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false }} variants={slideUpVariant}>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="relative mx-auto md:mx-0 w-[290px] h-[290px]">
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img src={amerikanaPiatos} alt="Overlay" className="w-full h-full object-contain" />
            </div>
            <svg
              width="290px"
              height="290px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0"
              transform="rotate(90)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M20.9485 11.0195C21.2909 11.6283 21.2909 12.3717 20.9485 12.9805L17.5735 18.9805C17.2192 19.6103 16.5529 20 15.8303 20H8.16969C7.44715 20 6.78078 19.6103 6.42654 18.9805L3.05154 12.9805C2.70908 12.3717 2.70908 11.6283 3.05154 11.0195L6.42654 5.01948C6.78078 4.38972 7.44715 4 8.16969 4H15.8303C16.5529 4 17.2192 4.38972 17.5735 5.01948L20.9485 11.0195Z"
                  stroke="#1e90ff"
                  stroke-width="0.6800000000000001"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          <div className="my-auto">
            <div className="w-fit max-w-lg mx-2 h-fit p-5 bg-white rounded-lg text-black">
              A detail-oriented and performance-driven aspiring Fullstack Developer, proficient in JavaScript,
              TypeScript, and modern frameworks like Express.js and React. I specialize in building scalable, full-stack
              applications with robust database design and secure API integration, leveraging agile methodologies to
              deliver reliable and efficient solutions.
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex w-full flex-row gap-10 items-center mt-3 justify-center flex-wrap">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false }}
          variants={slideUpVariant1}
          className="flex flex-col bg-white rounded-lg shadow-lg w-[350px] p-7 gap-1"
        >
          <div className="flex flex-row gap-2 font-bold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-landmark-icon lucide-landmark text-primary"
            >
              <path d="M10 18v-7" />
              <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
              <path d="M14 18v-7" />
              <path d="M18 18v-7" />
              <path d="M3 22h18" />
              <path d="M6 18v-7" />
            </svg>
            <div className="font-bold">CTU- Main Campus</div>
          </div>
          <div className="text-sm font-light">Bachelor of Science in Information Technology</div>
          <div className="text-sm font-light">2021 - 2025</div>
          <div className="text-sm text-primary font-light">Cum Laude</div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false }}
          variants={slideUpVariant2}
          className="flex flex-col bg-white rounded-lg shadow-lg w-[350px] p-7 gap-1"
        >
          <div className="flex flex-row gap-2 font-bold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-landmark-icon lucide-landmark text-primary"
            >
              <path d="M10 18v-7" />
              <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
              <path d="M14 18v-7" />
              <path d="M18 18v-7" />
              <path d="M3 22h18" />
              <path d="M6 18v-7" />
            </svg>
            <div className="font-bold">ACLC College of Mandaue</div>
          </div>
          <div className="text-sm font-light">TVL - ICT</div>
          <div className="text-sm font-light">2018 - 2020</div>
          <div className="text-sm text-primary font-light">High Honors</div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false }}
          variants={slideUpVariant3}
          className="flex flex-col bg-white rounded-lg shadow-lg max-w-[350px] p-7 gap-1"
        >
          <div className="flex flex-row gap-2 font-bold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-landmark-icon lucide-landmark text-primary"
            >
              <path d="M10 18v-7" />
              <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
              <path d="M14 18v-7" />
              <path d="M18 18v-7" />
              <path d="M3 22h18" />
              <path d="M6 18v-7" />
            </svg>
            <div className="font-bold">Tipolo National High School</div>
          </div>
          <div className="text-sm font-light">Bachelor of Science in Information Technology</div>
          <div className="text-sm font-light">2014 - 2018</div>
          <div className="text-sm text-primary font-light"> &nbsp; </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
