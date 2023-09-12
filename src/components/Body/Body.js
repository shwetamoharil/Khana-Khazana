import React, { useEffect, useState } from "react";
import { BodyShimmer } from "../../ShimmerUI";
import { RestaurantCard } from "./../../components";
import { Link } from "react-router-dom";

import "./Body.scss";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const shimmerUIArray = new Array(8).fill(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.01093942193059&lng=73.74581806361675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setListOfRestaurants(data?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return (
    <div className="main-container">
      <div className="main-container__restaurant-list">
        {listOfRestaurants?.length === 0
          ? shimmerUIArray?.map((val, index) => <BodyShimmer key={index} />)
          : listOfRestaurants?.map((res) => (
              <Link to={"/menu/" + res?.info?.id} key={res?.info?.id}>
                <RestaurantCard res={res?.info} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
