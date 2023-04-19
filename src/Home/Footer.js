import React from "react";

import logo from "../Assets/Images/footermountlogo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo-title">
          <img src={logo} alt="logo" />
          <h5>
            LOSANGELES
            <br />
            <span>MOUNTAINS</span>
          </h5>
        </div>

        <div className="links">
          <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
