import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Main.css";
import tour1 from "../../../images/tour-01.png";
import tour2 from "../../../images/tour-02.png";
import tour3 from "../../../images/tour-03.png";
import hope1 from "../../../images/hope-01.png";
import hope2 from "../../../images/hope-02.png";
import hope3 from "../../../images/hope-03.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("click");
    history.push("/project");
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="pb-5 my-5 projects">
      <div className="container-md">
        <div>
          <h2 className="pb-3">Some of my work</h2>
          <div className="row">
            <div className="pb-4 col-lg-4 col-sm-6">
              <div
                style={{ background: "#172A45", height: "500px" }}
                className="p-3 text-justify rounded shadow img-animation"
              >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={tour1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={tour2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={tour3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <h3>Go Wash</h3>
                <p>
                  A full-stack single-page web application where customers can
                  book a service for washing their dresses by pay the fees. The
                  website contains a separate dashboard for the admin and user
                </p>
                <div className="px-3 pb-2  technology">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>FontAwesome</span>
                  <span>Firebase</span>
                  <span>Bootstrap</span>
                </div>
                <a
                  style={{
                    fontSize: "30px",
                    marginTop: "auto",
                    marginBottom: "0",
                    paddingRight: "20px",
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakhawat9/GoWash"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  style={{ fontSize: "30px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://laundry-service-48e19.web.app"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
            <div className="pb-4 col-lg-4 col-sm-6">
              <div
                style={{ background: "#172A45", height: "500px" }}
                className="p-3 text-justify rounded shadow cart-style img-animation"
              >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={hope1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={hope2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={hope3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <h3>Fstore</h3>
                <p>
                  Fstore is a professional dynamic e-commerce web application
                  where users can choose and explore product details. Users can
                  select items and can add them to the cart section. Finally can
                  order them from the checkout section.
                </p>
                <div className="px-3 pb-2  technology">
                  <span>React.js</span>
                  <span>Typescript</span>
                  <span>React icon</span>
                  <span>React bootstrap</span>
                  <span>sass</span>
                  <span>eslint</span>
                </div>
                <a
                  style={{ fontSize: "30px", paddingRight: "20px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakhawat9/ecommerce_store"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  style={{ fontSize: "30px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://ecommercestore-alpha.vercel.app"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
            <div className="mb-4 col-lg-4 col-sm-6">
              <div
                style={{ background: "#172A45", height: "500px" }}
                className="p-3 text-justify rounded shadow img-animation"
              >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={hope1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={hope2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={hope1}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <h3>Chart App</h3>
                <p>
                  This is a Communicating website where a person can contact
                  him/her friend & customer community. If a person wants to use
                  this website, he/she must first sign in to the Google
                  Authentication process. They can create Room and contact
                  easily.
                </p>
                <div className="px-3 pb-2  technology">
                  <span>React Redux</span>
                  <span>Redux Toolkit</span>
                  <span>Style Component</span>
                  <span>Material-ui</span>
                  <span>Firebase</span>
                  <span>React Firebase Hook</span>
                </div>
                <div className="">
                  <a
                    className="mt-auto mb-0"
                    style={{
                      fontSize: "30px",
                      marginTop: "auto",
                      marginBottom: "0",
                      paddingRight: "20px",
                    }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sakhawat9/chat-app"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    style={{ fontSize: "30px" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://chat-app-team-78.web.app"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleClick} className="mt-3 btn-brand">
            All Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
