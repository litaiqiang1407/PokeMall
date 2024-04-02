function ModalMyAddress() {
    return ( <Modal
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
 );
}

export default ModalMyAddress;