// Increase
const handleIncrease = (quantity, setQuantity) => {
  setQuantity(quantity + 1);
};

// Decrease
const handleDecrease = (quantity, setQuantity) => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};


// Quantity Change
const handleQuantityChange = (event, setQuantity) => {
  const value = parseInt(event.target.value);
  if (!isNaN(value) && value >= 1) {
    setQuantity(value);
  }
};

export { handleIncrease, handleDecrease, handleQuantityChange };
