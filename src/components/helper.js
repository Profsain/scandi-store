// Find total amount of items price
const getTotalAmount = (cartItems) => {
  let total = 0;

  cartItems.map((item) => {
    let itemAmount = item.quantity * item.price[0].amount;
    return total += itemAmount;
  });
  return total.toFixed(2)
}

// find 21% tax
const getTax = (taxRate, cartItems) => {
  const total = getTotalAmount(cartItems);
  const taxValue = (taxRate/100) * total;
  return taxValue.toFixed(2)

}

// find items quantities
const getItemQuantity = (cartItems) => {
  let quantity = 0
  cartItems.map((item) => {
    return quantity += item.quantity
  });
  return quantity
}

export  {getTotalAmount, getTax, getItemQuantity}