export const calculateTotals = (cartItems) => {
    const productTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shipping = 50;
    const vat = productTotal * 0.2;
    const grandTotal = productTotal + shipping;
  
    return { productTotal, shipping, vat, grandTotal };
  };