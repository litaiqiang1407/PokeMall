import { useState, useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faDragon,
  faLineChart,
  faMoneyBillTrendUp,
  faMoneyBills,
} from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import Title from "~/components/Title";
import { interactData } from "~/functions/interactData";

import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
const cx = classNames.bind(styles);

function Dashboard() {
  const [statistic, setStatistic] = useState({});
  const [monthlyStatistic, setMonthlyStatistic] = useState({});
  const [dailyStatistic, setDailyStatistic] = useState({});
  const [filterType, setFilterType] = useState("12_months");

  useEffect(() => {
    interactData(
      "http://localhost/pokemall/api/Dashboard.php",
      "GET",
      null,
      (data) => {
        setStatistic(data);
        setMonthlyStatistic(data.monthlyStatistic);
        setDailyStatistic(data.dailyStatistic);
      }
    );
  }, []);

  const handleFilterChange = (filter) => {
    setFilterType(filter);
    console.log(filter);
  };

  console.table(monthlyStatistic);

  // Prepare data for chart
  const chartData = {
    labels:
      filterType === "12_months"
        ? [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]
        : dailyStatistic.date,
    datasets: [
      {
        label: "Revenue",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(220, 252, 231)",
        borderColor: "rgba(60, 216, 86)",
        borderWidth: 2,
        data:
          filterType === "12_months"
            ? monthlyStatistic.revenue
            : dailyStatistic.revenue,
      },
      {
        label: "Profit",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(243, 232, 255)",
        borderColor: "rgba(191, 131, 255)",
        borderWidth: 2,
        data:
          filterType === "12_months"
            ? monthlyStatistic.profit
            : dailyStatistic.profit,
      },
      {
        label: "Sold",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(255, 244, 222)",
        borderColor: "rgba(255, 148, 122)",
        borderWidth: 2,
        data:
          filterType === "12_months"
            ? monthlyStatistic.sold
            : dailyStatistic.sold,
      },
    ],
  };

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
            <div className={cx("icon-product")}>
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
            <div className={cx("icon-sold")}>
              <FontAwesomeIcon icon={faCoins} />
            </div>
          </div>

          <div className={cx("statistic-revenue")}>
            <div className={cx("statistic-content")}>
              <div className={cx("statistic-title")}>Revenue</div>
              <div className={cx("statistic-value")}>
                ${parseFloat(statistic.totalRevenue).toFixed(2)}
              </div>
            </div>
            <div className={cx("icon-revenue")}>
              <FontAwesomeIcon icon={faMoneyBills} />
            </div>
          </div>

          <div className={cx("statistic-profit")}>
            <div className={cx("statistic-content")}>
              <div className={cx("statistic-title")}>Profit</div>
              <div className={cx("statistic-value")}>
                ${parseFloat(statistic.totalProfit).toFixed(2)}
              </div>
            </div>
            <div className={cx("icon-profit")}>
              <FontAwesomeIcon icon={faMoneyBillTrendUp} />
            </div>
          </div>
        </Container>
        <Container className={cx("chart")}>
          <Container className={cx("chart-header")}>
            <div>
              <FontAwesomeIcon
                className={cx("header-icon")}
                icon={faLineChart}
              />
              <span className={cx("header-title")}>Statistical Cart</span>
            </div>
            <Container className={cx("chart-filter")}>
              <button
                className={cx("chart-filter-item")}
                onClick={() => handleFilterChange("12_months")}
              >
                12 Months
              </button>
              <button
                className={cx("chart-filter-item")}
                onClick={() => handleFilterChange("30_days")}
              >
                30 Days
              </button>
            </Container>
          </Container>
          <Container className={cx("chart-content")}>
            <Row>
              <Col>
                <Line
                  data={chartData}
                  options={{
                    title: {
                      display: true,
                      text: "Revenue Over 12 Months",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Dashboard;
