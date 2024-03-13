import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

import Title from "~/components/Title";

import classNames from "classnames/bind";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);

function Products() {
  return (
    <Container className={cx("container")}>
      <Title>Admin Products - PokeMall</Title>
      <Container className={cx("header")}>
        <Container>
          <FontAwesomeIcon icon={faDragon} className={cx("header-icon")} />
          <span className={cx("header-title")}>Products</span>
        </Container>
        <Container>
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
          <div className={cx("header-add")}></div>
        </Container>
      </Container>
    </Container>
  );
}

export default Products;
