import { Link, NavLink } from "react-router-dom";

import Swal from "sweetalert2";

import { IoMdCart } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
function Navbar() {
  const { user, logOut } = useAuth();
  const { cart } = useCart();
  console.log(cart);
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire({
          title: "Success!",
          text: "Log out successful.",
          icon: "success",
        });
      }
    });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/menu">our menu</NavLink>
      </li>
      <li>
        <NavLink to="/shop/salad">our shop</NavLink>
      </li>
      <button className="flex items-center">
        <IoMdCart size={25} />
        <div className="badge badge-secondary">{cart.length}</div>
      </button>

      {!user ? (
        <li>
          <Link to="/login">Sign In</Link>
        </li>
      ) : (
        <li>
          <button
            onClick={handleLogOut}
            className="btn bg-yellow-500 text-white border-none outline-yellow-900"
          >
            Log Out
          </button>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar justify-between fixed z-20 text-white bg-black/30">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow bg-black/80"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1  font-bold items-center">
          {links}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
