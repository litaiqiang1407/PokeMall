import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer>
      <Container classNames={cx("footer")}>
        <Row className={cx("footer-content")}>
          <Col lg={3}>
            <h3>About PokeMall Figure Shop</h3>
            <p>Introducing PokeMall Figure Shop</p>
          </Col>
          <Col lg={3}>
            <h3>Customer Care</h3>
            <p>Help Center</p>
          </Col>
          <Col lg={3}>
            <h3>Payment Methods</h3>
            <ul>
              <li>Visa</li>
              <li>MasterCard</li>
              <li>PayPal</li>
              <li>PayPal</li>
            </ul>
          </Col>
          <Col lg={3}>
            <h3>Shipping Methods</h3>
            <ul>
              <li>Visa</li>
              <li>MasterCard</li>
              <li>PayPal</li>
              <li>PayPal</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
