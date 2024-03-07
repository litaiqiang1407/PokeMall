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
      <Container className={cx("account-content")}></Container>
    </Container>
  );
}

export default MyAccount;
