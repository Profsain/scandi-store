// Find total amount of items price
const getTotalAmount = (cartItems, currencyLabel) => {
  let total = 0;
  let symbol = '';
  console.log('the cart item are', cartItems)

  cartItems.map((item) => {
    const { price, quantity } = item;
    const amount = currencyChangesHandler(price, currencyLabel);
    const amountValue = amount.slice(1);
    symbol = amount.slice(0, 1);
    return total += amountValue * quantity
  });
   
  return symbol + total.toFixed(2)
}

// find 21% tax
const getTax = (taxRate, cartItems, currencyLabel) => {
  const totalAmount = getTotalAmount(cartItems, currencyLabel);
  const totalAmountValue = totalAmount.slice(1);
  const symbol = totalAmount.slice(0, 1);
  const tax = totalAmountValue * taxRate / 100;
  
  return symbol + tax.toFixed(2)

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