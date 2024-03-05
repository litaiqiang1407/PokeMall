import { useState } from "react";

import { Link } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";

import { isValidation } from "~/functions/validation";

import classNames from "classnames/bind";
import styles from "./Signup.module.scss";

const cx = classNames.bind(styles);

function Signup() {
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
    const fields = [
      { name: "phone", value: phone },
      { name: "password", value: password },
    ];
    isValidation(fields, (errors) => {
      setPhoneError(errors.phone || "");
      setPasswordError(errors.password || "");
      if (!errors.phone && !errors.password) {
        fetch("http://localhost/pokemall/actions/signup.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone, password }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            // Xử lý phản hồi từ server
          })
          .catch((error) => {
            console.error("There was an error!", error);
            // Xử lý lỗi khi gửi yêu cầu đến server
          });
      }
    });
  };

  return (
    <Container fluid className={cx("signup-container")}>
      <Container fluid className={cx("signup-form-container")}>
        <Container className={cx("signup-form")}>
          <Container className={cx("signup-title")}>
            <h1 className={cx(" text-center")}>Sign Up</h1>
          </Container>

          <Form action="" method="post" onSubmit={handleSubmit}>
            <Form.Group
              className={cx("form-field")}
              controlId="formPhoneNumber"
            >
              <Form.Label className={cx("form-label")}>Phone number</Form.Label>
              <Form.Control
                name="phone"
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

            <Form.Group className={cx("form-field")} controlId="formPassword">
              <Form.Label className={cx("form-label")}>Password</Form.Label>
              <Form.Control
                name="password"
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
              Log in
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Signup;
