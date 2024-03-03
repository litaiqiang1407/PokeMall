import { Link } from "react-router-dom";

import { Container, Form, Button, Row, Col } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  return (
    <Container fluid className={cx("login-container")}>
      <Container fluid className={cx("login-form-container")}>
        <Container className={cx("login-form")}>
          <Container className={cx("login-title")}>
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

            <Container className={cx("login-options")}>
              <Container className={cx("forgot-password_container")}>
                <Link to="/forgot-password" className={cx("forgot-password")}>
                  Forgot password
                </Link>
              </Container>
              <Container>
                <Button
                  variant="primary"
                  type="submit"
                  className={cx("login-button")}
                >
                  Log in
                </Button>
              </Container>
            </Container>
          </Form>
          <hr className={cx("horizontal-line")} />
          <div className={cx("signup-section")}>
            <p className={cx("signup-text")}>Don't have an account?</p>
            <Link to="/signup" className={cx("signup-button")}>
              Sign up
            </Link>
          </div>
        </Container>
      </Container>
    </Container>
  );
}

export default Login;
