import { useState, useRef, useEffect, useCallback, useMemo } from "react";
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
  const emptyData = {
    id: "",
    username: "",
    name: "",
    email: "",
    phone: "",
    avatar: "",
  };
  const [userData, setUserData] = useState(emptyData);
  const [newUserData, setNewUserData] = useState(emptyData);
  const [editable, setEditable] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  // Update newUserData whenever userData changes
  useEffect(() => {
    setNewUserData(userData);
  }, [userData]);

  const updateData = useMemo(
    () => ({
      id: userData.id,
      ...getChangedData(userData, newUserData),
    }),
    [userData, newUserData]
  );

  const saveAvatar = useCallback(() => {
    console.table(updateData);
    interactData(changeAccountInfoURL, "POST", updateData, (response) => {
      if (response.message === "Account information updated") {
        handleResponse("Account information updated");
        localStorage.setItem("userData", JSON.stringify(newUserData));
      }
    });
  }, [updateData, newUserData]);

  useEffect(() => {
    if (newUserData.avatar !== userData.avatar) {
      saveAvatar();
    }
  }, [newUserData.avatar, userData.avatar, saveAvatar]);

  const handleEditToggle = () => {
    setEditable(!editable);
    if (!editable) {
      inputRef.current.focus();
    }
  };

  // Function to compare two objects and return the differences
  const getChangedData = (original, updated) => {
    const changedData = {};
    for (const key in updated) {
      if (original[key] !== updated[key]) {
        changedData[key] = updated[key];
      }
    }
    return changedData;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const avatar = reader.result;
        setNewUserData({ ...newUserData, avatar: avatar });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearInput = (name) => {
    setUserData({ ...userData, [name]: "" });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const fields = [
      { name: "username", value: newUserData.username },
      { name: "email", value: newUserData.email },
      { name: "phone", value: newUserData.phone },
    ];

    const isValid = isValidation(fields, (error) => {
      setUsernameError(error.username || "");
      setEmailError(error.email || "");
      setPhoneError(error.phone || "");
    });

    if (Object.keys(updateData).length === 0) {
      return;
    }

    if (isValid) {
      interactData(changeAccountInfoURL, "POST", updateData, (response) => {
        if (response.message === "Account information updated") {
          handleResponse("Account information updated");
          localStorage.setItem("userData", JSON.stringify(newUserData));
          setUsernameError("");
          setEmailError("");
          setPhoneError("");
          setEditable(false);
        }
        if (response.message === "This username already exists") {
          setUsernameError(errorMessages.username.exist);
        }
        if (response.message === "This email already exists") {
          setEmailError(errorMessages.email.exist);
        }
        if (response.message === "This phone already exists") {
          setPhoneError(errorMessages.phone.exist);
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
                <Form action="" method="" onSubmit={handleSave}>
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
                            error: usernameError,
                          })}
                          type="text"
                          name="username"
                          value={
                            newUserData.username || userData.username || ""
                          }
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
                    {usernameError && (
                      <span className={cx("error-message")}>
                        {usernameError}
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
                          value={newUserData.name || userData.name || ""}
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
                            error: emailError,
                          })}
                          type="email"
                          name="email"
                          value={newUserData.email || userData.email || ""}
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
                    {emailError && (
                      <span className={cx("error-message")}>{emailError}</span>
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
                            error: phoneError,
                          })}
                          type="text"
                          name="phone"
                          value={newUserData.phone || userData.phone || ""}
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
                    {phoneError && (
                      <span className={cx("error-message")}>{phoneError}</span>
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
                    src={newUserData.avatar || userData.avatar}
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
