import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

function Root() {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("sign-up");
  return (
    <div className="max-w-screen-xl mx-auto font-inter">
      {!noHeaderFooter && (
        <div>
          <Navbar />
        </div>
      )}

      <div
        className={
          noHeaderFooter && "flex items-center justify-center min-h-screen"
        }
      >
        <Outlet />
      </div>
      {!noHeaderFooter && (
        <div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Root;
