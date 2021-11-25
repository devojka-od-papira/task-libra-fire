import React from "react";
import Button from "../button";
import desk from "../../assets/Mask Group 9/Mask Group 9@2x.png";

const WideExperience = () => {
  return (
    <div className="wide-experience">
      <div className="wide-bg">
        <div className="wide-white-bg"></div>
        <div className="wide-blue-bg"></div>
      </div>
      <div className="container">
        <div>
          <img src={desk} alt="" />
        </div>
        <div className="wide-text">
          <h2 className="h2 color-white">Een ruime ervaring</h2>
          <p className="p2 color-white paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            morbi non arcu risus. Pellentesque diam volutpat commodo sed
            egestas.
          </p>
          <p className="p2 color-white paragraph">
            Consectetur lorem donec massa sapien faucibus et molestie. Neque
            convallis a cras semper auctor neque vitae tempus quam. Arcu
            bibendum at varius vel pharetra vel turpis nunc. Aliquam sem
          </p>
          <Button
            className="p1 bg-blue color-blue bg-white"
            text="Meer lezen"
          />
        </div>
      </div>
    </div>
  );
};
export default WideExperience;
