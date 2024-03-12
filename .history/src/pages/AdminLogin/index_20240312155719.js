import { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Container, Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import { isValidation } from "~/functions/validation";
import { interactData } from "~/functions/interactData";
import { handleResponse } from "~/functions/eventHandlers";
import { AuthContext } from "~/functions/authContext";
import Title from "~/components/Title";

import classNames from "classnames/bind";
import styles from "./AdminLogin.module.scss";

const cx = classNames.bind(styles);

function AdminLogin() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [existError, setExistError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const phoneRef = useRef(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const url = "http://localhost/pokemall/actions/login.php";

  useEffect(() => {
    document.title = "Login - PokeMall";
    return () => {
      document.title = "";
    };
  }, []);

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
      const data = { phone: phone, password: password };
      interactData(url, "POST", data, (data) => {
        if (data.message === "phone not found") {
          setExistError(
            "This phone number is not registered yet. Please register first."
          );
        } else if (data.message === "Login failed. Incorrect password.") {
          setPasswordError("Incorrect password");
        } else {
          handleResponse(data, "Login");
          localStorage.setItem("userData", JSON.stringify(data.userData));
          setLoginSuccess(true);
          login();
          localStorage.setItem("isLoggedIn", "true");
        }
      });
    }
  };

  if (loginSuccess) {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }
  return (
    <Container fluid className={cx("login-container")}>
      <Title title="Admin - PokeMall" />
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

            {/* Password Field */}
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
      <Toaster />
    </Container>
  );
}

export default AdminLogin;
