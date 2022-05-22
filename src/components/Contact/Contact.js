/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import emailjs from "emailjs-com";
// import {
//   faEnvelope,
//   faMapMarkerAlt,
//   faPhoneAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  function emailSend(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6eeefm2",
        "template_nnvk3xb",
        form.current,
        "user_sce2SIOPGHDjhtoK0stGX"
      )
      .then((res) => {
        console.log(res.text);
      })
      .catch((err) => console.log(err));
  }
  return (
    // <section>
    //   <Container className="p-5 mb-5 text-center text-white bg-color">
    //     <div>
    //       <h1>Contact Me</h1>
    //       <p className="pb-2">
    //         I'd love to hear from you. Whether you have a question or just want
    //         to say hi, feel free to drop a message. I'll try my best to get{" "}
    //       </p>
    //     </div>
    //     <Row className="rounded">
    //       <Col md={6} lg={7}>
    //         <form ref={form} onSubmit={emailSend}>
    //           <input
    //             placeholder="Your Name Here"
    //             type="text"
    //             name="user_name"
    //             className="form-control"
    //           />
    //           <br />
    //           <input
    //             className="form-control"
    //             type="email"
    //             name="user_email"
    //             placeholder="Your Email Here"
    //           />
    //           <br />
    //           <textarea
    //             className="form-control"
    //             name="message"
    //             placeholder="Enter Message Here"
    //             cols="30"
    //             rows="5"
    //           ></textarea>
    //           <br />
    //           <input
    //             className="mb-3 form-control"
    //             style={{ background: "#2053C9", color: "#fff" }}
    //             type="submit"
    //             value="Submit"
    //           />
    //         </form>
    //       </Col>
    //       <Col md={6} lg={5}>
    //         <div className="p-3 mb-3 rounded d-flex contactInfo">
    //           <span className="mr-5 rounded-circle icon-style d-flex align-items-center justify-content-center">
    //             <FontAwesomeIcon
    //               style={{ width: "25px", height: "25px" }}
    //               icon={faPhoneAlt}
    //             />
    //           </span>
    //           <span className="ps-4">
    //             <p>01712390890</p>
    //           </span>
    //         </div>
    //         <div className="p-3 mb-3 rounded d-flex contactInfo">
    //           <span className="mr-5 rounded-circle d-flex align-items-center icon-style justify-content-center">
    //             <FontAwesomeIcon
    //               style={{ width: "25px", height: "25px" }}
    //               icon={faEnvelope}
    //             />
    //           </span>
    //           <span className="ps-4">
    //             <p>snhabib777@gmail.com</p>
    //             <p>smhabib7777@gmail.com</p>
    //           </span>
    //         </div>
    //         <div className="p-3 rounded d-flex contactInfo">
    //           <span className="mr-5 rounded-circle d-flex icon-style align-items-center justify-content-center">
    //             <FontAwesomeIcon
    //               style={{ width: "25px", height: "25px" }}
    //               icon={faMapMarkerAlt}
    //             />
    //           </span>
    //           <span className="ps-4">
    //             <p>15/E, lake circus, kalabagan</p>
    //             <p>Dhaka, Bangladesh</p>
    //           </span>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>

    <div className="contact py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              {/* <h2 className="title text-dark mb-4">Contact With Me</h2> */}
              <h2 className="pt-5 pb-3" data-aos="flip-left">
                Contact <span style={{ color: "#ff4a57" }}>With Me</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className=" shadow p-4 rounded ">
              <div className="image-fluid">
                <img
                  className="w-100"
                  src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
                  alt="contact-img"
                />
              </div>
              <div className="title-area">
                <h4 className="title text-dark my-3">MD. AHSAN HABIB</h4>
                <span className="text-dark">Web Developer</span>
              </div>
              <div className="description mt-4">
                <p className="text-dark">
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </p>
                <span className="phone text-dark">
                  Phone: <a href="tel:01941043264">+8801712390890</a>
                </span>
                <span className="mail text-dark px-2">
                  Email:{" "}
                  <a href="mailto:admin@example.com">snhabib777@gamil.com</a>
                </span>
              </div>
              <div className="social-area pb-2">
                <div className="name  my-4 text-dark">FIND WITH ME</div>
                {/* <div className="social-icone">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      // stroke-width="2"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      className="feather feather-facebook mx-2"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      // stroke-width="2"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      className="feather feather-linkedin mx-2"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      // stroke-width="2"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      className="feather feather-instagram mx-2"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div> */}
                <ul className="social-link">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/sn-habib/"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://github.com/habibshrabon"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/habib.sharabon"
                      rel="noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/habibsarabon/"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7 contact-input">
            <div className=" p-4 rounded-lg shadow-lg">
              <div className="introduce">
                <form
                  ref={form}
                  onSubmit={emailSend}
                  className="rnt-contact-form rwt-dynamic-form row"
                  id="contact-form"
                  method="POST"
                  action="mail.php"
                >
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="mb-3 text-dark">Your Name</label>
                      <input
                        className="form-control mb-3 form-control-lg"
                        name="contact-name"
                        id="contact-name"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="mb-3 text-dark">Phone Number</label>
                      <input
                        className="form-control mb-3 form-control-lg"
                        name="contact-phone"
                        id="contact-phone"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="mb-3 text-dark">Email</label>
                      <input
                        className="form-control mb-3 form-control-lg"
                        id="contact-email"
                        name="contact-email"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="mb-3 text-dark">subject</label>
                      <input
                        className="form-control mb-3 form-control-lg"
                        id="subject"
                        name="subject"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="mb-3 text-dark">Your Message</label>
                      <textarea
                        className="form-control mb-3"
                        name="contact-message"
                        id="contact-message"
                        cols=""
                        rows="6 "
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 my-5 text-center">
                    <button
                      name="submit"
                      type="submit"
                      id="submit"
                      className="btn btn-primary shadow"
                    >
                      <span>SEND MESSAGE</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
