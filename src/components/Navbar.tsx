import { useEffect, useState } from "react";
// import { motion, Variants } from "motion/react";

export default function Navbar() {
  const [selected, setSelected] = useState("About");

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const navAnimationVariant: Variants = {
  //   offscreen: {
  //     radius: 200,
  //     x: -200,
  //     opacity: 0,
  //     transition: {
  //       duration: 1,
  //     },
  //   },
  //   onscreen: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //     },
  //   },
  // };

  return (
    <nav
      className={`${
        isAtTop ? "min-w-dvw" : "rounded-lg min-w-[calc(100dvw-20px)] m-[10px]"
      } flex flex-wrap items-center justify-between py-4 px-6 z-20 h-[4rem] fixed backdrop-blur-3xl shadow-lg transition-all duration-300 ease-in-out`}
    >
      <a
        onClick={() => {
          setSelected("About");
        }}
        href="#about"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span className="self-center text-lg font-semibold flex flex-row">
          onealtorres <p className="animated_underscore">_</p>
        </span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
          <li>
            <a
              onClick={() => {
                setSelected("About");
              }}
              href="#about"
              className={`block py-2 px-3 rounded-sm md:p-0  ${selected == "About" ? "text-blue-700" : "text-black"}`}
              aria-current="page"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setSelected("Skills");
              }}
              href="#skills
                "
              className={`block py-2 px-3 rounded-sm md:p-0  ${selected == "Skills" ? "text-blue-700" : "text-black"}`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setSelected("Projects");
              }}
              href="#Projects
                "
              className={`block py-2 px-3 rounded-sm md:p-0  ${
                selected == "Projects" ? "text-blue-700" : "text-black"
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setSelected("Connect");
              }}
              href="#connect
                  "
              className={`block py-2 px-3 rounded-sm md:p-0  ${selected == "Connect" ? "text-blue-700" : "text-black"}`}
            >
              Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
