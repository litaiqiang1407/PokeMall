import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Chart as ChartJS } from "chart.js/auto";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Line } from "react-chartjs-2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faDragon,
  faLineChart,
  faMoneyBillTrendUp,
  faMoneyBills,
} from "@fortawesome/free-solid-svg-icons";

import { Title } from "~/components";
import { interactData } from "~/functions/interactData";
import { dashboardURL } from "~/data";

import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
const cx = classNames.bind(styles);

function Dashboard() {
  const [statistic, setStatistic] = useState({});
  const [monthlyStatistic, setMonthlyStatistic] = useState({});
  const [dailyStatistic, setDailyStatistic] = useState({});
  const [filterType, setFilterType] = useState("12_months");
  const [activeFilter, setActiveFilter] = useState("12_months");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [customDateRange, setCustomDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const months = [
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
  ];

  useEffect(() => {
    interactData(dashboardURL, "GET", null, (data) => {
      setStatistic(data);
      setMonthlyStatistic(data.monthlyStatistic);
      setDailyStatistic(data.dailyStatistic);
      console.table(data.dailyStatistic);
    });
  }, []);

  const handleFilterChange = (filter) => {
    setFilterType(filter);
    setActiveFilter(filter);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleCustomDateRangeChange = (startDate, endDate) => {
    // Validate the date format
    const startDateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const endDateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!startDate.match(startDateRegex) || !endDate.match(endDateRegex)) {
      alert("Please enter dates in dd/mm/yyyy format");
      return;
    }

    // Convert input string to Date object
    const startDateObj = new Date(startDate.split("/").reverse().join("-"));
    const endDateObj = new Date(endDate.split("/").reverse().join("-"));

    // Check if start date is before end date
    if (startDateObj > endDateObj) {
      alert("Start date cannot be after end date");
      return;
    }

    setFilterType("custom_range");
    setActiveFilter("custom_range");
    setCustomDateRange({ startDate: startDateObj, endDate: endDateObj });
  };

  // Prepare data for chart
  const chartData = {
    labels:
      filterType === "12_months"
        ? months
        : dailyStatistic.map((item) => item.date),
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
            : dailyStatistic.map((item) => item.revenue),
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
            : dailyStatistic.map((item) => item.profit),
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
            : dailyStatistic.map((item) => item.sold),
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
            <Container>
              <FontAwesomeIcon
                className={cx("header-icon")}
                icon={faLineChart}
              />
              <span className={cx("header-title")}>Statistical Chart</span>
            </Container>
            <Container className={cx("chart-filter")}>
              <div className={cx("filter-container")}>
                <button
                  className={cx("filter-item", {
                    active: activeFilter === "12_months",
                  })}
                  onClick={() => handleFilterChange("12_months")}
                >
                  12 Months
                </button>
                <button
                  className={cx("filter-item", {
                    active: activeFilter === "30_days",
                  })}
                  onClick={() => handleFilterChange("30_days")}
                >
                  30 Days
                </button>
                <button
                  className={cx("filter-item", {
                    active: activeFilter === "custom_range",
                  })}
                  onClick={() => handleFilterChange("custom_range")}
                >
                  Custom Range
                </button>
                {activeFilter === "custom_range" && (
                  <div className={cx("custom-date")}>
                    <DatePicker
                      className={cx("custom-input")}
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Start Date"
                    />
                    <DatePicker
                      className={cx("custom-input")}
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="End Date"
                    />
                    <button
                      className={cx("filter-item")}
                      onClick={() =>
                        handleCustomDateRangeChange(startDate, endDate)
                      }
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
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
