import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Form, Container } from "react-bootstrap";

import classNames from "classnames/bind"; // CSS Module
import styles from "./Order.module.scss"; // CSS Module
import { interactData } from "~/functions/interactData";
import { orderItemURL } from "~/data";
const cx = classNames.bind(styles); // CSS Module

function Order() {
  const [orderItems, setOrderItems] = useState([]);
  const { orderID } = useParams();
  useEffect(() => {
    interactData(
      `${orderItemURL}?orderItemID=${orderID}`,
      "GET",
      null,
      setOrderItems
    );
  }, [orderID]);

  return (
    <Container className={cx("order-content")}>
      <table className={cx("table")}>
        {/* Products Table Header Row*/}
        <thead>
          <tr className={cx("header-row")}>
            <th className={cx("header-col")} scope="col">
              Product
            </th>
            <th className={cx("header-col")} scope="col">
              Size
            </th>
            <th className={cx("header-col")} scope="col">
              Unit Price
            </th>
            <th className={cx("header-col")} scope="col">
              Quantity
            </th>
            <th className={cx("header-col")} scope="col">
              Total Amount
            </th>
          </tr>
        </thead>

        {/* Products Table Body */}
        <tbody>
          {orderItems.map((item) => (
            <tr className={cx("product-row")} key={item.ID}>
              <td className={cx("product-col")}>
                <div className={cx("product")}>
                  <Link to={`/product-detail/${item.FigureID}`}>
                    <img
                      src={item.ImageURL}
                      alt={item.FigureName}
                      className={cx("product-img")}
                    />
                    <span className={cx("product-name")}>
                      {item.FigureName}
                    </span>
                  </Link>
                </div>
              </td>
              <td className={cx("product-col")}>
                <span className={cx("size")}>{item.Size}</span>
              </td>
              <td className={cx("product-col")}>
                <span className={cx("price")}>${item.Price}</span>
              </td>
              <td className={cx("product-col")}>
                <span className={cx("quantity")}>{item.Quantity}</span>
              </td>
              <td className={cx("product-col")}>
                <span className={cx("total-amount")}> ${item.TotalAmount}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Container className={cx("order-footer")}>
        <Container className={cx("message")}>
          <Form>
            <Form.Group className={cx("form-field")}>
              <Form.Control
                type="text"
                placeholder="Note to seller..."
                className={cx("form-input")}
              />
            </Form.Group>
          </Form>
        </Container>
        <Container className={cx("payment-methods")}>
          <Container className={cx("payment-method")}>
            <Container className={cx("method-title")}>Payment Method</Container>
            <Container className={cx("method-content")}>
              <button className={cx("btn-payment")}>Payment on Delivery</button>
              <button className={cx("btn-payment")}>Bank Card</button>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container className={cx("payment")}>
        <Container className={cx("payment-content")}>
          <span className={cx("total-price")}>Total: </span>
          <span className={cx("total-amount")}>
            ${parseFloat(totalCheckedAmount).toFixed(2)}
          </span>
          <Button className={cx("checkout")}>Checkout</Button>
        </Container>
      </Container>
    </Container>
  );
}

export default Order;
