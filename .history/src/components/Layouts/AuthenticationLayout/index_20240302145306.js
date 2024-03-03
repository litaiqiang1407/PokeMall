

function AuthenticationLayout({ children }) {
  return (
    <header>
      <Container fluid className={cx("header-container")}>
        <Container className={cx("header-logo")}>
          <Navbar.Brand href="#home">
            <img
              src="../assets/img/logo.png"
              height={66}
              className={cx("logo")}
              alt="Logo"
            />
          </Navbar.Brand>
        </Container>
      </Container>
    </header>
  );
}

export default AuthenticationLayout;
