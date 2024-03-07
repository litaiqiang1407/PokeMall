import { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faMinus } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./ShoppingCart.module.scss";

import { interactData } from "~/functions/interactData";
import LoadingAnimation from "~/components/LoadingAnimation";

const cx = classNames.bind(styles);

function ShoppingCart() {
  const [userData, setUserData] = useState({
    id: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  const customerId = userData.id;
  const url = `http://localhost/pokemall/api/ShoppingCart.php?customerId=${customerId}`;

  useEffect(() => {
    interactData(url, "GET", null, setCartItems);
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      const userQuantityData = {};
      setQuantities(userQuantityData);
    }
  }, [userData]);

  const handleDecrease = (itemId) => {
    const updatedQuantity = (quantities[itemId] || 0) - 1;
    if (updatedQuantity >= 0) {
      setQuantities({ ...quantities, [itemId]: updatedQuantity });
    }
  };

  const handleIncrease = (itemId) => {
    const updatedQuantity = (quantities[itemId] || 0) + 1;
    setQuantities({ ...quantities, [itemId]: updatedQuantity });
  };

  const handleQuantityChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantities({ ...quantities, [itemId]: newQuantity });
    }
  };

  const handleDeleteItem = (itemId) => {
    // Implement item deletion functionality here
  };

  if (!cartItems) {
    return <LoadingAnimation />;
  }

  const columns = [
    {
      dataField: "id",
      text: "ID",
      hidden: true,
    },
    {
      dataField: "checkbox",
      text: (
        <input
          type="checkbox"
          onChange={handleCheckAll}
          className={cx("header-checkbox")}
        />
      ),
      formatter: () => (
        <input type="checkbox" className={cx("product-checkbox")} />
      ),
      headerStyle: { border: "none" },
    },
    {
      dataField: "image",
      text: "Product",
      formatter: (cell, row) => (
        <div className={cx("product")}>
          <img
            src={row.ImageURL}
            alt={row.FigureName}
            className={cx("product-img")}
          />
          <span className={cx("product-name")}>{row.FigureName}</span>
        </div>
      ),
      headerStyle: { border: "none" },
    },
    {
      dataField: "SizeName",
      text: "Size",
      headerStyle: { border: "none" },
    },
    {
      dataField: "UnitPrice",
      text: "Unit Price",
      headerStyle: { border: "none" },
    },
    {
      dataField: "Quantity",
      text: "Quantity",
      formatter: (cell, row) => (
        <Container className={cx("quantity-select")}>
          <Button
            className={cx("decrease")}
            onClick={() => handleDecrease(row.ID)}
          >
            -
          </Button>
          <input
            type="text"
            value={quantities[row.ID] || 0}
            onChange={(event) => handleQuantityChange(event, row.ID)}
            className={cx("quantity-input")}
          />
          <Button
            className={cx("increase")}
            onClick={() => handleIncrease(row.ID)}
          >
            +
          </Button>
        </Container>
      ),
      headerStyle: { border: "none" },
    },
    {
      dataField: "TotalAmount",
      text: "Total Amount",
      headerStyle: { border: "none" },
    },
    {
      dataField: "Delete",
      text: "Delete",
      formatter: (cell, row) => (
        <FontAwesomeIcon
          icon={faMinus}
          onClick={() => handleDeleteItem(row.ID)}
        />
      ),
      headerStyle: { border: "none" },
    },
  ];

  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Container>
        <Container className={cx("cart-header")}>
          <FontAwesomeIcon icon={faShoppingCart} className={cx("cart-icon")} />
          <span className={cx("header-title")}>CART</span>
        </Container>
        <Container className={cx("cart-content")}>
          <BootstrapTable
            keyField="ID"
            data={cartItems}
            columns={columns}
            bordered={false}
          />
        </Container>
      </Container>
    </Container>
  );
}

export default ShoppingCart;
