import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "../index.scss";

const App = () => (
  <div className="container">
    <Header />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
