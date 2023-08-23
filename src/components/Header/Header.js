import React from "react";
import Logo from "./../../../assets/logo.jpeg";
import { Dropdown } from "../../common";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container__section-1">
        <div className="header-container__section-1__logo">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="header-container__section-1__location">
          <span>Location</span>
          <Dropdown height="30" width="30" fill={"#ffffff"} />
        </div>
      </div>
      <div className="header-container__section-2">
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>About</li>
          <li>Help</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
