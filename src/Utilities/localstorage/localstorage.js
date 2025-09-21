const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

//save cart to the local storage
const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

//remove cart from local storage
const removeCartFromLocalStorage = (id) => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);
  saveCartToLocalStorage(remainingCart);
};

const addCartToLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  cart.push(id);
  saveCartToLocalStorage(cart);
  //save cart to the local storage
  // const cartStringified = JSON.stringify(cart);
  // localStorage.setItem("cart", cartStringified);
};

export {
  getCartFromLocalStorage,
  addCartToLocalStorage,
  removeCartFromLocalStorage,
};
