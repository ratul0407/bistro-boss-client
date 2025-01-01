import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../shared/MenuItem";
import useMenu from "../../hooks/useMenu";

function PopularMenu() {
  const { menu, loading } = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  console.log(popular);

  if (loading) return <h3>I am still loading</h3>;
  return (
    <section>
      <SectionTitle heading="From our menu" subHeading="Check it out" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="px-4 py-2 border-b-2 border-slate-500 rounded-lg hover:text-white hover:bg-slate-900 duration-300 transition-all">
          View Full Menu
        </button>
      </div>
    </section>
  );
}

export default PopularMenu;
