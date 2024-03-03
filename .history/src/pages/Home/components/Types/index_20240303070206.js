import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import { Container } from "react-bootstrap";

const cx = classNames.bind(styles);

function Types() {
  return 
 ( <Container fluid>
    <Container className={cx("types-container")}>
      <Container className={cx("types-header")}>Types</Container>
      <Container className={cx("types-content")}>
        <Container className={cx("types-content-item")}>
          <Container className={cx("types-content-item-img")}>
            <img src={require("../../../assets/images/1.png")} alt="type" />
          </Container>
          <Container className={cx("types-content-item-title")}>Type 1</Container>
         
        </Container>
        <Container className={cx("types-content-item")}>
          <Container className={cx("types-content-item-img")}>
            <img src={require("../../../assets/images/2.png")} alt="type" />
          </Container>
          <Container className={cx("types-content-item-title")}>Type 2</Container>
          
        </Container>
        <Container className={cx("types-content-item")}>
          <Container className={cx("types-content-item-img")}>
            <img src={require("../../../assets/images/3.png")} alt="type" />
          </Container>
          <Container className={cx("types-content-item-title")}>Type 3</Container>
          
        </Container>
      </Container>
    </Container>
  </Container>
  )
}

export default Types;
