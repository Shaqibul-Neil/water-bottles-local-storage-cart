import { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromise, handleAddCart }) => {
  //   console.log(bottlesPromise);
  const bottles = use(bottlesPromise);
  console.log(bottles);
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
