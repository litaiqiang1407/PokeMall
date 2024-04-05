import { handleCheckAll, handleCheckItem } from "~/functions/eventHandlers";

import classNames from "classnames/bind";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);

function Table({ isCheckbox, isAction, columns, items }) {
  const [itemID, setItemID] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          {isCheckbox && renderHeaderCheckbox()}
          {columns.map((column) => (
            <th className={cx("header-col")} scope="col" key={column}>
              {column}
            </th>
          ))}
          {isAction && renderHeaderAction()}
        </tr>
      </thead>
    );
  };

  const renderHeaderCheckbox = () => {
    return (
      <th className={cx("header-col")} scope="col">
        <input
          className={cx("header-checkbox")}
          type="checkbox"
          onChange={(e) => {
            handleCheckAll(e.target.checked, setCheckedItems, items);
          }}
          checked={checkedItems.length === items.length}
        />
      </th>
    );
  };

  const renderHeaderAction = () => {
    return (
      <>
        <th className={cx("header-col")} scope="col">
          Edit
        </th>
        <th className={cx("header-col")} scope="col">
          Delete
        </th>
      </>
    );
  };

  return <table></table>;
}

export default Table;
