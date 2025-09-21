import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottles, handleAddCart }) => {
  //console.log(handleAddCart);
  return (
    <div>
      <h2 className="text-2xl text-left">Products</h2>
      <div className="bottlesContainer">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleAddCart={handleAddCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
