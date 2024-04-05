import classNames from "classnames/bind";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);

function Table() {
  const renderHeaderCheckbox = () => {
    return (
      <th className={cx("header-col")} scope="col">
        <input
          className={cx("header-checkbox")}
          type="checkbox"
          onChange={(e) => {
            handleCheckAll(e.target.checked, setCheckedItems, productItems);
          }}
          checked={checkedItems.length === productItems.length}
        />
      </th>
    );
  };
  return <table></table>;
}

export default Table;
