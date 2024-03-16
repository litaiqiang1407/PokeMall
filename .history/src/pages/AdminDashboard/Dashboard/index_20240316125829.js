import { useState, useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Title from "~/components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLineChart, faMoneyBills } from "@fortawesome/free-solid-svg-icons";

import { interactData } from "~/functions/interactData";

import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
const cx = classNames.bind(styles);

function Dashboard() {
  const [statistic, setStatistic] = useState([]);

  useEffect(() => {
    interactData(
      "http://localhost/pokemall/api/Dashboard.php",
      "GET",
      null,
      (data) => {
        setStatistic(data);
        console.log(data);
      }
    );
  }, []);

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
                  <span className={cx("statistic-value")}>
                    {statistic.totalProducts}
                  </span>
                </div>
                <div className={cx("statistic-icon")}>
                  <FontAwesomeIcon icon={faMoneyBills} />
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={cx("statistic-item")}>
                <div className={cx("statistic-content")}>
                  <span className={cx("statistic-title")}>Sold</span>
                  <span className={cx("statistic-value")}>
                    {statistic.soldProducts}
                  </span>
                </div>
                <div className={cx("statistic-icon")}>
                  <FontAwesomeIcon icon={faMoneyBills} />
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={cx("statistic-item")}>
                <div className={cx("statistic-content")}>
                  <span className={cx("statistic-title")}>Revenue</span>
                  <span className={cx("statistic-value")}>
                    {statistic.totalProducts}
                  </span>
                </div>
                <div className={cx("statistic-icon")}>
                  <FontAwesomeIcon icon={faMoneyBills} />
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={cx("statistic-item")}>
                <div className={cx("statistic-content")}>
                  <span className={cx("statistic-title")}>Profit</span>
                  <span className={cx("statistic-value")}>
                    {statistic.totalProfit}
                  </span>
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
