import { useContext, useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faReceipt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react/headless";

import { AuthContext } from "~/functions/Contexts/authContext";
import { interactData } from "~/functions/interactData";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  const { isLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    avatar: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(120);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    setSearchResults([]);

    if (e.target.value.trim() !== "") {
      interactData(
        `http://localhost/pokemall/actions/userSearch.php?search=${searchTerm}`,
        "GET",
        null,
        setSearchResults
      );
    }
  };

  // Function to handle search submit
  const handleSearchSubmit = () => {
    // Call the PHP script to search for data
    interactData(
      `http://localhost/pokemall/actions/userSearch.php?search=${searchTerm}`,
      "GET",
      null,
      setSearchResults
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 70) {
        setIsScrolled(true);
        setHeaderHeight(70);
      } else {
        setIsScrolled(false);
        setHeaderHeight(120);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userData");
    navigate("/");
    window.location.reload();
  };

  return (
    <header style={{ height: `${headerHeight}px` }}>
      <Container
        fluid
        className={cx("header-container", { scrolled: isScrolled })}
        style={{ height: `${headerHeight}px` }}
      >
        <Container className={cx("header-top")}>
          <Row>
            <Col lg={3}>
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
            </Col>
            <Col lg={6}>
              <div className={cx("header-search")}>
                <input
                  className={cx("search-input")}
                  placeholder="Search for pokemon figures..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchResults.length > 0 && (
                  <Tippy
                    render={(attrs) => (
                      <div {...attrs} className={cx("search-results-tooltip")}>
                        <ul>
                          {searchResults.map((result, index) => (
                            <li key={index}>
                              {/* Render search result item */}
                              <Link to={`/product-detail/${result.ID}`}>
                                {result.FigureName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    interactive={true}
                    arrow={true}
                    placement="bottom-start"
                    theme="custom"
                  ></Tippy>
                )}
                <button
                  className={cx("btn-search")}
                  onClick={handleSearchSubmit}
                >
                  <FontAwesomeIcon
                    className={cx("icon-search")}
                    icon={faMagnifyingGlass}
                  />
                </button>
              </div>
            </Col>
            <Col lg={3}>
              {isLoggedIn ? (
                <div className={cx("user-options")}>
                  <Link
                    className={cx("options-item")}
                    to="/profile/purchase-orders"
                  >
                    <FontAwesomeIcon icon={faReceipt} />
                  </Link>

                  <Link className={cx("options-item")} to="/shopping-cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Link>

                  {/* Tippy */}
                  <Tippy
                    render={(attrs) => (
                      <div {...attrs} className={cx("custom-tooltip")}>
                        <button
                          onClick={handleLogout}
                          className={cx("logout-button")}
                        >
                          <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                        </button>
                      </div>
                    )}
                    interactive={true}
                    arrow={true}
                    placement="bottom"
                    theme="custom"
                  >
                    <Link
                      className={cx("options-item")}
                      to="/profile/my-account"
                    >
                      <img
                        src={userData.avatar}
                        alt="avatar"
                        className={cx("avatar")}
                      />
                    </Link>
                  </Tippy>
                </div>
              ) : (
                <div className={cx("authentication")}>
                  <Link className={cx("btn-signup")} to="/signup">
                    Sign up
                  </Link>
                  <Link className={cx("btn-login")} to="/login">
                    Log in
                  </Link>
                </div>
              )}
            </Col>
          </Row>
        </Container>

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
              <Nav.Link className={cx("nav-link")} href="#about">
                About
              </Nav.Link>
              <Link className={cx("nav-link")} to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar>
        </Container>
      </Container>
      <Container style={{ height: `${headerHeight}px` }}></Container>
    </header>
  );
}

export default Header;
