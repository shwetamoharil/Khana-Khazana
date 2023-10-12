import "./RestaurantMenuShimmer.scss";

const RestaurantMenuShimmer = () => {
  const dummyOfferList = Array(5).fill(0);
  return (
    <div className="menu-shimmer__main">
      <div className="menu-shimmer__main__container">
        <div className="menu-shimmer__main__container__details"></div>
        <div className="menu-shimmer__main__container__offers">
          {dummyOfferList.map((ele, index) => (
            <div className="menu-shimmer__main__container__offers__card" key={index}></div>
          ))}
        </div>
        {dummyOfferList.map((ele, index) => (
          <div className="menu-shimmer__main__container__list" key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuShimmer;
