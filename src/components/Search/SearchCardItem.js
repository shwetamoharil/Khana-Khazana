import { CDN_IMAGE_URL } from "../../utils/constants";
import "./SearchCardItem.scss";

const SearchCardItem = ({ details }) => {
  return (
    <div className="search-card-item-container">
      <div className="search-card-item-container__img-container">
        <img src={CDN_IMAGE_URL + details?.cloudinaryImageId}></img>
      </div>
      <div className="search-card-item-container__details-container">
        <div className="search-card-item-container__details-container__name">{details?.name}</div>
        <div className="search-card-item-container__details-container__rating">{details?.avgRating}</div>
        <div className="search-card-item-container__details-container__menu">{details?.cuisines?.join(",")}</div>
      </div>
    </div>
  );
};

export default SearchCardItem;
