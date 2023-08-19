import React, { useState } from "react";
import { RestaurantCard } from "./../../components";
import "./Body.scss";

const Body = () => {
  return (
    <div className="main-container">
      <div className="main-container__restaurant-list">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
