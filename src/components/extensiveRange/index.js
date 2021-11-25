import React from "react";
import Button from "../button";

const ExtensiveRange = () => {
  return (
    <div className="container">
      <div className="extensive-range">
        <div>
          <h2 className="h2">Een uitgebreid gamma</h2>
        </div>
        <div>
          <p className="p2 color-gray paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            morbi non arcu risus. Pellentesque diam volutpat commodo sed
            egestas.
          </p>
          <p className="p2 color-gray paragraph">
            Consectetur lorem donec massa sapien faucibus et molestie. Neque
            convallis a cras semper auctor neque vitae tempus quam. Arcu
            bibendum at varius vel pharetra vel turpis nunc. Aliquam sem et
            tortor consequat.
          </p>
          <Button className="p1 bg-blue color-white" text="Meer lezen" />
        </div>
      </div>
    </div>
  );
};
export default ExtensiveRange;
