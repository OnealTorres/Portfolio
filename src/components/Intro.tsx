import { Github, Linkedin } from "lucide-react";
import Code from "./ui/Code";
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";

function Intro() {
  return (
    <section className="flex mx-5 md:mx-20 p-4 min-h-[calc(100dvh-64px)] justify-between pt-40 overflow-x-hidden">
      <div className="flex flex-col gap-5">
        <p className="text-5xl">
          <SplitText
            text="Hi, I'm Oneal,"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => {}}
          />
        </p>
        <p className="text-5xl text-blue-500">Full Stack Web Developer</p>
        <div className="flex">
          <p className="max-w-md flex-2">
            I'm passionate about crafting challenging projects and exploring new technologies and skills.
          </p>
          <p className="flex-1"></p>
        </div>
        <div className="flex gap-2">
          <Github />
          <Linkedin />
        </div>
        <div className="w-[100px] mt-auto">
          <svg
            className="arrow-svg"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 50 90"
          >
            <path
              className="st0 draw-arrow"
              d="M5.3,8
       c0.3,7.6,2.5,15.1,5.8,22
       C18.8,44,30.1,55.8,43.8,63.1"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className="tail-2"
              d="M43.8,63.1 L37,43"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="tail-2"
              d="M43.8,63.1 L20,66"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <AnimatedContent
          distance={200}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="sine.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <Code />
        </AnimatedContent>
      </div>
    </section>
  );
}

export default Intro;
