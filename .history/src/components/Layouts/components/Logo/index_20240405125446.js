import { Navbar } from "react-bootstrap";
function Logo() {
  return (
    <Navbar.Brand href="/">
      <img
        src="../assets/img/logo.png"
        height={42}
        width={114.03}
        className={cx("logo")}
        alt="Logo"
      />
    </Navbar.Brand>
  );
}

export default Logo;
