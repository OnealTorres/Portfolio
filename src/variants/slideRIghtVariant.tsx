import { Variants } from "motion/react";

export const slideRightVariant: Variants = {
  offscreen: {
    x: -100,
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
