import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { LoadingAnimation, Title } from "~/components";
import { interactData } from "~/functions/interactData";
import { handleDeleteItems } from "~/functions/eventHandlers";
import { usersURL, deleteUserURL } from "~/data";

import Table from "~/components/Table";

import classNames from "classnames/bind";
import styles from "./Users.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Users() {
  const [columns, setColumns] = useState([]);
  const [userItems, setUserItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    interactData(usersURL, "GET", null, (data) => {
      setUserItems(data.users);
      setColumns(data.columns);
      setLoading(false);
    });
  }, []);

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
        <Link to={"/admin/users/add-user"} className={cx("btn-add")}>
          <FontAwesomeIcon icon={faPlus} className={cx("icon-add")} />
          <span className={cx("btn-content")}>Add User</span>
        </Link>
      </div>
      <Container className={cx("content")}>
        <Table
          isCheckbox={true}
          isAction={true}
          columns={columns}
          items={userItems}
          ID={handleDeleteItem}
        />
      </Container>
      <Toaster />
    </Container>
  );
}

export default Users;
