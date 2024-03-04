import axios from "axios";

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

const handleSubmit = (event, setValidated) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
  axios
    .post("http://localhost/pokemall/actions/login.php", formData)
    .then((response) => {
      console.log("User added successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error adding user:", error);
    });
};

export { handleIncrease, handleDecrease, handleQuantityChange, handleSubmit };
