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

// Handle currency changes
const currencyChangesHandler = (pricesData, label) => {
  let amount = 0;
  let symbol = '';
  
  pricesData.map((price) => {
    if (price.currency.label === label) {
      amount = price.amount;
      symbol = price.currency.symbol;
    }
    return null;
  });
  return symbol + amount
} 

export  {getTotalAmount, getTax, getItemQuantity, currencyChangesHandler}