import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Shop from "../pages/shop/Shop";
import Login from "../pages/authentication/Login";
import SignUp from "../pages/authentication/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/dashboard/Cart";
import AllUsers from "../pages/dashboard/AllUsers";
import AddItems from "../pages/dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboard/ManageItems";
import UpdateItem from "../pages/dashboard/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },

      //admin routes
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "update-item/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
export default router;
