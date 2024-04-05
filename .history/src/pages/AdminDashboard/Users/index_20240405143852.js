import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCircleMinus,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import { LoadingAnimation, Title } from "~/components";
import { interactData } from "~/functions/interactData";
import {
  handleCheckAll,
  handleCheckItem,
  handleDeleteItems,
} from "~/functions/eventHandlers";
import { usersURL, deleteUserURL } from "~/data";

import classNames from "classnames/bind";
import styles from "./Users.module.scss";
const cx = classNames.bind(styles);

function Users() {
  const [columns, setColumns] = useState([]);
  const [userItems, setUserItems] = useState([]);
  const [itemID, setItemID] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    interactData(usersURL, "GET", null, (data) => {
      setUserItems(data.users);
      setColumns(data.columns);
      setLoading(false);
    });
  }, []);

  const handleEditItem = (itemID) => {
    setItemID(itemID);
    setIsEditing(!isEditing);
  };

  const handleDeleteItem = (itemID) => {
    const deleteURL = `${deleteUserURL}?userID=${itemID}`;
    handleDeleteItems(itemID, setUserItems, userItems, deleteURL);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <Container className={cx("container")}>
      <Title title={"Admin Users - PokeMall"} />
      <div className={cx("add")}>
        <button className={cx("btn-add")}>
          <FontAwesomeIcon icon={faPlus} className={cx("icon-add")} />
          {"    "}Add User
        </button>
      </div>
      <Container className={cx("content")}>
        <table className={cx("table table-hover")}>
          <thead>
            <tr className={cx("header-row")}>
              <th className={cx("header-col")} scope="col">
                <input
                  className={cx("header-checkbox")}
                  type="checkbox"
                  onChange={(e) => {
                    handleCheckAll(
                      e.target.checked,
                      userItems,
                      setCheckedItems
                    );
                  }}
                  checked={checkedItems.length === userItems.length}
                />
              </th>
              <th className={cx("header-col")} scope="col">
                ID
              </th>
              <th className={cx("header-col")} scope="col">
                Username
              </th>
              <th className={cx("header-col")} scope="col">
                Name
              </th>
              <th className={cx("header-col")} scope="col">
                Mail
              </th>
              <th className={cx("header-col")} scope="col">
                Phone
              </th>
              <th className={cx("header-col")} scope="col">
                Edit
              </th>
              <th className={cx("header-col")} scope="col">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {userItems.map((item) => (
              <tr className={cx("product-row")} key={item.ID}>
                <td className={cx("product-col")}>
                  <input
                    className={cx("product-checkbox")}
                    type="checkbox"
                    onChange={(e) =>
                      handleCheckItem(
                        item.ID,
                        e.target.checked,
                        setCheckedItems
                      )
                    }
                    checked={checkedItems.includes(item.ID)}
                  />
                </td>
                <td className={cx("product-col")}>
                  <span className={cx("id")}>{item.ID}</span>
                </td>
                <td className={cx("product-col")}>
                  {isEditing && item.ID === itemID ? (
                    <input
                      className={cx("input-username")}
                      value={item.Username}
                    />
                  ) : (
                    <span className={cx("username")}>{item.Username}</span>
                  )}
                </td>
                <td className={cx("product-col")}>
                  {isEditing && item.ID === itemID ? (
                    <input className={cx("input-name")} value={item.Name} />
                  ) : (
                    <span className={cx("name")}>{item.Name}</span>
                  )}
                </td>
                <td className={cx("product-col")}>
                  {isEditing && item.ID === itemID ? (
                    <input className={cx("input-email")} value={item.Email} />
                  ) : (
                    <span className={cx("email")}>{item.Email}</span>
                  )}
                </td>
                <td className={cx("product-col")}>
                  {isEditing && item.ID === itemID ? (
                    <input className={cx("input-phone")} value={item.Phone} />
                  ) : (
                    <span className={cx("price")}>{item.Phone}</span>
                  )}
                </td>
                <td className={cx("product-col")}>
                  {isEditing && item.ID === itemID ? (
                    <button type="submit" className={cx("btn-save")}>
                      Save
                    </button>
                  ) : (
                    <Container className={cx("edit-icon")}>
                      <FontAwesomeIcon
                        icon={faPen}
                        onClick={() => handleEditItem(item.ID)}
                      />
                    </Container>
                  )}
                </td>
                <td className={cx("product-col")}>
                  <Container className={cx("delete-icon")}>
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      onClick={() => handleDeleteItem(item.ID)}
                    />
                  </Container>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Container>
  );
}

export default Users;
