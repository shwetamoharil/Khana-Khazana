import { useCallback, useEffect, useState } from "react";
import SearchIcon from "../../common/SearchIcon/SearchIcon";
import PopularCuisines from "./PopularCuisines";
import RecentSearchItem from "./RecentSearchItem";
import { SearchListShimmer, SearchShimmer } from "../../ShimmerUI";
import { RECENT_SEARCH_URL } from "../../utils/constants";
import { debounce } from "lodash";
import SearchItem from "./SearchItem";
import CloseIcon from "../../common/CloseIcon/CloseIcon";
import { NavLink } from "react-router-dom";
import "./Search.scss";

const Search = () => {
  const [popularCuisines, setPopularCuisines] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [recentData, setRecentData] = useState(null);

  const searchFn = useCallback(
    debounce(() => fetchSearchData(), 2000),
    [searchText]
  );

  useEffect(() => {
    fetchRecentSearchData();
  }, []);

  useEffect(() => {
    if (!searchText) {
      fetchSearchData();
    } else {
      searchFn();
    }

    return searchFn.cancel;
  }, [searchText]);

  const fetchRecentSearchData = async () => {
    const response = await fetch(RECENT_SEARCH_URL);
    const data = await response.json();
    setPopularCuisines(data?.data);
  };

  const fetchSearchData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.57034453268314&lng=73.78194741904736&str=${searchText}&trackingId=undefined`
    );
    const data = await response.json();
    setSearchData(data?.data);
    console.log(data?.data);
  };

  const handleSearch = async (e) => {
    setSearchText(e.target.value);
  };

  const handleClose = () => {
    setSearchText("");
  };

  if (popularCuisines === null) {
    return <SearchShimmer />;
  }

  return (
    <div className="search-container">
      <div className="search-container__main">
        <div className="search-container__main__search-input">
          <form className="search-container__main__search-input__search-form">
            <div className="search-container__main__search-input__search-form__input-box">
              <input type="text" placeholder="Search for restaurants and food" onChange={handleSearch} value={searchText}></input>
            </div>
            {!searchText && (
              <div className="search-container__main__search-input__search-form__search-icon">
                <SearchIcon height="30" width="30" />
              </div>
            )}
            {searchText && (
              <div className="search-container__main__search-input__search-form__search-icon" onClick={handleClose}>
                <CloseIcon height="30" width="30" />
              </div>
            )}
          </form>
        </div>
        {!searchData && searchText.length === 0 && (
          <>
            {recentData && (
              <div className="search-container__main__recent-search">
                <div className="search-container__main__recent-search__search-list">
                  <RecentSearchItem />
                </div>
              </div>
            )}
            <div className="search-container__main__popular-cuisines">
              <div className="search-container__main__popular-cuisines__list">
                <PopularCuisines popularCuisinesData={popularCuisines?.cards?.[1]} />
              </div>
            </div>
          </>
        )}

        {searchData && (
          <div className="search-container__main__search-list">
            {searchData?.suggestions?.map((item) => (
              <NavLink to="/search/list" state={{ name: item?.text }} key={item?.cloudinaryId}>
                <SearchItem title={item?.text} cloudinaryId={item?.cloudinaryId} type={item?.type} />
              </NavLink>
            ))}
          </div>
        )}
        {!searchData && searchText.length > 0 && (
          <div className="search-container__main__shimmer">
            <SearchListShimmer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
