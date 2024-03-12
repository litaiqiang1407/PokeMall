function HeaderBottom() {
  return (
    <Container fluid className={cx("header-bottom")}>
      <Navbar expand="lg" className={cx("navbar-header")}>
        <Nav className="mx-auto">
          <Nav.Link className={cx("nav-link")} href="#types">
            Types
          </Nav.Link>
          <Nav.Link className={cx("nav-link")} href="#all-products">
            All Products
          </Nav.Link>
          <Nav.Link className={cx("nav-link")} href="#suggestions">
            Suggestions
          </Nav.Link>
          <Nav.Link className={cx("nav-link")} href="/about">
            About
          </Nav.Link>
          <Link className={cx("nav-link")} to="/contact">
            Contact
          </Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default HeaderBottom;
