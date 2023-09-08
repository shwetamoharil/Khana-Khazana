import { useRouteError } from "react-router";
import BackgroundImg from "../../../assets/space-image.jpeg";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const errorData = useRouteError();
  console.log(errorData);
  return (
    <div className="error-container">
      <img src={BackgroundImg} alt="erro-img"></img>
      <div className="error-container__error-box">
        <div className="error-container__error-box__status-code">
          <span>{errorData?.status}</span>
        </div>
        <div className="error-container__error-box__error-message">
          <span>{errorData?.error?.message}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
