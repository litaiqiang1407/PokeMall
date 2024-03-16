import { useState, useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Title from "~/components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faDragon,
  faLineChart,
  faMoneyBillTrendUp,
  faMoneyBills,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className={cx("statistic-products")}>
            <div className={cx("statistic-content")}>
              <div className={cx("statistic-title")}>Products</div>
              <div className={cx("statistic-value")}>
                {statistic.totalProducts}
              </div>
            </div>
            <div className={cx("statistic-icon")}>
              <FontAwesomeIcon icon={faDragon} />
            </div>
          </div>

          <div className={cx("statistic-sold")}>
            <div className={cx("statistic-content")}>
              <div className={cx("statistic-title")}>Sold</div>
              <div className={cx("statistic-value")}>
                {statistic.soldProducts}
              </div>
            </div>
            <div className={cx("statistic-icon")}>
              <FontAwesomeIcon icon={faCoins} />
            </div>
          </div>

          <div className={cx("statistic-item")}>
            <div className={cx("statistic-content")}>
              <div className={cx("statistic-title")}>Revenue</div>
              <div className={cx("statistic-value")}>
                ${parseFloat(statistic.totalRevenue).toFixed(2)}
              </div>
            </div>
            <div className={cx("statistic-icon")}>
              <FontAwesomeIcon icon={faMoneyBills} />
            </div>
          </div>

          <div className={cx("statistic-item")}>
            <div className={cx("statistic-content")}>
              <div className={cx("statistic-title")}>Profit</div>
              <div className={cx("statistic-value")}>
                ${parseFloat(statistic.totalProfit).toFixed(2)}
              </div>
            </div>
            <div className={cx("statistic-icon")}>
              <FontAwesomeIcon icon={faMoneyBillTrendUp} />
            </div>
          </div>
        </Container>
      </Container>
    </Container>
  );
}

export default Dashboard;
