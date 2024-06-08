"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
}
const WorkSliderBtn = ({ containerStyles, btnStyles } : WorkSliderBtnsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold  />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold  />
      </button>
    </div>
  );
};

export default WorkSliderBtn;
