import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
                <Container className={cx("info-phone")}>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className={cx("phone-text")}>+84326392976</span>
                </Container>
                <Container className={cx("info-email")}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className={cx("email-text")}>
                    cuongltbc00178@fpt.edu.vn
                  </span>
                </Container>
                <Container className={cx("info-address")}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className={cx("address-text")}>
                    15 Tran Phu, Ha Dong, Ha Noi
                  </span>
                </Container>
              </Container>
            </Container>
          </Col>
          <Col>
            <Container className={cx("contact-form")}>
              <FloatingLabel controlId="name" label="Name">
                <Form.Control
                  type="password"
                  placeholder="Enter your name..."
                />
              </FloatingLabel>
              <FloatingLabel controlId="phone" label="Phone number">
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number..."
                />
              </FloatingLabel>
              <FloatingLabel controlId="email" label="Email address">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="message" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a message here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
