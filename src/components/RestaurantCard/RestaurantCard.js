import React from "react";
import Logo from "../../../assets/logo.jpeg";
import { StarIcon } from "../../common";
import { CDN_IMAGE_URL } from "../../utils/constants";
import "./RestaurantCard.scss";

const RestaurantCard = (props) => {
  const { res } = props;
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = res;
  return (
    <div className="restaurant-main-container">
      <div className="restaurant-main-container__image">
        <img src={CDN_IMAGE_URL + cloudinaryImageId} alt="restaurant-image"></img>
      </div>
      <div className="restaurant-main-container__details">
        <div className="restaurant-main-container__details__name">
          <span>{name}</span>
        </div>
        <div className="restaurant-main-container__details__rating">
          <div className="restaurant-main-container__details__rating__star">
            <StarIcon height="20" width="20" fill="#32CD32" />
          </div>
          <span className="restaurant-main-container__details__rating__text">{avgRating}</span>
        </div>
        <div className="restaurant-main-container__details__menu">
          <div className="restaurant-main-container__details__menu__items">{cuisines?.join(",")}</div>
          <div className="restaurant-main-container__details__menu__addr">{areaName}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
