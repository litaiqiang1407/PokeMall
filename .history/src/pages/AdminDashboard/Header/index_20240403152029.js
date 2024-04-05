import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  return <div className={cx("header")}></div>;
}

export default Header;
