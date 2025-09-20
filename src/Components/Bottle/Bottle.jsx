import "./Bottle.css";
const Bottle = ({ bottle, handleAddCart }) => {
  const { img, price, shipping, name, stock } = bottle;
  return (
    <div className="singleBottle">
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      <h3 className="text-2xl">{name}</h3>
      <div className="flex justify-between items-center px-8 py-5">
        <div className="text-left space-y-2">
          <p>Shipping: ${shipping}</p>
          <p className="text-xl">Price: ${price}</p>
        </div>
        <button className="badge">Only {stock} Remaining</button>
      </div>
      <button className="btn" onClick={() => handleAddCart(bottle)}>
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;
