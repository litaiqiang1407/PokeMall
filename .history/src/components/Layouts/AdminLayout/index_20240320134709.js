import { Container } from "react-bootstrap";

function AdminLayout({ children }) {
  return (
    <div>
      <Container fluid>
        <Container className={cx("header-logo")}>
          <Navbar.Brand href="/">
            <img
              src="../assets/img/logo.png"
              height={42}
              width={114.03}
              className={cx("logo")}
              alt="Logo"
            />
          </Navbar.Brand>
        </Container>
      </Container>
      <div style={{ padding: 0 }}>{children}</div>
    </div>
  );
}

export default AdminLayout;
