import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RestaurantDetails from "./RestaurantDetails";
import "./RestaurantMenu.scss";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [resDetails, setResDetails] = useState();
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
  };

  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-menu-container__main">
        <div className="restaurant-menu-container__main__details">
          <RestaurantDetails resDetails={resDetails} />
        </div>
        <hr className="line"></hr>
      </div>
    </div>
  );
};

export default RestaurantMenu;
