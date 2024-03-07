import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faMinus } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ShoppingCart.module.scss"; // CSS Module

const cx = classNames.bind(styles); // CSS Module

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // Function to fetch cart items from backend
  useEffect(() => {
    // Make HTTP request to fetch cart items from backend
    axios
      .get("/api/cartItems")
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items: ", error);
      });
  }, []); // Empty dependency array to ensure this effect runs only once

  // Function to handle checkbox toggle
  const handleCheckAll = () => {
    // Implement checkbox functionality here
  };

  // Function to handle deleting an item from cart
  const handleDeleteItem = (itemId) => {
    // Implement item deletion functionality here
  };

  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Container>
        <Container className={cx("cart-header")}>
          <FontAwesomeIcon icon={faShoppingCart} className={cx("cart-icon")} />
          <span className={cx("header-title")}>CART</span>
        </Container>
        <Container className={cx("cart-content")}>
          <table className="table">
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
                <tr key={item.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ maxWidth: "50px" }}
                      />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>{item.size}</td>
                  <td>{item.unitPrice}</td>
                  <td>
                    <button>-</button>
                    <input type="text" value={item.quantity} />
                    <button>+</button>
                  </td>
                  <td>{item.unitPrice * item.quantity}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handleDeleteItem(item.id)}
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
