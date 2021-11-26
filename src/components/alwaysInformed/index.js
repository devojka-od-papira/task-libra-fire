import React from "react";
import Button from "../button";
import image3 from "../../assets/image3.png";

const AlwaysInformed = () => {
  return (
    <div className="container">
      <div className="always-wrapper">
        <div className="always-text">
          <h2 className="h2">Steeds op de hoogte...</h2>
          <p className="p2 color-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            morbi non arcu risus. Pellentesque diam volutpat commodo sed
            egestas.
          </p>
          <p className="p2 color-gray">
            Consectetur lorem donec massa sapien faucibus et molestie. Neque
            convallis a cras semper auctor neque vitae tempus quam. Arcu
            bibendum at varius vel pharetra vel turpis nunc. Aliquam sem
          </p>
          <div>
            <Button
              className="color-white bg-blue alweys-button"
              text="Meer lezen"
            />
          </div>
        </div>
        <div className="always-image-wrapper">
          <img className="always-image" src={image3} alt="" />
        </div>
      </div>
    </div>
  );
};
export default AlwaysInformed;
