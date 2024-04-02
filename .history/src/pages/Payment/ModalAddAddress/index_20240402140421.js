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

import { interactThirdParty } from "~/functions/interactData";
import { districtURL, provinceURL, tokenGHN, wardURL } from "~/data";

import classNames from "classnames/bind"; // CSS Module
import styles from "./Payment.module.scss"; // CSS Module
import ModalMyAddress from "./ModalMyAddress";
const cx = classNames.bind(styles); // CSS Module

function ModalAddAddress() {
  return (
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
                value={address}
                type="text"
                placeholder="Province/City, District, Ward/Commune"
                className={cx("form-input")}
                onClick={handleShowAddressSelection}
              />
              <FontAwesomeIcon
                className={cx("search-icon")}
                icon={faMagnifyingGlass}
              />
              <FontAwesomeIcon className={cx("down-icon")} icon={faCaretDown} />
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
                      onClick={() => handleActiveTab("province")}
                    >
                      <Nav.Link className={cx("item-link")}>
                        Province/City
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      className={cx("header-item", {
                        active: activeTab === "district",
                      })}
                      onClick={() => handleActiveTab("district")}
                    >
                      <Nav.Link className={cx("item-link")}>District</Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      className={cx("header-item", {
                        active: activeTab === "ward",
                      })}
                      onClick={() => handleActiveTab("ward")}
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
                                handleGetDistrict(
                                  province.ProvinceID,
                                  province.ProvinceName
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
                                handleGetWard(
                                  district.DistrictID,
                                  district.DistrictName
                                )
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
                            <li
                              key={index}
                              className={cx("address-item")}
                              onClick={() =>
                                handleGetFullAddress(ward.WardName)
                              }
                            >
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
  );
}

export default ModalAddAddress;
