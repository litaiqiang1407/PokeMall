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
                  <img src="" alt="" width={80} height={80} />
                </Col>
                <Col lg={6}>
                  <img src="" alt="" width={80} height={80} />
                </Col>
                <Col lg={6}>
                  <img src="" alt="" width={80} height={80} />
                </Col>
                <Col lg={6}>
                  <img src="" alt="" width={80} height={80} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;
