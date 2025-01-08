import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

function AllUsers() {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");

      return res.data;
    },
  });
  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          text: `Role updated to Admin`,
          icon: "success",
          title: "Success!",
        });
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="bg-slate-100 h-screen">
      <SectionTitle subHeading="How Many" heading="Manage All Users" />
      <div className="bg-white mx-auto w-10/12 p-4 rounded-lg">
        <div>
          <p className="text-3xl">Total Users: {users.length}</p>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user, index) => {
                  return (
                    <tr key={user._id}>
                      <th>{++index}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        {user.role === "admin" ? (
                          "Admin"
                        ) : (
                          <button onClick={() => handleMakeAdmin(user._id)}>
                            <FaUsers
                              size={20}
                              className="w-8 h-8 text-white bg-[#D1A054] p-1"
                            />
                          </button>
                        )}
                      </td>
                      <td>
                        <button onClick={() => handleDelete(user._id)}>
                          <FaTrashAlt
                            className="bg-red-700 text-white w-8 h-8 p-1"
                            size={20}
                          />
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
  );
}

export default AllUsers;
