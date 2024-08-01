"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { motion } from "framer-motion";
interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
}
const WorkSliderBtn = ({ containerStyles, btnStyles }: WorkSliderBtnsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <motion.button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <PiCaretLeftBold />
      </motion.button>
      <motion.button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <PiCaretRightBold />
      </motion.button>
    </div>
  );
};

export default WorkSliderBtn;
