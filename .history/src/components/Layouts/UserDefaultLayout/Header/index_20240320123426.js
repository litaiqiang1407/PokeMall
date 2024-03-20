import Tippy from "@tippyjs/react/headless";
import { useContext, useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faReceipt,
  faSignOutAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "~/functions/authContext";
import { interactData } from "~/functions/interactData";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { userSearchURL } from "~/data";
import Search from "../../Components/Search";

const cx = classNames.bind(styles);

function Header({ isScrolled }) {
  const { isLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    avatar: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [isScrolled, setIsScrolled] = useState(false);
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
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        interactData(
          `${userSearchURL}?search=${searchTerm}`,
          "GET",
          null,
          setSearchResults
        );
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > 70) {
  //       setIsScrolled(true);
  //       setHeaderHeight(70);
  //     } else {
  //       setIsScrolled(false);
  //       setHeaderHeight(120);
  //     }
  //   };

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
              {/* <Tippy
                interactive
                visible={searchResults.length > 0}
                arrow={true}
                placement="bottom-start"
                theme="custom"
                onClickOutside={handleClearSearch}
                render={(attrs) => (
                  <div
                    {...attrs}
                    className={cx("search-results")}
                    tabIndex="-1"
                  >
                    <ul className={cx("search-list")}>
                      {searchResults.map((result, index) => (
                        <li
                          key={index}
                          className={cx("search-item")}
                          onClick={handleClearSearch}
                        >
                          
                          <Link
                            to={`/product-detail/${result.ID}`}
                            className={cx("search-link")}
                          >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <img
                              src={result.ImageURL}
                              className={cx("search-img")}
                            />
                            {result.FigureName} - {result.PrimaryType}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              >
                <div className={cx("header-search")}>
                  <input
                    className={cx("search-input")}
                    placeholder="Search for pokemon figures..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm && (
                    <FontAwesomeIcon
                      icon={faXmark}
                      onClick={handleClearSearch}
                      className={cx("clear-search")}
                    />
                  )}
                  <button className={cx("btn-search")}>
                    <FontAwesomeIcon
                      className={cx("icon-search")}
                      icon={faMagnifyingGlass}
                    />
                  </button>
                </div>
              </Tippy> */}
              <Search />
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
