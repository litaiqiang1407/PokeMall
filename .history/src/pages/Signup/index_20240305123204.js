import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

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
  const [signupSuccess, setSignupSuccess] = useState(false);
  const { addToast } = useToasts();
  const navigate = useNavigate();

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
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            phone: phone,
            password: password,
          }),
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
            if (data === "success") {
              addToast("Sign up success", {
                icon: "👏",
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            } else {
              addToast("Sign up failed", {
                icon: "😢",
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }
            setSignupSuccess(true);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  };

  if (signupSuccess) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  }

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
