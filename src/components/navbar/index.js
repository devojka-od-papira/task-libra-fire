import React from "react";
import logo from "./../../assets/logo/logo.png";
import searach from "./../../assets/icon feather-search/Icon feather-search.png";
import store from "./../../assets/icon feather-shopping-cart/Icon feather-shopping-cart.png";
import group from "./../../assets/group 934/Group 934.png";
import downArrow from "./../../assets/icon awesome-angle-down/Icon awesome-angle-down.png";
import hamburger from "./../../assets/icon ionic-ios-menu/Icon ionic-ios-menu.png";

const NavigationMenu = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="main-nav">
          <li className="p3">
            <a href="#assortiment">Assortiment</a>
          </li>
          <li className="p3">
            <a href="#vestigingen">Vestigingen</a>
          </li>
          <li className="p3">
            <a href="#installateursnetwerk">Installateursnetwerk</a>
          </li>
        </ul>
        <ul className="icon-nav">
          <li>
            <img src={searach} alt="" />
          </li>
          <li>
            <img src={store} alt="" />
          </li>
          <li className="profile">
            <img src={group} alt="" />
          </li>
          <li className="down-arrow">
            <img src={downArrow} alt="" />
          </li>
          <li>
            <img src={hamburger} alt="" />
          </li>
        </ul>
        <div className="make-appointment p3">
          <a href="#">Maak een afspraak</a>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;
