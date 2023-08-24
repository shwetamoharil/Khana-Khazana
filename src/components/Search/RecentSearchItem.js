import SearchIcon from "../../common/SearchIcon/SearchIcon";
import "./RecentSearchItem.scss";

const RecentSearchItem = ({ recentSearchData }) => {
  return (
    <div className="recent-search-item-container">
      <h4 className="recent-search-item-container__title">Recent Searches</h4>
      <div className="recent-search-item-container__recent-list">
        <SearchIcon width="20" height="20" />
        <div className="recent-search-item-container__recent-list__item">
          <button className="recent-search-item-container__title__name">Item</button>
        </div>
      </div>
    </div>
  );
};

export default RecentSearchItem;
