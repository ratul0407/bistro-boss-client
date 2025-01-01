function MenuItem({ item }) {
  const { name, image, recipe, price } = item || {};
  return (
    <div className="flex space-x-4 items-center">
      <img
        style={{ borderRadius: "0 200px  200px 200px" }}
        className="h-[118px] w-[104px]"
        src={image}
      />
      <div>
        <h3>{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
}

export default MenuItem;
