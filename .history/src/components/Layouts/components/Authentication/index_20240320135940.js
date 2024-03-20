import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faReceipt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import { AuthContext } from "~/functions/authContext";

import classNames from "classnames/bind";
import styles from "./Authentication.module.scss";
const cx = classNames.bind(styles);

const Authentication = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    avatar: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userData");
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <div className={cx("user-options")}>
        <Link className={cx("options-item")} to="/profile/purchase-orders">
          <FontAwesomeIcon icon={faReceipt} />
        </Link>
        <Link className={cx("options-item")} to="/shopping-cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>

        <Link className={cx("options-item")} to="/profile/my-account">
          <img src={userData.avatar} alt="avatar" className={cx("avatar")} />
        </Link>
      </div>
    </div>
  );
};

export default Authentication;
