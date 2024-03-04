import axios from "axios";

const fetchData = (url, setData) => {
  axios
    .get(url)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};

export { fetchData };
