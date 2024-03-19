import { useState, useEffect, useCallback } from "react";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDragon,
  faXmark,
  faMagnifyingGlass,
  faPlus,
  faCircleMinus,
  faPen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import Title from "~/components/Title";
import LoadingAnimation from "~/components/LoadingAnimation";
import ConfirmDialog from "~/components/ConfirmDialog/ConfirmDialog";
import { interactData } from "~/functions/interactData";
import {
  handleResponse,
  handleCheckAll,
  handleCheckItem,
} from "~/functions/eventHandlers";
import { usersURL, deleteUserURL } from "~/data";

import classNames from "classnames/bind";
import styles from "./Users.module.scss";
const cx = classNames.bind(styles);

function Users() {
  const [userItems, setUserItems] = useState([]);
  const [itemID, setItemID] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    interactData(usersURL, "GET", null, (data) => {
      setUserItems(data);
      setLoading(false);
    });
  }, []);

  const handleEditItem = (itemID) => {
    setItemID(itemID);
    setIsEditing(!isEditing);
  };

  const handleDeleteItem = async (itemID) => {
    const isConfirmed = await ConfirmDialog(
      "Are you sure you want to delete this user?"
    );

    if (isConfirmed) {
      interactData(`${deleteUserURL}?userID=${itemID}`, "DELETE", null, () => {
        const newUserItems = userItems.filter((item) => item.ID !== itemID);
        setUserItems(newUserItems);
        handleResponse("User deleted!");
      });
    }
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <Container className={cx("container")}>
      <Title title={"Admin Users - PokeMall"} />
      <Container className={cx("header")}>
        <Container>
          <FontAwesomeIcon icon={faUsers} className={cx("header-icon")} />
          <span className={cx("header-title")}>Users</span>
        </Container>
        <Container className={cx("header-right")}>
          <div className={cx("header-search")}>
            <input
              className={cx("search-input")}
              placeholder="Search for products..."
            />
            <FontAwesomeIcon icon={faXmark} className={cx("clear-search")} />
            <button className={cx("btn-search")}>
              <FontAwesomeIcon
                className={cx("icon-search")}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
          <div className={cx("header-add")}>
            <button className={cx("btn-add")}>
              <FontAwesomeIcon icon={faPlus} className={cx("icon-add")} />
            </button>
          </div>
        </Container>
      </Container>
      <Container className={cx("content")}>
        <table className={cx("table")}>
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
                  <Container className={cx("edit-icon")}>
                    <FontAwesomeIcon
                      icon={faPen}
                      onClick={() => handleEditItem(item.ID)}
                    />
                  </Container>
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
