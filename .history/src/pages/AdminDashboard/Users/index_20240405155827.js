import { useState, useEffect } from "react";

import { Container, Tab } from "react-bootstrap";
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
import Table from "~/components/Table";
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
        <Table
          isCheckbox={true}
          isAction={true}
          columns={columns}
          items={userItems}
        />
      </Container>
    </Container>
  );
}

export default Users;
