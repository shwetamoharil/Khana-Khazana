import SearchIcon from "../../common/SearchIcon/SearchIcon";
import PopularCuisines from "./PopularCuisines";
import RecentSearchItem from "./RecentSearchItem";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-container__main">
        <div className="search-container__main__search-input">
          <form className="search-container__main__search-input__search-form">
            <div className="search-container__main__search-input__search-form__input-box">
              <input type="text" placeholder="Search for restaurants and food"></input>
            </div>
            <div className="search-container__main__search-input__search-form__search-icon">
              <SearchIcon height="30" width="30" />
            </div>
          </form>
        </div>
        <div className="search-container__main__recent-search">
          <h4 className="search-container__main__recent-search__title">Recent Searches</h4>
          <div className="search-container__main__recent-search__search-list">
            <RecentSearchItem />
          </div>
        </div>
        <div className="search-container__main__popular-cuisines">
          <div>
            <h2>Popular Cuisines</h2>
          </div>
          <div className="search-container__main__popular-cuisines__list">
            <PopularCuisines />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
