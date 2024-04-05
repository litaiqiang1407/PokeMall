import { handleCheckAll, handleCheckItem } from "~/functions/eventHandlers";

import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Table({ isCheckbox, isAction, columns, items }) {
  const [itemID, setItemID] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

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
  const renderBodyCheckbox = (item) => {
    return (
      <td className={cx("body-col")}>
        <input
          className={cx("body-checkbox")}
          type="checkbox"
          onChange={(e) =>
            handleCheckItem(item.ID, e.target.checked, setCheckedItems)
          }
          checked={checkedItems.includes(item.ID)}
        />
      </td>
    );
  };

  const renderBodyAction = (item) => {
    return (
      <>
        <td className={cx("body-col")}>
          <FontAwesomeIcon icon={faPen} />
        </td>
        <td className={cx("body-col")}>
          <FontAwesomeIcon icon={faPen} />
        </td>
      </>
    );
  };

  const renderBody = () => {
    return (
      <tbody>
        {items.map((item) => (
          <tr key={item.ID}>
            {isCheckbox && renderBodyCheckbox(item)}
            {columns.map((column) => (
              <td key={column}>{renderItemField(item, column)}</td>
            ))}
            {isAction && renderBodyAction(item)}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table>
      {renderHeader()}
      {renderBody()}
    </table>
  );
}

export default Table;
