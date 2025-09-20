import { Suspense, useState } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";
import Cart from "./Components/Cart/Cart";
// import { add, diff, mult, divide as divi } from "./Utilities/math";
// ../ ek dhap upore --- ./ current folder
const bottlesPromise = fetch("../public/bottles.json").then((res) =>
  res.json()
);

function App() {
  const [carts, setCarts] = useState([]);

  const handleAddCart = (bottle) => {
    console.log("bottles added", bottle);
    const newCart = [...carts, bottle]; //cart ta hcche state ar bottle hcche new click e je obj ta create hsse
    setCarts(newCart);
  };

  return (
    <div className="container">
      <h1 className="text-3xl">Buy Water Bottles</h1>
      <div className="products-cart">
        <div className="products">
          <Suspense fallback={<h3>Bottles are loading...</h3>}>
            <Bottles
              bottlesPromise={bottlesPromise}
              handleAddCart={handleAddCart}
            />
          </Suspense>
        </div>
        <div className="cart-container">
          <h2 className="text-2xl text-left">My Cart</h2>
          <div className="carts">
            {carts.map((cart) => (
              <Cart cart={cart} key={cart.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
