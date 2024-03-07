import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import { interactData } from "~/functions/interactData";
import LoadingAnimation from "~/components/LoadingAnimation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faMinus } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ShoppingCart.module.scss"; // CSS Module

const cx = classNames.bind(styles); // CSS Module

function ShoppingCart() {
  const [userData, setUserData] = useState({
    id: "",
  });

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  // Get customerId from localStorage
  const customerId = userData.id;

  const url = `http://localhost/pokemall/api/ShoppingCart.php?customerId=${customerId}`;

  // Function to fetch cart items from backend
  useEffect(() => {
    interactData(url, "GET", null, setCartItems);
  }, []); // Empty dependency array to ensure this effect runs only once

  // Function to handle checkbox toggle
  const handleCheckAll = () => {
    // Implement checkbox functionality here
  };

  // Function to handle deleting an item from cart
  const handleDeleteItem = (itemId) => {
    // Implement item deletion functionality here
  };

  if (!cartItems) {
    return <LoadingAnimation />;
  }

  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Container>
        <Container className={cx("cart-header")}>
          <FontAwesomeIcon icon={faShoppingCart} className={cx("cart-icon")} />
          <span className={cx("header-title")}>CART</span>
        </Container>
        <Container className={cx("cart-content")}>
          <table className={cx("table")}>
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" onChange={handleCheckAll} />
                </th>
                <th scope="col">Product</th>
                <th scope="col">Size</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.ID}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div>
                      <img
                        src={item.ImageURL}
                        alt={item.FigureName}
                        style={{ maxWidth: "50px" }}
                      />
                      <span>{item.FigureName}</span>
                    </div>
                  </td>
                  <td>{item.SizeName}</td>
                  <td>{item.UnitPrice}</td>
                  <td>
                    <button>-</button>
                    <input type="text" value={item.Quantity} />
                    <button>+</button>
                  </td>
                  <td>{item.UnitPrice * item.Quantity}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handleDeleteItem(item.ID)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </Container>
    </Container>
  );
}

export default ShoppingCart;
