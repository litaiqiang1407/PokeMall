import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className="custom-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <div className="logo">Logo</div>
          </div>
          <div className="col-6">
            <form className="search-form">
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="col-3">
            <div className="buttons">
              <button className="btn">Sign Up</button>
              <button className="btn">Log In</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
