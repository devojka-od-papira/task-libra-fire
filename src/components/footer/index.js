import React from "react";
import Button from "../button";
import logo from "../../assets/Asset 1/Asset 1@2x.png";
import footerOne from "../../assets/footer-one.png";
import footerTwo from "../../assets/footer-two.png";
import location from "../../assets/location-white.png";
import fb from "../../assets/fb.png";
import ln from "../../assets/ln.png";
import yt from "../../assets/yt.png";
import ig from "../../assets/ig.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="title">
          <img src={logo} alt="" />
        </div>
        <div className="content">
          <div className="products">
            <h5 className="h5 color-white">Assortiment</h5>
            <p className="p6">Dak</p>
            <p className="p6">Isolatie</p>
            <p className="p6">Plaat & folie</p>
            <p className="p6">Leiding</p>
            <p className="p6">Bekleding</p>
            <p className="p6">Tuin</p>
            <p className="p6">Diverse</p>
          </div>
          <div className="visit">
            <h5 className="h5 color-white">Bezoek ons</h5>
            <div className="visit-content">
              <div>
                <img src={location} alt="" />
              </div>
              <div className="visit-adress">
                <p className="p7">Deurne (Antwerpen)</p>
                <p className="p1">Oude Bosuilbaan 43, 2100 Deurne</p>
              </div>
            </div>
            <div className="visit-content">
              <div>
                <img src={location} alt="" />
              </div>
              <div className="visit-adress">
                <p className="p7">Lubbeek (Leuven)</p>
                <p className="p1">Staatsbaan 4E, 3210 Lubbeek</p>
              </div>
            </div>
            <div className="visit-content">
              <div>
                <img src={location} alt="" />
              </div>
              <div className="visit-adress">
                <p className="p7">Kontich</p>
                <p className="p1">
                  Prins Boudewijnlaan 17 - unit 1, 2550 Kontich
                </p>
              </div>
            </div>
            <div className="social-media">
              <h5 className="h5 color-white">Volg ons</h5>
              <div>
                <img src={fb} alt="" />
                <img src={ln} alt="" />
                <img src={yt} alt="" />
                <img src={ig} alt="" />
              </div>
            </div>
          </div>
          <div className="blue-block bg-blue">
            <h5 className="h5 color-white">Installateur</h5>
            <p className="p1 color-white">Graag installateur worden?</p>
            <img src={footerOne} alt="" />
            <Button className="bg-white color-blue " text="Meer informatie" />
          </div>
          <div className="blue-block bg-blue">
            <h5 className="h5 color-white">Werken bij?</h5>
            <p className="p1 color-white">Van Wauwe werft aan…</p>
            <img src={footerTwo} alt="" />
            <Button className="bg-white color-blue " text="Meer informatie" />
          </div>
        </div>
        <div className="underline"></div>
        <div className="trademarks">
          <div>
            <p className="p8">
              Copyright © 2021 Alle rechten voorbehouden. Van Wauwe - BE
              415.527.412
            </p>
          </div>
          <div>
            <ul>
              <li className="p8">Disclaimer</li>
              <li className="p8">Levervoorwaarden</li>
              <li className="p8">Algemene voorwaarden</li>
              <li className="p8">Clubvoorwaarden</li>
              <li className="p8">Vacatures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
