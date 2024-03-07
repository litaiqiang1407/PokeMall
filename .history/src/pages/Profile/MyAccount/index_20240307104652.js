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
                <h3>Profile Information</h3>
              </Container>
              <Container className={cx("info-content")}>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formUsername">
                      <Form.Label>Username</Form.Label>
                      <div className="d-flex align-items-center">
                        <Form.Control
                          type="text"
                          name="username"
                          value={userData.username}
                          readOnly={!editable}
                          onChange={handleChange}
                        />
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="ms-2"
                          onClick={handleEditToggle}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <div className="d-flex align-items-center">
                        <Form.Control
                          type="text"
                          name="name"
                          value={userData.name}
                          readOnly={!editable}
                          onChange={handleChange}
                        />
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="ms-2"
                          onClick={handleEditToggle}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <div className="d-flex align-items-center">
                        <Form.Control
                          type="email"
                          name="email"
                          value={userData.email}
                          readOnly={!editable}
                          onChange={handleChange}
                        />
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="ms-2"
                          onClick={handleEditToggle}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formPhone">
                      <Form.Label>Phone</Form.Label>
                      <div className="d-flex align-items-center">
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={userData.phone}
                          readOnly={!editable}
                          onChange={handleChange}
                        />
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="ms-2"
                          onClick={handleEditToggle}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </Form.Group>
                  </Row>
                </Form>
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
