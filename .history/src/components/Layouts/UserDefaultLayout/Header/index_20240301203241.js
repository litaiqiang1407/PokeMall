import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Bootstrap
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
