import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import { isValidateForm } from "~/functions/validation";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isValidateForm(phone, password, setPhoneError, setPasswordError);
  };

  // const validateForm = () => {
  //   let phoneValid = true;
  //   let passwordValid = true;

  //   // Validate Phone
  //   if (!phone) {
  //     setPhoneError("Phone number is required");
  //     phoneValid = false;
  //   } else if (!/^\d{10}$/.test(phone)) {
  //     setPhoneError("Invalid phone number format");
  //     phoneValid = false;
  //   } else {
  //     setPhoneError("");
  //   }

  //   // Validate Password
  //   if (!password) {
  //     setPasswordError("Password is required");
  //     passwordValid = false;
  //   } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
  //     setPasswordError("Invalid password format");
  //     passwordValid = false;
  //   } else {
  //     setPasswordError("");
  //   }

  //   // If both fields are valid, proceed with login
  //   if (phoneValid && passwordValid) {
  //     // Your login logic here
  //   }
  // };

  return (
    <Container fluid className={cx("login-container")}>
      <Container fluid className={cx("login-form-container")}>
        <Container className={cx("login-form")}>
          {/* Title */}
          <Container className={cx("login-title")}>
            <h1 className={cx("text-center")}>Log In</h1>
          </Container>

          <Form onSubmit={handleSubmit}>
            {/* Phone Field */}
            <Form.Group
              className={cx("form-field")}
              controlId="formPhoneNumber"
            >
              <Form.Label className={cx("form-label")}>Phone number</Form.Label>
              <Form.Control
                className={cx("form-input", { error: phoneError })}
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
              />
              {phoneError && (
                <span className={cx("error-message")}>{phoneError}</span>
              )}
            </Form.Group>

            {/* Password Field */}
            <Form.Group className={cx("form-field")} controlId="formPassword">
              <Form.Label className={cx("form-label")}>Password</Form.Label>
              <Form.Control
                className={cx("form-input", { error: passwordError })}
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <span className={cx("error-message")}>{passwordError}</span>
              )}
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
