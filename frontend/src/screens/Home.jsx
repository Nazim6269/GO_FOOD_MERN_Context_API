import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import DisCard from "../Components/Card";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:3000/foodData", {
      method: "POSt",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodCat(response[1]);
    setFoodItems(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
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
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* <Button variant="outline-success text-white bg-success">
                  Search
                </Button> */}
              </div>
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* <Button variant="outline-success text-white bg-success">
                  Search
                </Button> */}
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* <Button variant="outline-success text-white bg-success">
                  Search
                </Button> */}
              </Form>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className=" container mt-4 mx-3 ">
        {foodCat !== "[]" ? (
          foodCat.map((data) => {
            return (
              <div key={data._id} className="">
                <div className="mb-3">
                  <div>{data.CategoryName}</div>
                  <hr />
                  <div className="d-flex justify-content-between flex-wrap">
                    {foodItems !== "[]" ? (
                      foodItems
                        .filter((item) => {
                          return (
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLocaleLowerCase())
                          );
                        })
                        .map((filteredItem) => {
                          return (
                            <div key={filteredItem._id} className="mb-3">
                              <DisCard
                                foodItem={filteredItem}
                                desc={filteredItem.description}
                                options={filteredItem.options[0]}
                              />
                            </div>
                          );
                        })
                    ) : (
                      <div>no such data</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>asdflhdj</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
