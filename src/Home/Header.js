import React from "react";

import logo from "../Assets/Images/mountlogo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
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
    </>
  );
};

export default Header;
