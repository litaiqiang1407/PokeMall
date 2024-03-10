import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  FormGroup,
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
import { Link } from "react-router-dom";

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
              <div className={cx("info-social")}>
                <Link className={cx("social-icon")}>
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link className={cx("social-icon")}>
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </Container>
          </Col>
          <Col>
            <Container className={cx("contact-form")}>
              <Form>
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

                {/* Password Field */}
                <Form.Group
                  className={cx("form-field")}
                  controlId="formPassword"
                >
                  <Form.Label className={cx("form-label")}>Password</Form.Label>
                  <div className={cx("form-input-container")}>
                    <Form.Control
                      name="password"
                      className={cx("form-input")}
                      type={"text"}
                      placeholder="Enter your password"
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
