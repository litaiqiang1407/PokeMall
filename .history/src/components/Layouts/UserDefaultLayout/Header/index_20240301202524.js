import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("bg-light py-3")}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-3">Logo</div>
          <div className="col-6">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <button className="btn btn-primary me-2">Sign Up</button>
            <button className="btn btn-success">Log In</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
