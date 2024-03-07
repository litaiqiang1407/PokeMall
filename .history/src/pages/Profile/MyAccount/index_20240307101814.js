import { Container } from "react-bootstrap";

function MyAccount() {
  return (
    <Container className={cx("my-account")}>
      <Container className={cx("my-account-header")}>
        <h1>My Account</h1>
        <p>Manage profile information for account security</p>
      </Container>
    </Container>
  );
}

export default MyAccount;
