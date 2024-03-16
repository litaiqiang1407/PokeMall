import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { Container } from "react-bootstrap";
import Title from "~/components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLineChart } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Dashboard() {
  return (
    <Container className={cx("container")}>
      <Title title="Dashboard" />
      <Container className={cx("header")}>
        <FontAwesomeIcon icon={faLineChart} />
        <span></span>Dashboard</span>
      </Container>
    </Container>
  );
}

export default Dashboard;
