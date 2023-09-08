import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Body, Search, ErrorPage } from "./components";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.scss";

const App = () => (
  <div className="container">
    <Header />
    <Outlet />
  </div>
);

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
