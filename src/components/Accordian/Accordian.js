import { Dropdown } from "../../common";
import "./Accordian.scss";

const Accordian = () => {
  return (
    <div className="accordian-container">
      <div className="accordian-container__header">
        <span className="accordian-container__header__title">Title</span>
        <span className="accordian-container__header__icon">
          <Dropdown height="30" width="30" fill={"##000000"} />
        </span>
      </div>
      <div className="accordian-container__body"></div>
    </div>
  );
};

export default Accordian;
