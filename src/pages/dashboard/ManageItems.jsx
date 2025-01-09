import { FaPen } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

function ManageItems() {
  const axiosSecure = useAxiosSecure();
  const { menu, refetch } = useMenu();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`menu/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div className="bg-slate-100 h-full">
      <SectionTitle heading="Manage all items" subHeading="Hurry Up!" />
      <div className="w-10/12 mx-auto bg-white">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item, index) => {
                return (
                  <tr key={item._id}>
                    {/* <th>{++index}</th> */}
                    <td>
                      <div className="flex  items-center gap-8">
                        <span className="font-bold">{++index}</span>
                        <img
                          className="h-16 w-16 rounded-lg"
                          src={item.image}
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <Link to={`/dashboard/update-item/${item._id}`}>
                        <FaPen />
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(item._id)}>
                        <MdDelete />
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
  );
}

export default ManageItems;
