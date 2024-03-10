import { Container } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <Container>
      <Container className={cx("contact-header")}>
        <h1 className={cx("header-title")}>Contact Us</h1>
        <span className={cx("header-subtitle")}>
          Any question or remarks? Just write us a message!
        </span>
      </Container>
      <Container className={cx("contact-content")}>
        <Row>
          <Col>
            <Container className={cx("contact-info")}></Container>
          </Col>
          <Col>
            <Container className={cx("contact-form")}></Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
