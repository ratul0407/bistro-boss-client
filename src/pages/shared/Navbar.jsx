import { Link } from "react-router-dom";
import cartIcon from "../../assets/icon/cart.png";
function Navbar() {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
      <li>
        <Link to="/">dashboard</Link>
      </li>
      <li>
        <Link to="/menu">our menu</Link>
      </li>
      <li>
        <Link to="/">our shop</Link>
      </li>
      <li>
        <Link>
          <img className="h-10 w-10 object-cover" src={cartIcon} />
        </Link>
      </li>
      <li>
        <Link>Sign In</Link>
      </li>
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
