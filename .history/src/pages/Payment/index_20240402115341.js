import { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Form, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCaretDown,
  faLocationDot,
  faMagnifyingGlass,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { Title } from "~/components";

import classNames from "classnames/bind"; // CSS Module
import styles from "./Payment.module.scss"; // CSS Module
import { interactThirdParty } from "~/functions/interactData";
const cx = classNames.bind(styles); // CSS Module

function Payment() {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
  });
  const [showMyAddress, setShowMyAddress] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showAddressSelection, setShowAddressSelection] = useState(false);
  const [activeTab, setActiveTab] = useState("province");
  const [listProvince, setListProvince] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);
  const [listWard, setListWard] = useState([]);
  const token = "1b0b8661-f01c-11ee-b1d4-92b443b7a897";
  const apiUrlProvince =
    "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province";
  const apiUrlDistrict =
    "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district";
  const apiUrlWard =
    "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward";

  const handleCloseMyAddress = () => setShowMyAddress(false);
  const handleShowMyAddress = () => setShowMyAddress(true);

  const handleCloseAddAddress = () => setShowAddAddress(false);
  const handleShowAddAddress = () => {
    setShowMyAddress(false);
    setShowAddAddress(true);
  };

  const handleBack = () => {
    setShowAddAddress(false);
    setShowMyAddress(true);
  };

  const handleShowAddressSelection = () => setShowAddressSelection(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  useEffect(() => {
    // Fetch list of provinces
    interactThirdParty(
      apiUrlProvince,
      "GET",
      null,
      (data) => {
        const sortedProvinces = data.data.sort((a, b) =>
          a.ProvinceName.localeCompare(b.ProvinceName)
        );
        setListProvince(sortedProvinces);
      },
      token
    );
  }, []);

  console.table(listProvince);
  console.table(listDistrict);

  const handleGetAddress = (addressUnit, id) => {
    setActiveTab(addressUnit);
    let apiUrl = "";
    if (addressUnit === "district") {
      apiUrl = `${apiUrlDistrict}?${id}`;
    }
    if (addressUnit === "ward") {
      apiUrl = `${apiUrlDistrict}?${id}`;
    }
    interactThirdParty(
      apiUrl,
      "GET",
      null,
      (data) => {
        if (addressUnit === "district") {
          setListDistrict(data.data);
        }
        if (addressUnit === "ward") {
          setListWard(data.data);
        }
      },
      token
    );
  };
  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Title title="Payment - PokeMall" />
      {/* Header */}
      <Container className={cx("payment-header")}>
        <FontAwesomeIcon icon={faReceipt} className={cx("payment-icon")} />
        <span className={cx("header-title")}>Payment</span>
      </Container>

      {/* Delivery Address */}
      <Container className={cx("delivery-address")}>
        <Container className={cx("address-header")}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={cx("address-icon")}
          />
          <span className={cx("header-title")}>Delivery Address</span>
        </Container>
        <Container className={cx("address-content")}>
          <Row>
            <Col lg={2}>
              <Container className={cx("user-info")}>
                <span className={cx("info-content")}>{userData.name}</span>
                <span className={cx("info-content")}>{userData.phone}</span>
              </Container>
            </Col>
            <Col lg={8}>
              <Container className={cx("address")}>
                <span className={cx("address-content")}>
                  Jl. Pallet No. 1, Pallet Town, Kanto
                </span>
              </Container>
            </Col>
            <Col lg={2}>
              <Container className={cx("change-address")}>
                <button
                  className={cx("btn-change")}
                  onClick={handleShowMyAddress}
                >
                  Change Address
                </button>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* My Address */}
      <Modal
        className={cx("my-address-modal")}
        show={showMyAddress}
        onHide={handleCloseMyAddress}
        dialogClassName="modal-50w"
        centered
      >
        <Modal.Header closeButton className={cx("modal-header")}>
          <Modal.Title className={cx("modal-title")}>My address</Modal.Title>
        </Modal.Header>
        <Modal.Body className={cx("modal-body")}>
          <button className={cx("btn-add")} onClick={handleShowAddAddress}>
            <FontAwesomeIcon icon={faAdd} className={cx("add-icon")} />
            Add New Address
          </button>
        </Modal.Body>
        <Modal.Footer>
          <button className={cx("btn-second")} onClick={handleCloseMyAddress}>
            Cancel
          </button>
          <button className={cx("btn-primary")} onClick={handleCloseMyAddress}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>

      {/* Add Address */}
      <Modal
        className={cx("add-address-modal")}
        show={showAddAddress}
        onHide={handleCloseAddAddress}
        dialogClassName="modal-50w"
        centered
      >
        <Modal.Header className={cx("modal-header")} closeButton>
          <Modal.Title className={cx("modal-title")}>New address</Modal.Title>
        </Modal.Header>
        <Modal.Body className={cx("modal-body")}>
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group className={cx("form-field")}>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className={cx("form-input")}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className={cx("form-field")}>
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    className={cx("form-input")}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className={cx("form-field")}>
              <div className={cx("address-input__container")}>
                <Form.Control
                  type="text"
                  placeholder="Province/City, District, Ward/Commune"
                  className={cx("form-input")}
                  onClick={handleShowAddressSelection}
                />
                <FontAwesomeIcon
                  className={cx("search-icon")}
                  icon={faMagnifyingGlass}
                />
                <FontAwesomeIcon
                  className={cx("down-icon")}
                  icon={faCaretDown}
                />
                {showAddressSelection && (
                  <div
                    className={cx("address-selection", {
                      active: showAddressSelection,
                    })}
                  >
                    <Nav className={cx("address-header")}>
                      <Nav.Item
                        className={cx("header-item", {
                          active: activeTab === "province",
                        })}
                        onClick={() => handleGetAddress("province")}
                      >
                        <Nav.Link className={cx("item-link")}>
                          Province/City
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        className={cx("header-item", {
                          active: activeTab === "district",
                        })}
                        onClick={() => handleGetAddress("district")}
                      >
                        <Nav.Link className={cx("item-link")}>
                          District
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        className={cx("header-item", {
                          active: activeTab === "ward",
                        })}
                        onClick={() => handleGetAddress("ward")}
                      >
                        <Nav.Link className={cx("item-link")}>
                          Ward/Commune
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <div className={cx("address-container")}>
                      {activeTab === "province" && (
                        <div className={cx("province")}>
                          <ul className={cx("address-list")}>
                            {listProvince.map((province, index) => (
                              <li
                                key={index}
                                className={cx("address-item")}
                                onClick={() =>
                                  handleGetAddress(
                                    "district",
                                    province.ProvinceID
                                  )
                                }
                              >
                                {province.ProvinceName}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {activeTab === "district" && (
                        <div className={cx("district")}>
                          <ul className={cx("address-list")}>
                            {listDistrict.map((district, index) => (
                              <li
                                key={index}
                                className={cx("address-item")}
                                onClick={() =>
                                  handleGetAddress("ward", district.DistrictID)
                                }
                              >
                                {district.DistrictName}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {activeTab === "ward" && (
                        <div className={cx("ward")}>
                          <ul className={cx("address-list")}>
                            {listWard.map((ward, index) => (
                              <li key={index} className={cx("address-item")}>
                                {ward.WardName}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Form.Group>
            <Form.Group className={cx("form-field")}>
              <Form.Control
                as="textarea"
                placeholder="Specific Address"
                className={cx("form-input")}
                rows={2}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className={cx("btn-second")} onClick={handleBack}>
            Back
          </button>
          <button className={cx("btn-primary")} onClick={handleCloseMyAddress}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Payment;