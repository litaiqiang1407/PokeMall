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
          <h2 className={cx("login-title")}>Log in</h2>
          <Form>
            <Form.Group controlId="formBasicPhoneNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
