import amerikanaPiatos from "../assets/amerikana_attire_cropped_piatos.jpg";
import { motion, Variants } from "motion/react";

const cardVariants: Variants = {
  offscreen: {
    y: 200,
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
    },
  },
};

function About() {
  return (
    <section id="about" className="flex h-dvh pt-20 flex-col ">
      <div className="flex flex-col items-center w-full">
        <p className="text-md">Get To Know More</p>
        <p className="text-4xl text-blue-500">About Me</p>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <div className="flex flex-row justify-center">
          <div className="relative w-[290px] h-[290px]">
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
            <div className="w-lg h-fit p-5 bg-white rounded-2xl text-black">
              A detail-oriented and performance-driven Fullstack Developer, proficient in
              JavaScript, TypeScript, and modern frameworks like Express.js and React. I specialize
              in building scalable, full-stack applications with robust database design and secure
              API integration, leveraging agile methodologies to deliver reliable and efficient
              solutions.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
