import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main.jsx";
import ErrorPage from "./error-page";
import Home from "./components/Home";
import AllOffers from "./components/AllOffers";
import BusTickets from "./components/BusTickets";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Offers",
        element: <AllOffers></AllOffers>,
      },
      {
        path: "/bus-tickets",
        element: <BusTickets></BusTickets>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[85%] mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
