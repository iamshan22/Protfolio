"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

const layerVariants = (delay, skew, zIndex) => ({
  initial: {
    y: "-100%",
    skewY: skew,
    scale: 1.1,
  },
  animate: {
    y: "0%",
    skewY: 0,
    scale: 1,
    transition: {
      delay,
      duration: 0.9,
      ease: [0.63, 0, 0.17, 1],
    },
  },
  exit: {
    y: "-100%",
    skewY: skew,
    scale: 1.05,
    transition: {
      delay: 0,
      duration: 0.8,
      ease: [0.63, 0, 0.17, 1],
    },
  },
});

const layers = [
  { color: "from-[#1b162b] to-[#291c46]", delay: 0, skew: -6, z: 30 },
  { color: "from-[#241e56] to-[#3b2678]", delay: 0.2, skew: -4, z: 20 },
  { color: "from-[#2e2743] to-[#43305c]", delay: 0.4, skew: -2, z: 10 },
];

const Rectangle = () => {
  useEffect(() => {
    const audio = new Audio("/1.mp3");
    audio.volume = 0.5;
    audio.play().catch((err) => console.warn("Sound play failed:", err));
  }, []);

  return (
    <>
      {layers.map(({ color, delay, skew, z }, i) => (
        <motion.div
          key={i}
          variants={layerVariants(delay, skew, z)}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ zIndex: z }}
          className={`fixed top-full left-0 w-screen h-screen bg-gradient-to-br ${color} origin-top`}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

export default Rectangle;
