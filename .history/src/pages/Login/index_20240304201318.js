import { useState } from "react"; // React
import { Link } from "react-router-dom"; // React-Router-DOM
import { Container, Form, Button } from "react-bootstrap"; // React-Bootstrap
import classNames from "classnames/bind"; // CSS Modules
import styles from "./Login.module.scss"; // Component styles

const cx = classNames.bind(styles);

function Login() {
  const [validated, setValidated] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (
      form.checkValidity() === false ||
      !isPhoneValid(phone) ||
      !isPasswordValid(password)
    ) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isPhoneValid = (phone) => {
    // Regular expression to validate phone format (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const isPasswordValid = (password) => {
    // Regular expression to validate password format (at least 8 characters, at least one letter, at least one number, and at least one special character)
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <Container fluid className={cx("login-container")}>
      <Container fluid className={cx("login-form-container")}>
        <Container className={cx("login-form")}>
          {/* Title */}
          <Container className={cx("login-title")}>
            <h1 className={cx("text-center")}>Log In</h1>
          </Container>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Phone Field */}
            <Form.Group
              className={cx("form-field")}
              controlId="formPhoneNumber"
            >
              <Form.Label className={cx("form-label")}>Phone number</Form.Label>
              <Form.Control
                required
                className={cx("form-input")}
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
              />
              <Form.Control.Feedback type="invalid">
                {phone.trim === ""
                  ? "Please provide your phone number."
                  : "Please provide a valid phone number (10 digits)."}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password Field */}
            <Form.Group className={cx("form-field")} controlId="formPassword">
              <Form.Label className={cx("form-label")}>Password</Form.Label>
              <Form.Control
                required
                className={cx("form-input")}
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              <Form.Control.Feedback type="invalid">
                {password.trim === ""
                  ? "Please enter your password."
                  : "Please enter a valid password (at least 8 characters, at least one letter, at least one number, and at least one special character)."}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Forgot Password */}
            <Container className={cx("forgot-password_container")}>
              <Link to="/forgot-password" className={cx("forgot-password")}>
                Forgot password
              </Link>
            </Container>

            {/* Login Button */}
            <Button
              variant="primary"
              type="submit"
              className={cx("login-button")}
            >
              Log in
            </Button>
          </Form>
          <hr className={cx("horizontal-line")} />
          <Container className={cx("signup-section")}>
            <p className={cx("signup-text")}>Don't have an account?</p>
            <Link to="/signup" className={cx("signup-button")}>
              Sign up
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Login;
