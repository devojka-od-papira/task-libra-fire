import React from "react";
import rightBlueArrow from "../../assets/right-blue-arrow.svg";
import desks from "../../assets/Mask Group 5/Mask Group 5@2x.png";
import person from "../../assets/persons/person@2x.png";
import river from "../../assets/rivers/river@2x.png";
import Button from "../button";
import circleLeftArrow from "../../assets/Group 14/Group 14@2x.png";
import circleRightArrow from "../../assets/Group 15/Group 15@2x.png";
import vericalLogo from "../../assets/Asset 1/Asset 1.png";
import jumboLogo from "../../assets/Group 84/Group 84@2x.png";

const SatisfiedCustomers = () => {
  const customers = [
    {
      imgSrc: desks,
      verticalLogo: vericalLogo,
      title: "Robby Stordeur - Toyota Motor Europe",
      description: `“Toyota kiest milieubewust voor banken uit recycling materiaal.
      Wij zijn zeer tevreden van...`,
      button: "Klik hier voor meer informatie ",
      iconSrc: rightBlueArrow,
    },
    {
      imgSrc: person,
      verticalLogo: vericalLogo,
      title: "Steve Drechsel zaakvoerder van SD Dakwerken",
      description: `“In een van mijn gesprekken met Chris Leurs, de projectverantwoordelijke Dak & Gevel bij Van Wauwe…`,
      button: "Klik hier voor meer informatie ",
      iconSrc: rightBlueArrow,
    },
    {
      imgSrc: river,
      verticalLogo: vericalLogo,
      title: "Bob Lauman - zaakvoerder Dakrubbercentrale",
      description: `Snelheid, wendbaarheid en de beste marktprijzen, dat zijn naar mijn aanvoelen de belangrijkste troeven van Van Wauwe…`,
      button: "Klik hier voor meer informatie ",
      iconSrc: rightBlueArrow,
    },
  ];
  return (
    <div className="satisfied-bg-image">
      <div className="satisfied-opacity"></div>
      <div className="container">
        <img className="jumbo-logo" src={jumboLogo} alt="" />
        <div className="cards-wrapper">
          <div className="title">
            <h2 className="h2 color-white">Tevreden klanten vertellen</h2>
          </div>
          <div className="cards">
            {customers.map((customer, index) => {
              if (index === 1) {
                return (
                  <div className="card bg-white">
                    <img src={customer.imgSrc} alt="" />
                    <img
                      className="vertical-logo"
                      src={customer.verticalLogo}
                      alt=""
                    />
                    <div className="card-bg-text">
                      <div className="satisfied-direction">
                        <Button icon={circleLeftArrow} />
                        <Button icon={circleRightArrow} />
                      </div>
                      <h3 className="h3">{customer.title}</h3>
                      <p className="p2 color-gray">{customer.description}</p>
                      <p className="p1 color-blue">
                        {customer.button} <img src={customer.iconSrc} alt="" />
                      </p>
                    </div>
                  </div>
                );
              }
              console.log("customer", customer);
              return (
                <div className="card bg-white">
                  <img src={customer.imgSrc} alt="" />
                  <img
                    className="vertical-logo"
                    src={customer.verticalLogo}
                    alt=""
                  />
                  <div className="card-bg-text">
                    <h3 className="h3">{customer.title}</h3>
                    <p className="p2 color-gray">{customer.description}</p>
                    <p className="p1 color-blue">
                      {customer.button} <img src={customer.iconSrc} alt="" />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="satisfied-button">
            <Button
              className="bg-blue color-white "
              text="Getuigenissen klanten"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedCustomers;
