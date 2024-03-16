import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Title from "~/components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLineChart, faMoneyBills } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Dashboard() {
  const [statistic, setStatistic] = useState({});

  return (
    <Container className={cx("container")}>
      <Title title="Dashboard" />
      <Container className={cx("header")}>
        <FontAwesomeIcon className={cx("header-icon")} icon={faLineChart} />
        <span className={cx("header-title")}>Dashboard</span>
      </Container>
      <Container className={cx("content")}>
        <Container className={cx("statistic")}>
          <Row>
            <Col lg={3}>
              <div className={cx("statistic-item")}>
                <div className={cx("statistic-content")}>
                  <span className={cx("statistic-title")}>Products</span>
                  <span className={cx("statistic-value")}>100</span>
                </div>
                <div className={cx("statistic-icon")}>
                  <FontAwesomeIcon icon={faMoneyBills} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default Dashboard;
