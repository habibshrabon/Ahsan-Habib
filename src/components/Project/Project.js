import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Project.css";
import { Carousel } from "react-bootstrap";
import tour1 from "../../images/tour-01.png";
import tour2 from "../../images/tour-02.png";
import tour3 from "../../images/tour-03.png";
import hope1 from "../../images/hope-01.png";
import hope2 from "../../images/hope-02.png";
import hope3 from "../../images/hope-03.png";

const Project = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="mb-5 projects">
      <div className="container-md">
        <h1 className="pb-3 text-center">ALL PROJECT</h1>
        <div className="row">
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
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
                website contains a separate dashboard for the admin and user.
              </p>
              <div className="px-3 pb-2 row technology">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MOngoDB</span>
                <span>Material-ui</span>
                <span>Stripe.js</span>
                <span>FontAwesome</span>
                <span>Firebase</span>
                <span>Bootstrap</span>
              </div>
              <a
                style={{ fontSize: "30px", paddingRight: "20px" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sakhawat9/GoWash"
              >
                {/* <FontAwesomeIcon icon={faGithub} /> */}
              </a>
              <a
                style={{ fontSize: "30px" }}
                target="_blank"
                rel="noreferrer"
                href="https://laundry-service-48e19.web.app"
              >
                {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
              </a>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
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
              <div className="px-3 pb-2 row technology text-white">
                <span>React.js</span>
                <span>React-redux</span>
                <span>Typescript</span>
                <span>React icon</span>
                <span>React bootstrap</span>
                <span>sass</span>
                <span>eslint</span>
                <span>vercel</span>
              </div>
              <a
                style={{ fontSize: "30px", paddingRight: "20px" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sakhawat9/ecommerce_store"
              >
                {/* <FontAwesomeIcon icon={faGithub} /> */}
              </a>
              <a
                style={{ fontSize: "30px" }}
                target="_blank"
                rel="noreferrer"
                href="https://ecommercestore-alpha.vercel.app"
              >
                {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
              </a>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={fstore}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={fstore2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={fstore3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Nilam</h3>
              <p>
                Nilam is a professional and minimal-looking domain selling
                template. Nilam is made with working contact forms with Google
                SMTP. It comes with six unique layouts which include tons of
                sections, customization options, and features for multiple
                purposes.
              </p>
              <div className="px-3 pb-2 row technology">
                <span>React.js</span>
                <span>Next.js</span>
                <span>Typescript</span>
                <span>React icon</span>
                <span>Tallwind CSS</span>
                <span>Nodemailer</span>
                <span>react-toastify</span>
                <span>axios</span>
                <span>vercel</span>
              </div>
              <a
                style={{ fontSize: "30px", paddingRight: "20px" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/foysalimran/nilam"
              >
                {/* <FontAwesomeIcon icon={faGithub} /> */}
              </a>
              <a
                style={{ fontSize: "30px" }}
                target="_blank"
                rel="noreferrer"
                href="https://nilam-demo.vercel.app"
              >
                {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
              </a>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={chart_app01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={chart_app02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={chart_app03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Chart App</h3>
              <p>
                This is a Communicating website where a person can contact
                him/her friend & customer community. If a person wants to use
                this website, he/she must first sign in to the Google
                Authentication process. They can create Room and contact easily.
              </p>
              <div className="px-3 pb-2 row technology">
                <span>React Redux</span>
                <span>Redux Toolkit</span>
                <span>Style Component</span>
                <span>Material-ui</span>
                <span>Firebase</span>
                <span>React Firebase Hook</span>
              </div>
              <div>
                <a
                  style={{ fontSize: "30px", paddingRight: "20px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakhawat9/chat-app"
                >
                  {/* <FontAwesomeIcon icon={faGithub} /> */}
                </a>
                <a
                  style={{ fontSize: "30px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://chat-app-team-78.web.app"
                >
                  {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
                </a>
              </div>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation ">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={fast_repair01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={fast_repair02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={fast_repair03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Fast Repair</h3>
              <p>
                A full-stack single-page web application where customers can
                book a service for repairing their smart phone by pay the fees.
                The website contains a separate dashboard for admin and user.
              </p>
              <div className="px-3 pb-2 row technology">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MOngoDB</span>
                <span>Material-ui</span>
                <span>Stripe.js</span>
                <span>FontAwesome</span>
                <span>Firebase</span>
                <span>React bootstrap</span>
              </div>
              <a
                style={{ fontSize: "30px", paddingRight: "20px" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sakhawat9/fast-repair"
              >
                {/* <FontAwesomeIcon icon={faGithub} /> */}
              </a>
              <a
                style={{ fontSize: "30px" }}
                target="_blank"
                rel="noreferrer"
                href="https://fast-repair-c13c2.web.app"
              >
                {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
              </a>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={daily_mart01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={daily_mart02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={daily_mart03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Daily Mart</h3>
              <p>
                A full-stack single-page web application where users can choose,
                explore and order food by submitting relevant information.
              </p>
              <div className="px-3 pb-2 row technology">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MOngoDB</span>
                <span>Material-ui</span>
                <span>FontAwesome</span>
                <span>Firebase</span>
                <span>React bootstrap</span>
              </div>
              <a
                style={{ fontSize: "30px", paddingRight: "20px" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sakhawat9/Daily-Mart"
              >
                {/* <FontAwesomeIcon icon={faGithub} /> */}
              </a>
              <a
                style={{ fontSize: "30px" }}
                target="_blank"
                rel="noreferrer"
                href="https://fresh-valley-e1a56.web.app"
              >
                {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
              </a>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={doctors_portal01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={doctors_portal02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={doctors_portal03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Doctors Portal</h3>
              <p>
                A single-page web app with a dashboard where people can pick the
                date and time and fix an appointment. A doctor can review his
                appointments and prescribe medicine to a Patient from his
                dashboard.
              </p>
              <div className="px-3 pb-2 row technology">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MOngoDB</span>
                <span>Material-ui</span>
                <span>FontAwesome</span>
                <span>Firebase</span>
                <span>React bootstrap</span>
              </div>
              <a
                style={{ fontSize: "30px", paddingRight: "20px" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sakhawat9/doctors-portal-main"
              >
                {/* <FontAwesomeIcon icon={faGithub} /> */}
              </a>
              <a
                style={{ fontSize: "30px" }}
                target="_blank"
                rel="noreferrer"
                href="https://doctors-portal-ac941.web.app"
              >
                {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
              </a>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={volunteer01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={volunteer02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={volunteer03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>volunteer_networks</h3>
              <p>
                A single-page web app. Admin can add any event and he can see
                all events. Users can register for an event and see all
                registered event details. with a dashboard where people can pick
                the date and time and fix an appointment.{" "}
              </p>
              <div className="px-3 pb-2 row technology">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MOngoDB</span>
                <span>Material-ui</span>
                <span>FontAwesome</span>
                <span>Firebase</span>
                <span>React bootstrap</span>
              </div>
              <a
                style={{ fontSize: "30px", paddingRight: "20px" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sakhawat9/volunteer-network"
              >
                {/* <FontAwesomeIcon icon={faGithub} /> */}
              </a>
              <a
                style={{ fontSize: "30px" }}
                target="_blank"
                rel="noreferrer"
                href="https://volunteer-network-3bcf3.web.app"
              >
                {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
              </a>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={portfolio}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={portfolio2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={portfolio3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Portfolio Website</h3>
              <p>
                A frontend single-page web application. Which is a developer
                portfolio application. All the function of the site works
                smoothly including contact form. This amazing - minimalistic -
                animated application is made using Next.js, Tailwind CSS,
                TypeScript (Heart for this ) & Framer Motion.
              </p>
              <div className="px-3 pb-2 row technology">
                <span>React</span>
                <span>Next.js</span>
                <span>Typescript</span>
                <span>Nodemailer</span>
                <span>React Toastify</span>
                <span>React Hook Form</span>
                <span>Tailwind CSS</span>
                <span>Framer Motion</span>
                <span>react-icons</span>
              </div>
              <div>
                <a
                  style={{ fontSize: "30px", paddingRight: "20px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakhawat9/sakhawat-hossain"
                >
                  {/* <FontAwesomeIcon icon={faGithub} /> */}
                </a>
                <a
                  style={{ fontSize: "30px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://sakhawat-hossain.vercel.app"
                >
                  {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
                </a>
              </div>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={fast_ride01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={fast_ride02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={fast_ride03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Fast_Ride</h3>
              <p>
                A single-page web app with a dashboard where users can request a
                ride by selecting their pick-up location and their destination
                location and date..{" "}
              </p>
              <div className="px-3 pb-2 row technology">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MOngoDB</span>
                <span>Material-ui</span>
                <span>FontAwesome</span>
                <span>Firebase</span>
                <span>React bootstrap</span>
              </div>
              <a
                style={{ fontSize: "30px", paddingRight: "20px" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sakhawat9/fast-ride"
              >
                {/* <FontAwesomeIcon icon={faGithub} /> */}
              </a>
              <a
                style={{ fontSize: "30px" }}
                target="_blank"
                rel="noreferrer"
                href="https://urban-riders-9bf60.web.app"
              >
                {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
              </a>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={signal_app01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={signal_app02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={signal_app03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Signal App</h3>
              <div className="px-3 pb-2 row technology">
                <span>React</span>
                <span>React-Native</span>
                <span>Expo</span>
                <span>Firebase</span>
                <span>Style Component</span>
                <span>HTML5</span>
                <span>CSS</span>
              </div>
              <div>
                <a
                  style={{ fontSize: "30px", paddingRight: "20px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakhawat9/signal-app"
                >
                  {/* <FontAwesomeIcon icon={faGithub} /> */}
                </a>
                <a
                  style={{ fontSize: "30px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://signal-app-4d090.web.app"
                >
                  {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
                </a>
              </div>
            </div>
          </div>
          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={panda01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={panda02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={panda03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Panda Commerce</h3>
              <p>
                A simple, static, and one-page e-commerce website design. It is
                an XD to HTML conversion.
              </p>
              <div className="px-3 pb-2 row technology">
                <span>HTML5</span>
                <span>CSS</span>
                <span>Bootstrap</span>
              </div>
              <div>
                <a
                  style={{ fontSize: "30px", paddingRight: "20px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakhawat9/panda-commerce-boostrtrap"
                >
                  {/* <FontAwesomeIcon icon={faGithub} /> */}
                </a>
                <a
                  style={{ fontSize: "30px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://sakhawathossain55.github.io/panda-commerce-boostrtrap"
                >
                  {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
                </a>
              </div>
            </div>
          </div>

          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={football01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={football02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={football03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Football Facts</h3>
              <p>
                Football Facts is a professional react web app what I made for
                programming hero's assignment #8. The project is totally simple
                and made using latest version functionality.
              </p>
              <div className="px-3 pb-2 row technology">
                <span>React.js</span>
                <span>Node.js</span>
                <span>ImgBB</span>
                <span>FontAwesome</span>
                <span>Heroku</span>
                <span>Bootstrap</span>
              </div>
              <div>
                <a
                  style={{ fontSize: "30px", paddingRight: "20px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakhawat9/Football-Facts"
                >
                  {/* <FontAwesomeIcon icon={faGithub} /> */}
                </a>
                <a
                  style={{ fontSize: "30px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://cranky-visvesvaraya-ed5ebc.netlify.app"
                >
                  {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
                </a>
              </div>
            </div>
          </div>

          <div className="mb-4 col-lg-4 col-sm-6">
            <div className="p-3 text-justify rounded shadow cart-style img-animation">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={movie_app01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={movie_app02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "150px" }}
                    className="d-block w-100"
                    // src={movie_app03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Movie Website</h3>
              <p>
                Frontend movie website by using HTML, pure CSS, and Vanilla
                JavaScript.
              </p>
              <div className="px-3 pb-2 row technology">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>FontAwesome</span>
              </div>
              <div>
                <a
                  style={{ fontSize: "30px", paddingRight: "20px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakhawat9/movie_website_html_css_javascript"
                >
                  {/* <FontAwesomeIcon icon={faGithub} /> */}
                </a>
                <a
                  style={{ fontSize: "30px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://60ddbae061cc05144df63679--inspiring-colden-4dfc5f.netlify.app"
                >
                  {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
