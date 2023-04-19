import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Thirdsection = () => {
  const [activeTab, setActiveTab] = useState("mountain1");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="third-header">
        <div className="historydetails" data-aos="fade-down">
          <h1 id="team">
            02
            <div className="side">
              <h5> CLIMB </h5>
              <div className="box"> </div>
            </div>
          </h1>

          <p>
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
      </div>

      <div className="tabs">
        <div className="tab-buttons" data-aos="fade-down">
          <button
            className={`tab-btn ${activeTab === "mountain1" ? "active" : ""}`}
            onClick={() => handleTabClick("mountain1")}
          >
            MOUNTAIN 1
          </button>
          <button
            className={`tab-btn ${activeTab === "mountain2" ? "active" : ""}`}
            onClick={() => handleTabClick("mountain2")}
          >
            MOUNTAIN 2
          </button>
        </div>

        <div className="tab-content">
          <div
            id="firstmount"
            className={`tab-panel ${activeTab === "mountain1" ? "active" : ""}`}
          >
            <div
              className="schedulebox"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="content">
                <h3>SCHEDULE</h3>

                <div className="schedule-list">
                  <ul>
                    <li> 25 Nov 2016 </li>
                    <li> 28 Nov 2016 </li>
                    <br />
                    <li> 18 Dec 2016 </li>
                    <br />
                    <li> 7 Jan 2017 </li>
                  </ul>

                  <ul>
                    <li> Vestibulum viverra </li>
                    <li> Vestibulum viverra </li>
                    <br />
                    <li> Vestibulum viverra </li>
                    <br />
                    <li> Vestibulum viverra </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            id="secondmount"
            className={`tab-panel ${activeTab === "mountain2" ? "active" : ""}`}
          >
            <div className="schedulebox">
              <div className="content">
                <h3>SCHEDULE</h3>

                <div className="schedule-list">
                  <ul>
                    <li> 17 Dec 2016 </li>
                    <br />
                    <li> 13 Dec 2016 </li>
                    <li> 28 Dec 2016 </li>
                    <br />
                    <li> 9 Feb 2017 </li>
                  </ul>

                  <ul>
                    <li> Vestibulum viverra </li>
                    <br />
                    <li> Vestibulum viverra </li>
                    <li> Vestibulum viverra </li>
                    <br />
                    <li> Vestibulum viverra </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdsection;
