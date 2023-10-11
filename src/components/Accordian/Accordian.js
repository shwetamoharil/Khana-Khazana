import { useState } from "react";
import { Dropdown } from "../../common";
import { CDN_IMAGE_URL } from "../../utils/constants";
import "./Accordian.scss";

const Accordian = ({ title, menuItems, showMenu, setShowIndex }) => {
  const handleAccordian = () => {
    setShowIndex();
  };

  return (
    <div className="accordian-container">
      <div className="accordian-container__header" onClick={handleAccordian}>
        <span className="accordian-container__header__title">{title}</span>
        <span className="accordian-container__header__icon">
          <Dropdown height="30" width="30" fill={"##000000"} />
        </span>
      </div>
      {showMenu &&
        menuItems?.map((item) => (
          <div className="accordian-container__content" key={item?.card?.info?.id}>
            <div className="accordian-container__content__description">
              <div className="accordian-container__content__description__title">{item?.card?.info?.name}</div>
              <div className="accordian-container__content__description__price">{"₹ " + item?.card?.info?.defaultPrice / 100}</div>
              <div className="accordian-container__content__description__desc">{item?.card?.info?.description}</div>
            </div>
            <div className="accordian-container__content__image">
              <img src={CDN_IMAGE_URL + item?.card?.info?.imageId}></img>
              <button className="accordian-container__content__image__symbol">ADD</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accordian;
