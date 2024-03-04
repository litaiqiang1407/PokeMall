const handleIncrease = (quantity, setQuantity) => {
  setQuantity(quantity + 1);
};

const handleDecrease = (quantity, setQuantity) => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

const handleQuantityChange = (event, setQuantity) => {
  const value = parseInt(event.target.value);
  if (!isNaN(value) && value >= 1) {
    setQuantity(value);
  }
};

export { handleIncrease, handleDecrease, handleQuantityChange };
