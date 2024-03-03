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
            <h3>Company</h3>
            <p></p>
          </Col>
          <Col lg={3}></Col>
          <Col lg={3}></Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
