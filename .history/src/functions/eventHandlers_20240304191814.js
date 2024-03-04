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

const handleSubmit = (event) => {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);

  // Create object from form data
  const userData = {};
  formData.forEach((value, key) => {
    userData[key] = value;
  });

  // Send user data to backend for processing (you can use Axios or fetch)
  fetch("http://localhost/pokemall/actions/login.php", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Handle success response (redirect, show message, etc.)
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error (show error message, etc.)
    });
};

export { handleIncrease, handleDecrease, handleQuantityChange, handleSubmit };
