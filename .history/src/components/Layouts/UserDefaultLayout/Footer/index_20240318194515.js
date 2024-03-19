import { Container, Row, Col } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer>
      <Container fluid className={cx("footer-container")}>
        <Container className={cx("footer-content")}>
          <Row>
            <Col lg={3} className={cx("footer-item")}>
              <h3 className={cx("footer-item__header")}>
                About PokeMall Figure Shop
              </h3>
              <p className={cx("footer-item__content")}>
                Introducing PokeMall Figure Shop
              </p>
            </Col>
            <Col lg={3} className={cx("footer-item")}>
              <h3 className={cx("footer-item__header")}>Customer Care</h3>
              <p className={cx("footer-item__content")}>Help Center</p>
            </Col>
            <Col lg={3} className={cx("footer-item")}>
              <h3 className={cx("footer-item__header")}>Payment Methods</h3>
              <Row className={cx("footer-item__content")}>
                <Col lg={6}>
                  <img
                    src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/mastercard-alt.svg?sanitize=true"
                    alt="MasterCard"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/visa.svg?sanitize=true"
                    alt="VISA"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/apple-pay.svg?sanitize=true"
                    alt="Apple Pay"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/apm/paypal.svg?sanitize=true"
                    alt="Paypal"
                    width={80}
                    height={80}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={3} className={cx("footer-item")}>
              <h3 className={cx("footer-item__header")}>Shipping Methods</h3>
              <Row className={cx("footer-item__content")}>
                <Col lg={6}>
                  <img
                    src="https://www.jtexpress.io/wp-content/uploads/2022/12/j-T-Express-Egypt-Tracking.png"
                    alt="J&T"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNnQvRUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5cd30459cecd8fec16774dd37298af8fa6159f42/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--1b8988b96ed4a58d3628eb3340c8b231786ccfc0/300x300-ninja_van_logo.jpg"
                    alt="NinjaVan"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://logosandtypes.com/wp-content/uploads/2020/08/vietnam-post.png"
                    alt="VietnamPost"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Viettel-Post-Red.png"
                    alt="ViettelPost"
                    width={80}
                    height={80}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={cx("footer-footer")}>
        Copyright © 2024 PokeMall. Powered by CuongLT{" "}
      </Container>
    </footer>
  );
}

export default Footer;
