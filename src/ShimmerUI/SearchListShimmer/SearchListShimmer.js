import "./SearchListShimmer.scss";

const SearchListShimmer = () => {
  const dummySearchList = Array(5).fill(0);
  return (
    <div className="search-list-shimmer-container">
      {dummySearchList.map((ele, index) => (
        <div className="search-list-shimmer-container__main" key={index}>
          <div className="search-list-shimmer-container__main__img-container"></div>
          <div className="search-list-shimmer-container__main__details">
            <div className="search-list-shimmer-container__main__details__name"></div>
            <div className="search-list-shimmer-container__main__details__type"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchListShimmer;
