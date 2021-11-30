import React, { useRef } from "react";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  return (
    <section>
      <Container
        className="p-5 mb-5 text-center text-white"
        style={{ background: "rgb(82, 102, 139)" }}
      >
        <div>
          <h1>Contact Me</h1>
          <p className="pb-2">
            I'd love to hear from you. Whether you have a question or just want
            to say hi, feel free to drop a message. I'll try my best to get{" "}
          </p>
        </div>
        <Row className="rounded ">
          <Col md={6} lg={7}>
            <form ref={form} onSubmit="">
              <input
                placeholder="Your Name Here"
                type="text"
                name="name"
                className="form-control"
              />
              <br />
              <input
                className="form-control"
                type="email"
                name="usr_email"
                placeholder="Your Email Here"
              />
              <br />
              <textarea
                className="form-control"
                name="message"
                placeholder="Enter Message Here"
                cols="30"
                rows="5"
              ></textarea>
              <br />
              <input
                className="mb-3 form-control"
                style={{ background: "#2053C9", color: "#fff" }}
                type="submit"
                value="Submit"
              />
            </form>
          </Col>
          <Col md={6} lg={5}>
            <div className="p-3 mb-3 rounded d-flex contactInfo">
              <span className="mr-5 rounded-circle icon-style d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  style={{ width: "25px", height: "25px" }}
                  icon={faPhoneAlt}
                />
              </span>
              <span className="ps-4">
                <p>01712390890</p>
                <p>01712390890</p>
              </span>
            </div>
            <div className="p-3 mb-3 rounded d-flex contactInfo">
              <span className="mr-5 rounded-circle d-flex align-items-center icon-style justify-content-center">
                <FontAwesomeIcon
                  style={{ width: "25px", height: "25px" }}
                  icon={faEnvelope}
                />
              </span>
              <span className="ps-4">
                <p>snhabib777@gmail.com</p>
                <p>smhabib7777@gmail.com</p>
              </span>
            </div>
            <div className="p-3 rounded d-flex contactInfo">
              <span className="mr-5 rounded-circle d-flex icon-style align-items-center justify-content-center">
                <FontAwesomeIcon
                  style={{ width: "25px", height: "25px" }}
                  icon={faMapMarkerAlt}
                />
              </span>
              <span className="ps-4">
                <p>15/E, lake circus, kalabagan</p>
                <p>Dhaka, Bangladesh</p>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
