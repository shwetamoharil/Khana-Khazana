import { StarIcon } from "../../common";
import "./RestaurantDetails.scss";

const RestaurantDetails = ({ resDetails }) => {
  return (
    <div className="restaurant-details-container">
      <div className="restaurant-details-container__main">
        <div className="restaurant-details-container__name">
          <h3>{resDetails?.name}</h3>
          <span>{resDetails?.cuisines?.join(",")}</span>
        </div>
        <div className="restaurant-details-container__main__rating">
          <span className="restaurant-details-container__main__rating__star">
            <span className="restaurant-details-container__main__rating__star__icon">
              <StarIcon height="16" width="16" fill="#32CD32" />
            </span>
            <span className="restaurant-details-container__main__rating__star__review">{resDetails?.avgRating}</span>
          </span>
          <span>{resDetails?.totalRatingsString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
