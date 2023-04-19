import React, { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";

import logo from "../Assets/Images/mountlogo.png";
import Carousel from "./Carousel";

const Secondsection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="section-header">
        <div className="logo-title" data-aos="fade-up">
          <img src={logo} alt="logo" />
          <h5>
            LOSANGELES
            <br />
            <span>MOUNTAINS</span>
          </h5>
        </div>

        <div className="links">
          <ul>
            <li>
              {" "}
              <a href="#history"> 01. HISTORY </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#team"> 02. TEAM </a>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="historycontainer">
        <div className="historydetails" data-aos="fade-up">
          <h1 id="history">
            01
            <div className="side" data-aos="fade-left" data-aos-delay="500">
              <h5 data-aos="fade-right"> HISTORY </h5>
              <div className="box"> </div>
            </div>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
      </div>

      <div className="carosel">
        <div className="caro-images" data-aos="fade-up">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Secondsection;
