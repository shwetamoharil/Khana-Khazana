import "./PopularCuisines.scss";

const PopularCuisines = () => {
  return (
    <div className="popular-cuisines__container">
      <div className="popular-cuisines__container__list">
        <div className="popular-cuisines__container__list__item">
          <button>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65" />
          </button>
        </div>
        <div className="popular-cuisines__container__list__item">
          <button>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCuisines;
