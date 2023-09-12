import Offers from "../Offers/Offers";
import "./OfferContainer.scss";

const OfferContainer = ({ offerDetails }) => {
  return (
    <div className="offer-container">
      <div className="offer-container__scroll">
        <div className="offer-container__scroll__items">
          {offerDetails?.map((offer, index) => (
            <Offers offer={offer} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferContainer;
