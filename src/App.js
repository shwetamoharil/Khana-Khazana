import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Body, Search, ErrorPage, SearchList } from "./components";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.scss";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => (
  <Provider store={store}>
    <div className="container">
      <Header />
      <Outlet />
    </div>
  </Provider>
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
      {
        path: "/menu/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/search/list",
        element: <SearchList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
