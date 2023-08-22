import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Body } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";

const App = () => (
  <div className="container">
    <Header />
    <Body />
  </div>
);

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
