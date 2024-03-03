import { Container, Row, Col } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer>
      <Container fluid className={cx("footer-container")}>
        <Container className={cx("footer-content")}>
          <Row>
            <Col lg={3} className={cx("footer-item")}>
              <h3 className={cx("footer-item__header")}>
                About PokeMall Figure Shop
              </h3>
              <p className={cx("footer-item__content")}>
                Introducing PokeMall Figure Shop
              </p>
            </Col>
            <Col lg={3} className={cx("footer-item")}>
              <h3 className={cx("footer-item__header")}>Customer Care</h3>
              <p className={cx("footer-item__content")}>Help Center</p>
            </Col>
            <Col lg={3} className={cx("footer-item")}>
              <h3 className={cx("footer-item__header")}>Payment Methods</h3>
              <Row className={cx("footer-item__content")}>
                <Col lg={6}>
                  <img
                    src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/mastercard-alt.svg?sanitize=true"
                    alt="MasterCard"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/visa.svg?sanitize=true"
                    alt="VISA"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/apple-pay.svg?sanitize=true"
                    alt="Apple Pay"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/apm/paypal.svg?sanitize=true"
                    alt="Paypal"
                    width={80}
                    height={80}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={3} className={cx("footer-item")}>
              <h3 className={cx("footer-item__header")}>Shipping Methods</h3>
              <Row className={cx("footer-item__content")}>
                <Col lg={6}>
                  <img
                    src="https://www.jtexpress.io/wp-content/uploads/2022/12/j-T-Express-Egypt-Tracking.png"
                    alt="J&T"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/273779379_485336033308171_5141497119883265807_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=596444&_nc_eui2=AeEH_zD1018az_uFzK5hRMpXOxqUhJgIe_A7GpSEmAh78AFy6Sv-4j4_CX0HzRJzxAHAY9Q_raFcPYlz4jrM8wjT&_nc_ohc=kR99_pczsh8AX9wyxr2&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCKIviVhnxCEdHdUUNRnM6Es02Ras7VDowlto8CjJvq_g&oe=65E9F2B6"
                    alt="NinjaVan"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://logosandtypes.com/wp-content/uploads/2020/08/vietnam-post.png"
                    alt="VietnamPost"
                    width={80}
                    height={80}
                  />
                </Col>
                <Col lg={6}>
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Viettel-Post-Red.png"
                    alt="ViettelPost"
                    width={80}
                    height={80}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid className={cx("footer-footer")}>
          Copyright © 2024 PokeMall. Powered by CuongLT{" "}
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;
