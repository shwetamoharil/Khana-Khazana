import { useEffect, useState } from "react";
import SearchIcon from "../../common/SearchIcon/SearchIcon";
import PopularCuisines from "./PopularCuisines";
import RecentSearchItem from "./RecentSearchItem";
import { SearchListShimmer, SearchShimmer } from "../../ShimmerUI";
import { RECENT_SEARCH_URL } from "../../utils/constants";
import { debounce } from "lodash";
import SearchItem from "./SearchItem";
import "./Search.scss";

const Search = () => {
  const [popularCuisines, setPopularCuisines] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    fetchRecentSearchData();
  }, []);

  useEffect(() => {
    const searchFn = debounce(() => fetchSearchData(), 3000);
    searchFn();
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

  if (popularCuisines === null) {
    return <SearchShimmer />;
  }

  return (
    <div className="search-container">
      <div className="search-container__main">
        <div className="search-container__main__search-input">
          <form className="search-container__main__search-input__search-form">
            <div className="search-container__main__search-input__search-form__input-box">
              <input type="text" placeholder="Search for restaurants and food" onChange={handleSearch}></input>
            </div>
            <div className="search-container__main__search-input__search-form__search-icon">
              <SearchIcon height="30" width="30" />
            </div>
          </form>
        </div>
        {!searchData && searchText.length === 0 && (
          <>
            <div className="search-container__main__recent-search">
              <div className="search-container__main__recent-search__search-list">
                <RecentSearchItem />
              </div>
            </div>
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
              <SearchItem key={item?.cloudinaryId} title={item?.text} cloudinaryId={item?.cloudinaryId} type={item?.type} />
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
