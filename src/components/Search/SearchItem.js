import { CDN_IMAGE_URL } from "../../utils/constants";
import "./SearchItem.scss";

const SearchItem = ({ title, cloudinaryId, type }) => {
  return (
    <div className="search-item__main">
      <div className="search-item__main__img-container">
        <img src={CDN_IMAGE_URL + cloudinaryId}></img>
      </div>
      <div className="search-item__main__details">
        <div className="search-item__main__details__name">{title}</div>
        <div className="search-item__main__details__type">{type}</div>
      </div>
    </div>
  );
};

export default SearchItem;
