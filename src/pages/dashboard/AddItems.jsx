import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
function AddItems() {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    //upload image to the imgbb
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      //now send the menuItem to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success!",
          text: "Menu Item added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle heading="Add an Item" subHeading="What's New" />
      <div className="w-10/12 mx-auto bg-[#E8E8E8] p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Recipe Name*
              </span>
            </label>
            <input
              type="text"
              {...register("name")}
              className="input input-bordered"
              placeholder="Recipe Name"
            />
          </div>

          {/* category and price row*/}
          <div className="lg:flex lg:flex-row lg:gap-8">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Category
                </span>
              </label>
              <select
                defaultValue="default"
                {...register("category")}
                className="select select-bordered"
              >
                <option disabled value="default">
                  Category
                </option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
                <option value="drinks">Drinks</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-semibold text-lg">Price*</span>
              </label>
              <input
                type="number"
                {...register("price")}
                className="input input-bordered"
                placeholder="Price"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Recipe Details*
              </span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered "
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control">
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-success w-full max-w-xs mt-6"
            />
          </div>
          <button
            type="submit"
            className="mt-6 flex items-center gap-2 px-4 py-2 font-bold text-white  bg-gradient-to-tr from-[#835D23] to-[#B58130]"
          >
            Add Items <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItems;
