import React, { useEffect, useState } from "react";
import Button from "../button";
import store from "../../assets/Icon feather-shopping-cart.svg";
import leftCircleArrow from "../../assets/Group 34.svg";
import rightCircleArrow from "../../assets/Group 35.svg";
import window from "../../assets/window.png";
import logoTransprent from "../../assets/logo-transparent.png";
import rightBlueArrow from "../../assets/right-blue-arrow.svg";
import rightWhiteArrow from "../../assets/right-white-arrow.svg";
import box from "../../assets/Group 76.svg";
import cloud from "../../assets/testimonial.svg";
import update from "../../assets/loop-arrow.svg";
import customer from "../../assets/customer-support.svg";
import logoIcon from "../../assets/Group 1156.svg";

const Intro = () => {
  const [activSlide, setActiveSlide] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderElements = [
    {
      title: "Dé specialist...",
      subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgTitle: "Dak",
      imgSubTitle: "Lichtkoepels",
      imgDescription: `De renovatie van bestaande koepels of het plaatsen van een
      nieuwe koepel ? Een traditionele…`,
      clickHere: "Klik hier voor meer informatie",
      imgSrc: window,
    },
    {
      title: "Dé specialist...1",
      subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgTitle: "Dak",
      imgSubTitle: "Lichtkoepels",
      imgDescription: `De renovatie van bestaande koepels of het plaatsen van een
      nieuwe koepel ? Een traditionele…`,
      clickHere: "Klik hier voor meer informatie",
      imgSrc: window,
    },
    {
      title: "Dé specialist...2",
      subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgTitle: "Dak",
      imgSubTitle: "Lichtkoepels",
      imgDescription: `De renovatie van bestaande koepels of het plaatsen van een
      nieuwe koepel ? Een traditionele…`,
      clickHere: "Klik hier voor meer informatie",
      imgSrc: window,
    },
  ];

  const handleLeft = () => {
    if (activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
      setActiveSlide(sliderElements[activeIndex - 1]);
    } else {
      setActiveIndex(2);
      setActiveSlide(sliderElements[2]);
    }
  };
  const handleRight = () => {
    if (activeIndex !== 2) {
      setActiveIndex(activeIndex + 1);
      setActiveSlide(sliderElements[activeIndex + 1]);
    } else {
      setActiveIndex(0);
      setActiveSlide(sliderElements[0]);
    }
  };
  useEffect(() => {
    setActiveSlide(sliderElements[activeIndex]);
  }, []);

  return (
    <div className="intro-background">
      <div className="intro-opacity">
        <div className="container">
          {activSlide && (
            <div className="slider">
              <div className="slider-block left">
                <div className="info">
                  <h1 className="h1">{activSlide.title}</h1>
                  <p className="p2">{activSlide.subTitle}</p>
                  <Button className="bg-blue" icon={store} text="Winkel" />
                  <div className="directions">
                    <Button
                      onClick={handleLeft}
                      className="bg-transparent"
                      icon={leftCircleArrow}
                    />
                    <Button
                      onClick={handleRight}
                      className="bg-transparent"
                      icon={rightCircleArrow}
                    />
                  </div>
                </div>
              </div>
              <div className="slider-block right">
                <div className="logo-transprent">
                  <img src={logoTransprent} alt="" />
                </div>
                <div className="right-block-info">
                  <div>
                    <img src={window} alt="" />
                  </div>
                  <div className="right-info">
                    <h3 className="h3 color-blue">{activSlide.imgTitle}</h3>
                    <h3 className="h3 color-black">{activSlide.imgSubTitle}</h3>
                    <p className="p2 color-gray">{activSlide.imgDescription}</p>
                    <p className="p1 color-blue">
                      {activSlide.clickHere}
                      <img
                        className="right-arrow"
                        src={rightBlueArrow}
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="servicess bg-blue">
            <ul>
              <li>
                <div className="circle">
                  <img src={box} alt="" />
                </div>
                <h3 className="h3 color-white">
                  Assortiment{" "}
                  <img className="right-arrow" src={rightWhiteArrow} alt="" />
                </h3>
              </li>
              <li>
                <div className="circle">
                  <img src={cloud} alt="" />
                </div>
                <h3 className="h3 color-white">
                  Getuigenissen{" "}
                  <img className="right-arrow" src={rightWhiteArrow} alt="" />
                </h3>
              </li>
              <li>
                <div className="circle">
                  <img src={update} alt="" />
                </div>
                <h3 className="h3 color-white">
                  Up-To-Date{" "}
                  <img className="right-arrow" src={rightWhiteArrow} alt="" />
                </h3>
              </li>
              <li>
                <div className="circle">
                  <img src={customer} alt="" />
                </div>
                <h3 className="h3 color-white">
                  Services{" "}
                  <img className="right-arrow" src={rightWhiteArrow} alt="" />
                </h3>
              </li>
              <li>
                <div className="circle">
                  <img src={logoIcon} alt="" />
                </div>
                <h3 className="h3 color-white">
                  Wie zijn wij{" "}
                  <img className="right-arrow" src={rightWhiteArrow} alt="" />
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
