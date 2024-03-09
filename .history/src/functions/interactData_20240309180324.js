import axios from "axios";

const interactData = (url, method, data, setData) => {
  axios({
    method: method,
    url: url,
    data: new URLSearchParams(data),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })
    .then((response) => {
      console.log("Sending request with data:", data);
      setData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};

export { interactData };
