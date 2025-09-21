import { Suspense, useEffect, useState, use } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";
import Cart from "./Components/Cart/Cart";
import {
  addCartToLocalStorage,
  getCartFromLocalStorage,
} from "./Utilities/localstorage/localstorage";
// import { add, diff, mult, divide as divi } from "./Utilities/math";
// ../ ek dhap upore --- ./ current folder

const bottlesPromise = fetch("../public/bottles.json").then((res) =>
  res.json()
);

function App() {
  const bottles = use(bottlesPromise);
  const [carts, setCarts] = useState([]);

  //useEffect
  useEffect(() => {
    const storedCartIds = getCartFromLocalStorage();
    //console.log(storedCartIds, bottles); //2ta e array

    const storedCart = [];
    for (const id of storedCartIds) {
      //console.log(id);
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCarts(storedCart);
    //console.log(storedCart);
  }, [bottles]);

  const handleAddCart = (bottle) => {
    //console.log("bottles added", bottle);
    const newCart = [...carts, bottle]; //cart ta hcche state ar bottle hcche new click e je obj ta create hsse
    setCarts(newCart);

    //save the bottle id in the storage
    addCartToLocalStorage(bottle.id);
  };
  const handleRemoveCart = (id) => {
    console.log(id);
    const remainingCart = carts.filter((cart) => cart.id !== id);
    setCarts(remainingCart);
  };

  return (
    <div className="container">
      <h1 className="text-3xl">Buy Water Bottles</h1>
      <div className="products-cart">
        <div className="products">
          <Suspense fallback={<h3>Bottles are loading...</h3>}>
            <Bottles bottles={bottles} handleAddCart={handleAddCart} />
          </Suspense>
        </div>
        <div className="cart-container">
          <h2 className="text-2xl text-left">My Cart</h2>
          <div className="carts">
            {carts.map((cart) => (
              <Cart
                cart={cart}
                key={cart.id}
                handleRemoveCart={handleRemoveCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
