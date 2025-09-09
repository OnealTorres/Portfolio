import { motion, Variants } from "motion/react";

const cardVariants: Variants = {
  offscreen: {
    x: -200,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={cardVariants}
      className="flex h-dvh pt-20 flex-col mx-20"
    >
      <div className="w-auto absolute left-0 flex flex-row bg-lightblue py-2 px-4 text-white rounded-br-2xl rounded-tr-2xl">
        <div className="flex w-full"></div>
        <div className="flex flex-col items-center w-fit">
          <p className="text-md">Discover My</p>
          <p className="text-4xl ">Projects</p>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-center"></div>
      </div>
    </motion.section>
  );
};

export default Projects;
