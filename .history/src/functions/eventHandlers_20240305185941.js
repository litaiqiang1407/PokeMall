import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
const handleQuantityChange = (e, setQuantity) => {
  const value = parseInt(e.target.value);
  if (!isNaN(value) && value >= 1) {
    setQuantity(value);
  }
};

const handleResponse = (data, formType, redirectPage) => {
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
    setTimeout(() => {
      const navigate = useNavigate();

      navigate(redirectPage);
    }, 1500);
  }
};

export { handleIncrease, handleDecrease, handleQuantityChange, handleResponse };
