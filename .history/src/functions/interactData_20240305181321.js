import axios from "axios";
import toast from "react-hot-toast";

const handleResponse = (data) => {
  if (data === "New record created successfully") {
    toast.success("Sign up success", {
      icon: "💛",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      duration: 1000,
      position: "top-center",
    });
  } else {
    toast.error("Sign up failed. Please try again.");
  }
};

const interactData = (url, method, data, setData) => {
  axios({
    method: method,
    url: url,
    data: new URLSearchParams(data),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })
    .then((response) => {
      setData(response.data);
      handleResponse(response.data);
    })
    .catch((error) => {
      toast.error("Sign up failed. Please try again.");
      console.error("Error fetching data: ", error);
    });
};

export { interactData };
