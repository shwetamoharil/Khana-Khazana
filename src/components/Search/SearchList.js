import { useEffect, useState } from "react";
import SearchCardItem from "./SearchCardItem";
import { useLocation } from "react-router-dom";
import "./SearchList.scss";
import RestaurantSearchListShimmer from "../../ShimmerUI/RestaurantSearchListShimmer/RestaurantSearchListShimmer";

const SearchList = () => {
  const [searchList, setSearchList] = useState(null);
  const location = useLocation();
  const search_str = location?.state?.name;

  useEffect(() => {
    fetchSearchData();
  }, []);

  const fetchSearchData = async () => {
    const resp = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.57034453268314&lng=73.78194741904736&str=${search_str}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=5b4d30c0-b471-4d4a-3c03-77b56e93c690&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22dyhqamt6bjfjwm4pkbat%22%2C%22dishFamilyId%22%3A%22846627%22%2C%22dishFamilyIds%22%3A%5B%22846627%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`
    );
    const json = await resp.json();
    const filteredList = json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.DISH?.cards.filter((card) =>
      card?.card?.card?.["@type"]?.includes("Dish")
    );
    setSearchList(filteredList);
  };

  return (
    <div className="searchlist-container">
      <div className="searchlist-container__main">
        <div className="searchlist-container__main__grid">
          {!searchList ? (
            <RestaurantSearchListShimmer />
          ) : (
            searchList?.map((item) => <SearchCardItem details={item?.card?.card?.restaurant?.info} key={item?.card?.card?.info?.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchList;
