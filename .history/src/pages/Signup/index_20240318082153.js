import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Container, Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import { isValidation } from "~/functions/validation";
import { interactData } from "~/functions/interactData";
import { handleResponse } from "~/functions/eventHandlers";
import { signupURL } from "~/data";

import classNames from "classnames/bind";
import styles from "./Signup.module.scss";
import Title from "~/components/Title";

const cx = classNames.bind(styles);

function Signup() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [existError, setExistError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const phoneRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (phoneRef.current) {
      phoneRef.current.focus();
    }
  }, [phoneRef]);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = [
      { name: "phone", value: phone },
      { name: "password", value: password },
    ];
    const isValid = isValidation(fields, (errors) => {
      setPhoneError(errors.phone || "");
      setPasswordError(errors.password || "");
    });

    if (isValid) {
      interactData(
        signupURL,
        "POST",
        { phone: phone, password: password },
        (data) => {
          if (data.message === "Phone already exists") {
            setExistError("Phone number already exists");
          } else {
            handleResponse(data, "Sign up");
            setSignupSuccess(true);
          }
        }
      );
    }
  };

  if (signupSuccess) {
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }

  return (
    <Container fluid className={cx("signup-container")}>
      <Title title="Sign Up - PokeMall" />
      <Container fluid className={cx("signup-form-container")}>
        <Container className={cx("signup-form")}>
          <Container className={cx("signup-title")}>
            <h1 className={cx(" text-center")}>Sign Up</h1>
          </Container>

          <Form action="signup.php" method="post" onSubmit={handleSubmit}>
            <Form.Group
              className={cx("form-field")}
              controlId="formPhoneNumber"
            >
              <Form.Label className={cx("form-label")}>Phone number</Form.Label>
              <Form.Control
                ref={phoneRef}
                name="phone"
                className={cx("form-input", {
                  error: phoneError || existError,
                })}
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
              />
              {(phoneError || existError) && (
                <span className={cx("error-message")}>
                  {phoneError || existError}
                </span>
              )}
            </Form.Group>

            <Form.Group className={cx("form-field")} controlId="formPassword">
              <Form.Label className={cx("form-label")}>Password</Form.Label>

              <div className={cx("form-input-container")}>
                <Form.Control
                  name="password"
                  className={cx("form-input", { error: passwordError })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  onKeyDown={handleKeyDown}
                />

                {password && (
                  <FontAwesomeIcon
                    className={cx("show-icon")}
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>

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
      <Toaster />
    </Container>
  );
}

export default Signup;
