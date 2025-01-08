import { IoTrashBin } from "react-icons/io5";
import SectionTitle from "../../components/SectionTitle";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function Cart() {
  const { cart, refetch } = useCart();
  const axiosSecure = useAxiosSecure();
  console.log(cart);
  const totalPrice = cart.reduce((total, cur) => total + cur.price, 0);
  console.log(totalPrice);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: "Cart Item deleted successfully",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="bg-slate-100 h-screen">
      <div className="text-center">
        <SectionTitle subHeading="My Cart" heading="Wanna Add More" />
        <div className="bg-white w-10/12 mx-auto p-4 rounded-lg space-y-4">
          <div className="flex justify-between">
            <h2 className="text-4xl">Total Orders: {cart.length}</h2>
            <h3 className="text-4xl">Total Price: ${totalPrice}</h3>
            <button className="btn bg-[#D1A054] text-white">pay</button>
          </div>

          <div>
            <div className="overflow-x-auto rounded-xl">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="bg-[#D1A054] text-white">
                    <th></th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        <th>{++index}</th>
                        <td>
                          <img
                            className="h-14 w-14 rounded-2xl object-cover"
                            src={item.image}
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          <button onClick={() => handleDelete(item._id)}>
                            <IoTrashBin className="text-red-700" size={20} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
