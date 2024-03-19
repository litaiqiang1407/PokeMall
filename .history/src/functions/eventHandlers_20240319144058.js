import toast from "react-hot-toast";

// Increase
const handleIncrease = (currentQuantity, handleQuantityChange, ID = null) => {
  handleQuantityChange(currentQuantity + 1, ID);
};

// Decrease
const handleDecrease = (quantity, setQuantity) => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

// Quantity Change
const handleQuantityChange = (e, setQuantity) => {
  const value = parseInt(e.target.value);
  if (!isNaN(value) && value >= 1) {
    setQuantity(value);
  }
};

// Response
const handleResponse = (data, formType) => {
  if (data) {
    toast.success(`${formType} success`, {
      icon: "💛",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      duration: 1000,
      position: "top-center",
    });
  }
};

export { handleIncrease, handleDecrease, handleQuantityChange, handleResponse };
