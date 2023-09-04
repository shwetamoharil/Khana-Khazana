import SearchIcon from "../../common/SearchIcon/SearchIcon";
import "./SearchShimmer.scss";

const SearchShimmer = () => {
  return (
    <div className="shimmer-search-container ">
      <div className="shimmer-search-container__search-item-container">
        <div className="shimmer-search-container__search-item-container__icon">
          <SearchIcon height="18" width="18" />
        </div>
        <div className="shimmer-search-container__search-item-container__item"></div>
      </div>
    </div>
  );
};

export default SearchShimmer;
