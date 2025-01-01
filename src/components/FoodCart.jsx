function FoodCart({ item }) {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10 relative border">
        <img src={image} alt="Shoes" className="rounded-xl" />
        <p className="absolute top-12 right-12 bg-slate-900 text-white font-semibold px-2 py-1 rounded-lg">
          ${price}
        </p>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="px-4 py-3 text-yellow-500 bg-slate-200 border-yellow-500 border-b-2 rounded-lg hover:bg-slate-900 duration-300 transition-all">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCart;
