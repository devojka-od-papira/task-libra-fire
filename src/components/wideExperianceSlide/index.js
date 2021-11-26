import React, { useState, useEffect } from "react";
import oneImg from "../../assets/Mask Group 11/Mask Group 11@2x.png";
import secondImg from "../../assets/Mask Group 10/Mask Group 10@2x.png";
import thirdImg from "../../assets/Mask Group 12/Mask Group 12@2x.png";
import leftCircleArrow from "../../assets/Group 34.svg";
import rightCircleArrow from "../../assets/Group 35.svg";
import Button from "../button";

const WideSlide = () => {
  const [activeImages, setActiveImages] = useState(null);
  const [activeInedxImg, setActiveIndexImg] = useState(0);

  const images = [
    {
      imgSrc: oneImg,
      className: "one-item 1",
    },
    {
      imgSrc: secondImg,
      className: "second-item 2",
    },
    {
      imgSrc: thirdImg,
      className: "third-item 3",
    },
    {
      imgSrc: oneImg,
      className: "one-item 1",
    },
    {
      imgSrc: secondImg,
      className: "second-item 2",
    },
    {
      imgSrc: thirdImg,
      className: "third-item 3",
    },
  ];

  const handleClickLeft = () => {
    console.log("left");
  };
  const handleClickRight = () => {
    // if (activeInedxImg !== 5) {
    //   setActiveIndexImg(activeInedxImg + 1);
    //   setActiveImages(images[activeInedxImg + 1]);
    // } else {
    //   setActiveImages(0);
    //   setActiveIndexImg(images[0]);
    // }

    if (activeInedxImg !== 2) {
      setActiveIndexImg(activeInedxImg + 1);
      setActiveImages([
        images[activeInedxImg + 1],
        images[activeInedxImg + 2],
        images[activeInedxImg + 3],
      ]);
    }
  };

  useEffect(() => {
    setActiveImages([images[0], images[1], images[2]]);
  }, []);

  console.log(activeImages);
  console.log(activeInedxImg);
  return (
    <div className="wide-slide">
      <div className="wide-slide-bg">
        <div className="slide-white-bg"></div>
        <div className="slide-blue-bg"></div>
      </div>
      <div className="slider-wrapper">
        <div className="slider">
          {activeImages
            ? activeImages.map((img) => {
                return (
                  <div className={img.className}>
                    <img src={img.imgSrc} alt="" />
                  </div>
                );
              })
            : null}
        </div>
        <div className="directions">
          <Button
            onClick={handleClickLeft}
            className="bg-transparent"
            icon={leftCircleArrow}
          />
          <Button
            onClick={handleClickRight}
            className="bg-transparent"
            icon={rightCircleArrow}
          />
        </div>
      </div>
    </div>
  );
};
export default WideSlide;
