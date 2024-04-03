import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { Title } from "~/components";

import classNames from "classnames/bind"; // CSS Module
import styles from "./Payment.module.scss"; // CSS Module
import ModalMyAddress from "./ModalMyAddress";
import { interactData } from "~/functions/interactData";
import { orderItemURL } from "~/data";
const cx = classNames.bind(styles); // CSS Module

function Payment() {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
  });
  const [showMyAddress, setShowMyAddress] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const { orderID } = useParams();
  const handleCloseMyAddress = (status) => setShowMyAddress(status);
  const handleShowMyAddress = () => setShowMyAddress(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  useEffect(() => {
    interactData(
      `${orderItemURL}?orderItemID=${orderID}`,
      "GET",
      null,
      setOrderItems
    );
  }, [orderID]);

  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Title title="Payment - PokeMall" />
      {/* Header */}
      <Container className={cx("payment-header")}>
        <FontAwesomeIcon icon={faReceipt} className={cx("payment-icon")} />
        <span className={cx("header-title")}>Payment</span>
      </Container>

      {/* Delivery Address */}
      <Container className={cx("delivery-address")}>
        <Container className={cx("address-header")}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={cx("address-icon")}
          />
          <span className={cx("header-title")}>Delivery Address</span>
        </Container>
        <Container className={cx("address-content")}>
          <Row>
            <Col lg={2}>
              <Container className={cx("user-info")}>
                <span className={cx("info-content")}>{userData.name}</span>
                <span className={cx("info-content")}>{userData.phone}</span>
              </Container>
            </Col>
            <Col lg={8}>
              <Container className={cx("address")}>
                <span className={cx("address-content")}>
                  Jl. Pallet No. 1, Pallet Town, Kanto
                </span>
              </Container>
            </Col>
            <Col lg={2}>
              <Container className={cx("change-address")}>
                <button
                  className={cx("btn-change")}
                  onClick={handleShowMyAddress}
                >
                  Change Address
                </button>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>

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
                  <span className={cx("total-amount")}>
                    {" "}
                    ${item.TotalAmount}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      {/* My Address */}
      <ModalMyAddress show={showMyAddress} close={handleCloseMyAddress} />
    </Container>
  );
}

export default Payment;
