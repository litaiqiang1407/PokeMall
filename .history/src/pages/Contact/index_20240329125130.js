import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Title from "~/components/Title";

import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);

function Contact() {
  return (
    <Container className={cx("contact")}>
      <Title title="Contact Us - PokeMall" />
      <Container className={cx("contact-header")}>
        <h1 className={cx("header-title")}>Contact Us</h1>
        <span>Any question or remarks? Just write us a message!</span>
      </Container>
      <Container className={cx("contact-content")}>
        <Row>
          <Col>
            <Container className={cx("contact-info")}>
              <Container>
                <h2>Contact Information</h2>
                <span>We are here to help you</span>
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
              <div className={cx("info-social")}>
                <Link
                  className={cx("social-icon")}
                  to={"https://www.facebook.com/litaikun.kiga/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  className={cx("social-icon")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </Container>
          </Col>
          <Col>
            <Container className={cx("contact-form")}>
              <Form>
                <Form.Group className={cx("form-field")} controlId="name">
                  <Form.Label className={cx("form-label")}>Name</Form.Label>
                  <Form.Control
                    name="name"
                    className={cx("form-input")}
                    type="text"
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group
                  className={cx("form-field")}
                  controlId="formPhoneNumber"
                >
                  <Form.Label className={cx("form-label")}>
                    Phone number
                  </Form.Label>
                  <Form.Control
                    name="phone"
                    className={cx("form-input")}
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </Form.Group>

                <Form.Group className={cx("form-field")} controlId="email">
                  <Form.Label className={cx("form-label")}>Email</Form.Label>
                  <div className={cx("form-input-container")}>
                    <Form.Control
                      name="email"
                      className={cx("form-input")}
                      type={"text"}
                      placeholder="Enter your email"
                    />
                  </div>
                </Form.Group>

                <Form.Group className={cx("form-field")} controlId="message">
                  <Form.Label className={cx("form-label")}>Message</Form.Label>
                  <div className={cx("form-input-container")}>
                    <Form.Control
                      name="message"
                      className={cx("form-input")}
                      as="textarea"
                      rows={3}
                      placeholder="Enter your message"
                    />
                  </div>
                </Form.Group>
                <Button className={cx("btn-send")} variant="primary">
                  Send Message
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
