import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx("banner-container")}>
      <video className={cx("banner-video")} autoPlay loop muted>
        <source src="../path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Banner;
