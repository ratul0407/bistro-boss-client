import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
function Menu() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        heading="Our Menu"
        subHeading="would you like to try our dish?"
      />
    </div>
  );
}

export default Menu;
