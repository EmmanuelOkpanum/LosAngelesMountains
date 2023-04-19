import React, { useEffect, useState } from "react";

import Header from "./Header";

import leftimg from "../Assets/Images/leftmountain.png";
import rightimg from "../Assets/Images/rightmountain.png";

const Firstsection = () => {
  const [marginTop, setMarginTop] = useState("0px");
  const [marginLeft, setMarginLeft] = useState("0px");
  const [marginRight, setMarginRight] = useState("0px");

  useEffect(() => {
    const handleScroll = () => {
      const text = document.querySelector(".para-text");
      const rightimage = document.querySelector(".rightimg");
      const leftimage = document.querySelector(".leftimg");

      if (text !== null && rightimage !== null && leftimage !== null) {
        setMarginTop(window.scrollY * 0.5 + "px");
        setMarginLeft(-window.scrollY + "px");
        setMarginRight(window.scrollY + "px");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="firstsection">
        <div className="parallax">
          <Header />

          <div className="parallax-details">
            <h2 className="para-text" style={{ marginTop: marginTop }}>
              LOS ANGELES
              <br />
              <span> MOUNTAINS </span>
            </h2>

            <img
              className="leftimg"
              src={leftimg}
              alt="leftmountain"
              style={{ marginLeft: marginLeft }}
            />
            <img
              className="rightimg"
              src={rightimg}
              alt="rightmountain"
              style={{ marginLeft: marginRight }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Firstsection;
