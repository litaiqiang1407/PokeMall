import Tippy from "@tippyjs/react";
import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

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
        <Container className={cx("header-account")}>
          <Tippy
            render={(attrs) => (
              <div {...attrs} className={cx("custom-tooltip")}>
                <button onClick={handleLogout} className={cx("logout-button")}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                </button>
              </div>
            )}
            interactive={true}
            arrow={true}
            placement="bottom"
            theme="custom"
          >
            <Link className={cx("options-item")}>
              <img
                src={userData.avatar}
                alt="avatar"
                className={cx("avatar")}
              />
            </Link>
          </Tippy>
        </Container>
      </Container>
      <div style={{ padding: 0 }}>{children}</div>
    </div>
  );
}

export default AdminLayout;
