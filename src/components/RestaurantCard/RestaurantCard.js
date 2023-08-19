import React from "react";
import Logo from "../../../assets/logo.jpeg";
import { StarIcon } from "../../common";
import "./RestaurantCard.scss";

const RestaurantCard = () => {
  return (
    <div className="restaurant-main-container">
      <div className="restaurant-main-container__image">
        <img src={Logo} alt="restaurant-image"></img>
      </div>
      <div className="restaurant-main-container__details">
        <div className="restaurant-main-container__details__name">
          <span>Giridhar</span>
        </div>
        <div className="restaurant-main-container__details__rating">
          <div>
            <StarIcon height="20" width="20" fill="#32CD32" />
          </div>
          <span className="restaurant-main-container__details__rating__text">4.4</span>
        </div>
        <div className="restaurant-main-container__details__menu">
          <div className="restaurant-main-container__details__menu__items">Burgers, Pizza, Hamburger, Sandwich</div>
          <div className="restaurant-main-container__details__menu__addr">Baner</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
