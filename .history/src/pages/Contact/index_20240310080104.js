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
            <Container className={cx("contact-info")}>
              <Container className={cx("info-header")}>
                <h2 className={cx("info-title")}>Contact Information</h2>
                <span className={cx("info-subtitle")}>
                  We are here to help you
                </span>
              </Container>
              <Container className={cx("info-content")}>
                <p>
                  <strong>Address:</strong> 1234 Street Name, City Name, United
                  States
                </p>
                <p>
                  <strong>Phone:</strong> +123 456 7890
                </p>
                <p>
                  <strong>Email:</strong>
                </p>
              </Container>
            </Container>
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
