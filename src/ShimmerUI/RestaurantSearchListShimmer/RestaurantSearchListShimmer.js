import "./RestaurantSearchListShimmer.scss";

const RestaurantSearchListShimmer = () => {
  const DUMMY_ARR = new Array(10).fill(0);

  return (
    <>
      {DUMMY_ARR.map((item, index) => (
        <div className="res-search-list-container" key={index}>
          <div className="res-search-list-container__img"></div>
          <div className="res-search-list-container__details"></div>
        </div>
      ))}
    </>
  );
};

export default RestaurantSearchListShimmer;
