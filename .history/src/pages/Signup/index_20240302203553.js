import { Link } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Signup.module.scss";

const cx = classNames.bind(styles);

function Signup() {
  return (
    <Container fluid className={cx("signup-container")}>
      <Container fluid className={cx("signup-form-container")}>
        <Container className={cx("signup-form")}>
          <Container className={cx("signup-title")}>
            <h1 className={cx(" text-center")}>Log in</h1>
          </Container>

          <Form>
            <Form.Group
              className={cx("form-field")}
              controlId="formPhoneNumber"
            >
              <Form.Label className={cx("form-label")}>Phone number</Form.Label>
              <Form.Control
                className={cx("form-input")}
                type="text"
                placeholder="Enter your phone number"
              />
            </Form.Group>

            <Form.Group className={cx("form-field")} controlId="formPassword">
              <Form.Label className={cx("form-label")}>Password</Form.Label>
              <Form.Control
                className={cx("form-input")}
                type="password"
                placeholder="Enter your password"
              />
            </Form.Group>

            <Container className={cx("forgot-password_container")}>
              <Link to="/forgot-password" className={cx("forgot-password")}>
                Forgot password
              </Link>
            </Container>

            <Button
              variant="primary"
              type="submit"
              className={cx("signup-button")}
            >
              Sign up
            </Button>
          </Form>
          <hr className={cx("horizontal-line")} />
          <Container className={cx("login-section")}>
            <p className={cx("login-text")}>Already have an account?</p>
            <Link to="/login" className={cx("login-button")}>
              Sign up
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Signup;
