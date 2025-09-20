const Cart = ({ cart }) => {
  //   console.log(cart);
  return (
    <div className="cart">
      <div className="text-left space-y-2">
        <h4 className="font-semibold">{cart.name}</h4>
        <p>
          <span className="font-semibold"> Price: </span>
          <span>${cart.price}</span>{" "}
        </p>
        <p className="font-semibold">Quantity: </p>
      </div>
      <button className="cursor-pointer">❌</button>
    </div>
  );
};

export default Cart;
