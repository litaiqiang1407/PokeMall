import { Container, Image } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <Container className={cx("banner")}>
      <Image
        className={cx("banner-img")}
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/852748e6-b2d7-4646-9afa-d041e10a617c/d34ow91-29b53a92-39d0-4616-bd82-c0438f19daff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1Mjc0OGU2LWIyZDctNDY0Ni05YWZhLWQwNDFlMTBhNjE3Y1wvZDM0b3c5MS0yOWI1M2E5Mi0zOWQwLTQ2MTYtYmQ4Mi1jMDQzOGYxOWRhZmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S8tVa0Up087IA7HN_9M76PMYowfCpTYF2Ans9A5T4V8"
      />
    </Container>
  );
}

export default Banner;
