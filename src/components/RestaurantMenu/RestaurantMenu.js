import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Accordian from "../Accordian/Accordian";
import OfferContainer from "./OfferContainer";
import RestaurantDetails from "./RestaurantDetails";
import "./RestaurantMenu.scss";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [resDetails, setResDetails] = useState();
  const [offerDetails, setOfferDetails] = useState();

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.57034453268314&lng=73.78194741904736&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    console.log(data);
    setResDetails(data?.data?.cards?.[0]?.card?.card?.info);
    setOfferDetails(data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
  };

  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-menu-container__main">
        <div className="restaurant-menu-container__main__details">
          <RestaurantDetails resDetails={resDetails} />
        </div>
        <hr className="line"></hr>
        <div className="restaurant-menu-container__main__offers">
          <OfferContainer offerDetails={offerDetails} />
        </div>
        <hr className="line"></hr>
        <div className="restaurant-menu-container__main__menu">
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
