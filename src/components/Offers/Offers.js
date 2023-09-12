import { CDN_IMAGE_URL, OFFER_ICON } from "../../utils/constants";
import "./Offers.scss";

const Offers = ({ offer }) => {
  return (
    <div className="offers-container">
      <button className="offers-container__main">
        <div className="offers-container__main__content">
          <div className="offers-container__main__content__info">
            <div className="offers-container__main__content__info__header">
              <img src={offer?.info?.logoBottom ? CDN_IMAGE_URL + offer?.info?.logoBottom : OFFER_ICON}></img>
              <p>{offer?.info?.header}</p>
            </div>
            <div className="offers-container__main__content__info__code">
              <span>{offer?.info?.couponCode}</span>
              <span className="offers-container__main__content__info__code__description">{offer?.info?.description}</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Offers;
