import "./Bottle.css";
const Bottle = ({ bottle, handleAddCart }) => {
  const { img, price, shipping, name, stock } = bottle;
  return (
    <div className="singleBottle">
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      <h3 className="text-2xl">Name: {name}</h3>
      <p className="text-xl">{stock} Remaining</p>
      <p>Shipping: ${shipping}</p>
      <p>Price: ${price}</p>
      <button className="btn" onClick={() => handleAddCart(bottle)}>
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;
