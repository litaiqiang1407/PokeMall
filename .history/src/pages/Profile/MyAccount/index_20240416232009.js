import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

import { interactData } from "~/functions/interactData";
import { isValidation, errorMessages } from "~/functions/validation";
import { handleResponse } from "~/functions/eventHandlers";
import { Title } from "~/components";
import { changeAccountInfoURL } from "~/data";

import classNames from "classnames/bind";
import styles from "./MyAccount.module.scss";
const cx = classNames.bind(styles);

function MyAccount() {
  const [userData, setUserData] = useState({
    id: "",
    username: "",
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });
  const [editable, setEditable] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const inputRef = useRef(null);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setEditable(!editable);
    if (!editable) {
      inputRef.current.focus();
    }
  };

  const handleClearInput = (name) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: "",
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    const fields = [
      { name: "username", value: userData.username },
      { name: "email", value: userData.email },
      { name: "phone", value: userData.phone },
    ];

    const isValid = isValidation(fields, (error) => {
      setErrors(error);
    });

    if (!isValid) return;

    interactData(changeAccountInfoURL, "POST", userData, (response) => {
      if (response.message === "Account information updated") {
        handleResponse("Account information updated");
        localStorage.setItem("userData", JSON.stringify(userData));
        setErrors({ username: "", email: "", phone: "" });
        setEditable(false);
      } else if (response.message === "This username already exists") {
        setErrors({ ...errors, username: errorMessages.username.exist });
      } else if (response.message === "This email already exists") {
        setErrors({ ...errors, email: errorMessages.email.exist });
      } else if (response.message === "This phone already exists") {
        setErrors({ ...errors, phone: errorMessages.phone.exist });
      }
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("id", userData.id);
      formData.append("avatar", file);
      interactData(changeAccountInfoURL, "POST", formData, (response) => {
        if (response.message === "Account information updated") {
          handleResponse("Account information updated");
          localStorage.setItem("userData", JSON.stringify(userData));
          setUserData((prevUserData) => ({
            ...prevUserData,
            avatar: response.avatar,
          }));
        }
      });
    }
  };

  return (
    <Container className={cx("my-account")}>
      <Title title="My Account - PokeMall" />
      <Container className={cx("account-header")}>
        <h2>My Account</h2>
        <p>Manage profile information for account security</p>
      </Container>
      <Container className={cx("account-content")}>
        <Row>
          <Col lg={9}>
            <Container className={cx("profile-info")}>
              <Container className={cx("info-header")}>
                <span className={cx("info-title")}>Profile Information</span>
                <Tippy content="Edit Account Information">
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={handleEditToggle}
                    className={cx("btn-edit")}
                  />
                </Tippy>
              </Container>
              <Container className={cx("info-content")}>
                <Form onSubmit={handleSave}>
                  <Container className={cx("form-group")}>
                    <Row>
                      <Col lg={3}>
                        <label
                          htmlFor="formUsername"
                          className={cx("form-label")}
                        >
                          Username
                        </label>
                      </Col>
                      <Col lg={9} className={cx("input-container")}>
                        <input
                          className={cx("info-input", {
                            error: errors.username,
                          })}
                          type="text"
                          name="username"
                          value={userData.username}
                          readOnly={!editable}
                          onChange={handleChange}
                          ref={inputRef}
                        />
                        {editable && (
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={cx("clear-input")}
                            onClick={() => handleClearInput("username")}
                          />
                        )}
                      </Col>
                    </Row>
                    {errors.username && (
                      <span className={cx("error-message")}>
                        {errors.username}
                      </span>
                    )}
                  </Container>
                  <Container className={cx("form-group")}>
                    <Row>
                      <Col lg={3}>
                        <label htmlFor="formName" className={cx("form-label")}>
                          Name
                        </label>
                      </Col>
                      <Col lg={9} className={cx("input-container")}>
                        <input
                          className={cx("info-input")}
                          type="text"
                          name="name"
                          value={userData.name}
                          readOnly={!editable}
                          onChange={handleChange}
                        />
                        {editable && (
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={cx("clear-input")}
                            onClick={() => handleClearInput("name")}
                          />
                        )}
                      </Col>
                    </Row>
                  </Container>
                  <Container className={cx("form-group")}>
                    <Row>
                      <Col lg={3}>
                        <label htmlFor="formEmail" className={cx("form-label")}>
                          Email
                        </label>
                      </Col>
                      <Col lg={9} className={cx("input-container")}>
                        <input
                          className={cx("info-input", {
                            error: errors.email,
                          })}
                          type="email"
                          name="email"
                          value={userData.email}
                          readOnly={!editable}
                          onChange={handleChange}
                        />
                        {editable && (
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={cx("clear-input")}
                            onClick={() => handleClearInput("email")}
                          />
                        )}
                      </Col>
                    </Row>
                    {errors.email && (
                      <span className={cx("error-message")}>
                        {errors.email}
                      </span>
                    )}
                  </Container>
                  <Container className={cx("form-group")}>
                    <Row>
                      <Col lg={3}>
                        <label htmlFor="formPhone" className={cx("form-label")}>
                          Phone
                        </label>
                      </Col>
                      <Col lg={9} className={cx("input-container")}>
                        <input
                          className={cx("info-input", {
                            error: errors.phone,
                          })}
                          type="text"
                          name="phone"
                          value={userData.phone}
                          readOnly={!editable}
                          onChange={handleChange}
                        />
                        {editable && (
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={cx("clear-input")}
                            onClick={() => handleClearInput("phone")}
                          />
                        )}
                      </Col>
                    </Row>
                    {errors.phone && (
                      <span className={cx("error-message")}>
                        {errors.phone}
                      </span>
                    )}
                  </Container>
                  <Button
                    type="submit"
                    disabled={!editable}
                    className={cx("btn-save")}
                  >
                    Save
                  </Button>
                </Form>
              </Container>
            </Container>
          </Col>
          <Col lg={3}>
            <Container className={cx("profile-photo")}>
              <Container className={cx("photo-info")}>
                <Container className={cx("info-header")}>
                  <span className={cx("info-title")}>Profile Photo</span>
                </Container>
                <Container className={cx("photo")}>
                  <img
                    src={userData.avatar}
                    alt="Avatar"
                    className={cx("photo-img")}
                  />
                  <Container
                    className={cx("change-avatar")}
                    onClick={() => inputRef.current.click()}
                  >
                    <FontAwesomeIcon
                      icon={faEdit}
                      className={cx("change-icon")}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      style={{ display: "none" }}
                      ref={inputRef}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <Toaster />
    </Container>
  );
}

export default MyAccount;
