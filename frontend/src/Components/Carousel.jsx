import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";

const Slider = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item id="carousel-item">
          <img
            className="d-block w-100"
            style={{
              filter: "brightness(30%)",
              objectFit: "contain !important",
            }}
            src="https://source.unsplash.com/random/900×700/?pastry"
            alt="First slide"
          />
          <Carousel.Caption>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success text-white bg-success">
                Search
              </Button>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="carousel-item">
          <img
            className="d-block w-100 "
            style={{
              filter: "brightness(30%)",
              objectFit: "contain !important",
            }}
            src="https://source.unsplash.com/random/900×700/?barbeque"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success text-white bg-success">
                Search
              </Button>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="carousel-item">
          <img
            className="d-block w-100"
            style={{
              filter: "brightness(30%)",
              objectFit: "contain !important",
            }}
            src="https://source.unsplash.com/random/900×700/?pizza"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success text-white bg-success">
                Search
              </Button>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
