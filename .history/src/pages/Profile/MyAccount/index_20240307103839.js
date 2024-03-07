import { Container } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./MyAccount.module.scss";

const cx = classNames.bind(styles);
function MyAccount() {
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
                <Container className={cx("info-item")}></Container>
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
