import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
function Menu() {
  const { menu } = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const todaysOffer = menu.filter((item) => item.category === "offered");
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        heading="Our Menu"
        subHeading="would you like to try our dish?"
      />

      <SectionTitle heading="Today's offer" subHeading="Don't Miss" />
      <MenuCategory items={todaysOffer} />

      <Cover
        img={dessertImg}
        heading="Deserts"
        subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias"
      />

      <MenuCategory items={dessert} title="dessert" />
      <Cover
        img={pizzaImg}
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        heading="Pizza"
      />
      <MenuCategory items={pizza} title="pizza" />

      <Cover
        img={saladImg}
        heading="salads"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory items={salad} title="salad" />
      <Cover
        img={soupImg}
        heading="soups"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory items={soup} title="soup" />
    </div>
  );
}

export default Menu;
