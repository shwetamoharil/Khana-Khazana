import SearchIcon from "../../common/SearchIcon/SearchIcon";
import "./RecentSearchItem.scss";

const RecentSearchItem = () => {
  return (
    <div className="recent-search-item-container">
      <SearchIcon width="18" height="18" />
      <div className="recent-search-item-container__title">
        <button className="recent-search-item-container__title__name">Item</button>
      </div>
    </div>
  );
};

export default RecentSearchItem;
