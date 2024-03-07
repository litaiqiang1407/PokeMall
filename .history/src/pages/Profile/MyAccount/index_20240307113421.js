import { useState, useRef } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./MyAccount.module.scss";

const cx = classNames.bind(styles);
function MyAccount() {
  const [editable, setEditable] = useState(false);
  const [userData, setUserData] = useState({
    username: "JohnDoe",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });
  const inputRef = useRef(null);

  const handleEditToggle = () => {
    setEditable(!editable);
    if (editable) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
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
                <FontAwesomeIcon icon={faEdit} onClick={handleEditToggle} />
              </Container>
              <Container className={cx("info-content")}>
                <form>
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
                      <Col lg={9}>
                        <input
                          className={cx("info-input")}
                          type="text"
                          name="username"
                          value={userData.username}
                          readOnly={!editable}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </Container>
                </form>
              </Container>
            </Container>
          </Col>
          <Col lg={3}>
            <Container className={cx("profile-photo")}></Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MyAccount;
