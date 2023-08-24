import { useEffect, useState } from "react";
import SearchIcon from "../../common/SearchIcon/SearchIcon";
import PopularCuisines from "./PopularCuisines";
import RecentSearchItem from "./RecentSearchItem";
import { RECENT_SEARCH_URL } from "../../utils/constants";
import "./Search.scss";

const Search = () => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetchRecentSearchData();
  }, []);

  const fetchRecentSearchData = async () => {
    const response = await fetch(RECENT_SEARCH_URL);
    const data = await response.json();
    setSearchData(data?.data);
    console.log(data);
  };

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
          <div className="search-container__main__recent-search__search-list">
            <RecentSearchItem />
          </div>
        </div>
        <div className="search-container__main__popular-cuisines">
          <div className="search-container__main__popular-cuisines__list">
            <PopularCuisines popularCuisinesData={searchData?.cards?.[1]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
