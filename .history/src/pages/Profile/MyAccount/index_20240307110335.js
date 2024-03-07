import { useState } from "react";
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

  const handleEditToggle = () => {
    setEditable(!editable);
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
                <h3 className={cx("info-title")}>Profile Information</h3>
              </Container>
              <Container className={cx("info-content")}>
                <form>
                  <Container className={cx("form-group")}>
                    <label htmlFor="formUsername" className={cx("form-label")}>
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={userData.username}
                      readOnly={!editable}
                      onChange={handleChange}
                    />
                    <FontAwesomeIcon icon={faEdit} onClick={handleEditToggle} />
                  </Container>
                  <Container className={cx("form-group")}>
                    <label htmlFor="formName" className={cx("form-label")}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      readOnly={!editable}
                      onChange={handleChange}
                    />
                    <FontAwesomeIcon icon={faEdit} onClick={handleEditToggle} />
                  </Container>
                  <Container className={cx("form-group")}>
                    <label htmlFor="formEmail" className={cx("form-label")}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      readOnly={!editable}
                      onChange={handleChange}
                    />
                    <FontAwesomeIcon icon={faEdit} onClick={handleEditToggle} />
                  </Container>
                  <Container className={cx("form-group")}>
                    <label htmlFor="formPhone" className={cx("form-label")}>
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={userData.phone}
                      readOnly={!editable}
                      onChange={handleChange}
                    />
                    <FontAwesomeIcon icon={faEdit} onClick={handleEditToggle} />
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
