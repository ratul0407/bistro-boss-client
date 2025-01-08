import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaPaypal,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaMessage, FaShop } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

function Dashboard() {
  const { cart } = useCart();
  const { isAdmin } = useAdmin();
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="dashboard-menu menu">
          {!isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaPaypal />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaMessage />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook />
                  My Bookings
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-items">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-bookings">
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <FaList /> Menu
            </Link>
          </li>
          <li>
            <Link>
              <FaShop />
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <IoMdMail />
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
