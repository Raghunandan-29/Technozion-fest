

import { Scroll } from "@react-three/drei";
import { useEffect, useState } from "react";
import tz from "./Models/tz.jpeg"
import collegeLogo from "./Models/collogeLogo.jpeg"

export const Main_section_overlay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSecondVisible, setSecondVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      //console.log(scrollY);

      // Adjust this value based on when you want the div to appear
      if (scrollY >= 220 && scrollY <=250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      if(scrollY>=400 && scrollY<=460) {
        setSecondVisible(true);
      }else{
        setSecondVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Scroll html>
      <div className="Main-section-logo">
        <div className="clg-logo"> <img className="f-CLogo" src={collegeLogo} alt="" /></div>
        <div className="fest-logo"> <img className="f-CLogo" src={tz} alt="" /></div>
      </div>
      <div className={`first-text ${isVisible ? "visible" : ""}`}>
        <h1 className="first-text-heading">Jan 19th-21th</h1>
      </div>
      <div className={`second-text ${isSecondVisible ? "visible" : ""}`}>
        <h1 className="second-text-heading">INGENIOUS</h1>
      </div>
    </Scroll>
  );
};
