import toast from "react-hot-toast";

// Increase
const handleIncrease = (
  currentQuantity,
  handleQuantityChange,
  itemID = null
) => {
  handleQuantityChange(currentQuantity + 1, itemID);
};

// Decrease
const handleDecrease = (
  currentQuantity,
  handleQuantityChange,
  itemID = null
) => {
  if (currentQuantity > 1) {
    handleQuantityChange(currentQuantity - 1, itemID);
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
