import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <Container className={cx("contact")}>
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
                <Container className={cx("info-contact")}>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className={cx("info-text")}>+84326392976</span>
                </Container>
                <Container className={cx("info-contact")}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className={cx("info-text")}>
                    cuongltbc00178@fpt.edu.vn
                  </span>
                </Container>
                <Container className={cx("info-contact")}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className={cx("info-text")}>
                    No. 41, Cach Mang Thang 8, An Hoa Ward, Ninh Kieu District,
                    City. Can Tho.
                  </span>
                </Container>
              </Container>
              <Container className={cx("info-social")}>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
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
            <Button className={cx("btn-send")} variant="primary">
              Send Message
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
