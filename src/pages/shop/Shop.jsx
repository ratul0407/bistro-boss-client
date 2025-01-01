import { useState } from "react";
import shopCover from "../../assets/shop/banner2.jpg";
import Cover from "../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCart from "../../components/FoodCart";
import CartTab from "./CartTab";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

function Shop() {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const { menu } = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <Cover
        img={shopCover}
        heading="Our shop"
        subHeading="Would you like to try a dish?"
      />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <CartTab food={salad} />
        </TabPanel>
        <TabPanel>
          <CartTab food={pizza} />
        </TabPanel>
        <TabPanel>
          <CartTab food={soup} />
        </TabPanel>
        <TabPanel>
          <CartTab food={dessert} />
        </TabPanel>
        <TabPanel>
          <CartTab food={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Shop;
