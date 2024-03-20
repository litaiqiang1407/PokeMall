import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import { interactData } from "~/functions/interactData";
import { userSearchURL } from "~/data";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

const Search = ({ isScrolled }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  return (
    <Tippy
      interactive
      visible={searchResults.length > 0}
      arrow={true}
      placement="bottom-start"
      theme="custom"
      onClickOutside={handleClearSearch}
      render={(attrs) => (
        <div {...attrs} className={cx("search-results")} tabIndex="-1">
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
                  <img src={result.ImageURL} className={cx("search-img")} />
                  {result.FigureName} - {result.PrimaryType}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    >
      <div className={cx("header-search", { scrolled: isScrolled })}>
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
    </Tippy>
  );
};

export default Search;
