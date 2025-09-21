const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

//save cart to the local storage
// const saveCartToLocalStorage = (cart) => {
//   const cartStringified = JSON.stringify(cart);
//   localStorage.setItem("cart", cartStringified);
// };

const addCartToLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  cart.push(id);
  //   saveCartToLocalStorage(cart);
  //save cart to the local storage
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

export { getCartFromLocalStorage, addCartToLocalStorage };
