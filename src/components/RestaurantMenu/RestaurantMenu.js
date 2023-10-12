import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RestaurantMenuShimmer from "../../ShimmerUI/RestaurantMenuShimmer/RestaurantMenuShimmer";
import Accordian from "../Accordian/Accordian";
import OfferContainer from "./OfferContainer";
import RestaurantDetails from "./RestaurantDetails";
import "./RestaurantMenu.scss";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [resDetails, setResDetails] = useState();
  const [offerDetails, setOfferDetails] = useState();
  const [showIndex, setShowIndex] = useState(null);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.57034453268314&lng=73.78194741904736&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();

    const filteredData = data?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) =>
      card?.card?.card["@type"]?.includes("ItemCategory")
    );

    const dataList = filteredData?.map((item) => {
      if (item?.card?.card?.categories?.length > 0) {
        let obj = {};
        item?.card?.card?.categories?.map((card) => {
          obj = {
            title: card?.title,
            itemCards: card?.itemCards,
          };
        });
        return obj;
      } else {
        const obj = {
          title: item?.card?.card?.title,
          itemCards: item?.card?.card?.itemCards,
        };
        return obj;
      }
    });

    setMenuList(dataList);
    setResDetails(data?.data?.cards?.[0]?.card?.card?.info);
    setOfferDetails(data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
  };

  const handleShowIndex = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  console.log(resDetails);
  if (resDetails === undefined) {
    return <RestaurantMenuShimmer />;
  }

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
        {menuList.map((menuItem, index) => (
          <div className="restaurant-menu-container__main__menu" key={index}>
            <Accordian
              title={menuItem?.title}
              menuItems={menuItem?.itemCards}
              showMenu={index === showIndex ? true : false}
              setShowIndex={() => handleShowIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
