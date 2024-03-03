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
                <Col lg={3}>Visa</Col>
                <Col lg={3}>MasterCard</Col>
                <Col lg={3}>PayPal</Col>
                <Col lg={3}>PayPal</Col>
              </Row>
            </Col>
            <Col lg={3} className={cx("footer-item")}>
              <h3 className={cx("footer-item__header")}>Shipping Methods</h3>
              <Row className={cx("footer-item__content")}>
                <Col lg={3}>Visa</Col>
                <Col lg={3}>MasterCard</Col>
                <Col lg={3}>PayPal</Col>
                <Col lg={3}>PayPal</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;
