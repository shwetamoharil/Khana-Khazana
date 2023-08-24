import { CDN_IMAGE_URL } from "../../utils/constants";
import "./PopularCuisines.scss";

const PopularCuisines = ({ popularCuisinesData }) => {
  const popularCuisinesList = popularCuisinesData?.card?.card?.imageGridCards?.info;

  return (
    <div className="popular-cuisines__container">
      <div className="popular-cuisines__container__title">
        <h3>Popular Cuisines</h3>
      </div>
      <div className="popular-cuisines__container__items">
        <div className="popular-cuisines__container__items__grid">
          {popularCuisinesList?.map((data) => (
            <div className="popular-cuisines__container__items__grid__item" key={data?.id}>
              <button>
                <img src={CDN_IMAGE_URL + data?.imageId} alt="popular-cuisine" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCuisines;
