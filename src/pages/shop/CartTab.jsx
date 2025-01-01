import FoodCart from "../../components/FoodCart";

function CartTab({ food }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {food?.map((item) => (
          <FoodCart key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CartTab;
