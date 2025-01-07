import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Main from "../components/Dashboard/Main";
import AddRestaurant from "../components/Dashboard/Content/AddRestaurant";
import AddFood from "../components/Dashboard/Content/AddFood";
import AddShop from "../components/Dashboard/Content/AddShop";
import AddProduct from "../components/Dashboard/Content/AddProduct";
import AllFood from "../components/Dashboard/Content/AllFood";
import AllProducts from "../components/Dashboard/Content/AllProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <Main />,
    children: [
      {
        path: "addrestaurant",
        element: <AddRestaurant />,
      },
      {
        path: "addfood",
        element: <AddFood />,
      },
      {
        path: "addshop",
        element: <AddShop />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "allfoods",
        element: <AllFood />,
      },
      {
        path: "allproduct",
        element: <AllProducts />,
      },
    ],
  },
]);
