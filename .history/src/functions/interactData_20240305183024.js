import axios from "axios";
import toast from "react-hot-toast";

const interactData = (url, method, data, setData) => {
  axios({
    method: method,
    url: url,
    data: new URLSearchParams(data),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      toast.error("Sign up failed. Please try again.");
      console.error("Error fetching data: ", error);
    });
};

export { interactData };
