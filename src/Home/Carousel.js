// import React, { useState } from 'react';
// import './Carousel.css';

// import image1 from "../Assets/Images/manonhill.png";
// import image2 from "../Assets/Images/hill.png";

// const images = [
//   image1,
//   image2,
//   image2,
//   image2,
//   image2,
//   image2,
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const prevIndex = (currentIndex + images.length - 1) % images.length;
//   const nextIndex = (currentIndex + 1) % images.length;

//   return (
//     <div className="carousel-container">
//       <div className="carousel-item">
//         <img src={images[prevIndex]} alt="Previous" />
//       </div>
//       <div className="carousel-item">
//         <img src={images[currentIndex]} alt="Current" />
//       </div>
//       <div className="carousel-item">
//         <img src={images[nextIndex]} alt="Next" />
//       </div>
//       <button className="prev-button" onClick={() => setCurrentIndex(prevIndex)}>
//         &lt;
//       </button>
//       <button className="next-button" onClick={() => setCurrentIndex(nextIndex)}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default Carousel;


import React, { useState } from 'react';
import './Carousel.css';

import image1 from "../Assets/Images/manonhill.png";
import image2 from "../Assets/Images/hill.png";

const images = [
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = (currentIndex + images.length - 1) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;
  

  return (
    <div className="carousel-container">
      <div className="carousel-item">
        <img src={images[prevIndex]} alt="Previous" />
      </div>
      <div className="carousel-item">
        <img src={images[currentIndex]} alt="Current" />
      </div>
      <div className="carousel-item">
        <img src={images[nextIndex]} alt="Next" />
      </div>
      <button className="prev-button" onClick={() => setCurrentIndex(prevIndex)}>
        &lt;
      </button>
      <button className="next-button" onClick={() => setCurrentIndex(nextIndex)}>
        &gt;
      </button>
      <div className="counter-container">
        <button className="counter-button">
          {currentIndex + 1} / {images.length}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
