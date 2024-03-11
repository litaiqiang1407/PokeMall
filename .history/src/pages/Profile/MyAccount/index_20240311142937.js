import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./MyAccount.module.scss";
import { interactData } from "~/functions/interactData";

const cx = classNames.bind(styles);
function MyAccount() {
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });
  const [editable, setEditable] = useState(false);
  const [errorUsername, setErrorUsername] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [existError, setExistError] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleEditToggle = () => {
    setEditable(!editable);
    if (!editable) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClearInput = (name) => {
    setUserData({ ...userData, [name]: "" });
  };

  const handleSave = () => {
    interactData(
      "http://localhost/pokemall/actions/changeAccountInfo.php",
      "POST",
      userData,
      setUserData
    );
  };

  return (
    <Container className={cx("my-account")}>
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
                          className={cx("info-input")}
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
                          className={cx("info-input")}
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
                          className={cx("info-input")}
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
                  </Container>
                  <Button type="submit" className={cx("btn-save")}>
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
                  <Container className={cx("change-avatar")}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className={cx("change-icon")}
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MyAccount;
