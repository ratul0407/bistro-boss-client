import { Link } from "react-router-dom";
import MenuItem from "../shared/MenuItem";

function MenuCategory({ items, title }) {
  console.log(title);
  return (
    <div>
      <div className="w-11/12 justify-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="pt-12 flex justify-center">
        <Link
          to={`/shop/${title}`}
          className="px-4 py-2 border-b-2 border-slate-900 rounded-lg hover:bg-slate-900 duration-300 transition-all hover:text-white"
        >
          Order Your Favourite Food
        </Link>
      </div>
    </div>
  );
}

export default MenuCategory;
