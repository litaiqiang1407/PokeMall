import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="../../../../../assets/images/banner1.jpg"
          alt="First Banner"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}></Carousel.Item>
      <Carousel.Item interval={500}></Carousel.Item>
      <Carousel.Item interval={500}></Carousel.Item>
    </Carousel>
  );
}

export default Banner;
