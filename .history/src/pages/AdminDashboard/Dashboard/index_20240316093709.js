import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { Container } from "react-bootstrap";
import Title from "~/components/Title";
const cx = classNames.bind(styles);

function Dashboard() {
  return (
    <Container className={cx("container")}>
      <Title title="Dashboard" />
    </Container>
  );
}

export default Dashboard;
