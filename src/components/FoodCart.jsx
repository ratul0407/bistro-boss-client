import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

function FoodCart({ item }) {
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch } = useCart();
  const handleCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: `${name} added to cart`,
            });
          }
          refetch();
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        title: "Please Login!",
        text: "You have to login to add items to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10 relative border">
        <img src={image} alt="Shoes" className="rounded-xl" />
        <p className="absolute top-12 right-12 bg-slate-900 text-white font-semibold px-2 py-1 rounded-lg">
          ${price}
        </p>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleCart}
            className="px-4 py-3 text-yellow-500 bg-slate-200 border-yellow-500 border-b-2 rounded-lg hover:bg-slate-900 duration-300 transition-all"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCart;
