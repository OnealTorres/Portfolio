import { Variants } from "motion/react";

export const slideUpVariant: Variants = {
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
    },
  },
};
