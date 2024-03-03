import { Link } from "react-router-dom";

import { Container, Form, Button, Row, Col } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  return (
    <Container fluid className={cx("login-container")}>
      <Container fluid className={cx("login-form-container")}>
        <div className={cx("login-form")}>
          <div className={cx("login-title")}>
            <h1 className={cx(" text-center")}>Log in</h1>
          </div>

          <Form>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <div className={cx("login-options")}>
              <Link to="/forgot-password" className={cx("forgot-password")}>
                Forgot password
              </Link>
              <Button
                variant="primary"
                type="submit"
                className={cx("login-button")}
              >
                Log in
              </Button>
            </div>
          </Form>
          <hr className={cx("horizontal-line")} />
          <div className={cx("signup-section")}>
            <p className={cx("signup-text")}>
              Don't have an account?
              <Link to="/signup" className={cx("signup-link")}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </Container>
      {/* <Row className={cx("login-row")}>
        <Col className={cx("login-col")}>
          
          
        </Col>
      </Row> */}
    </Container>
  );
}

export default Login;
