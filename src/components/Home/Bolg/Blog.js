import React from "react";
import { Container } from "react-bootstrap";
import js from "../../../images/javascript.jpg";
import react from "../../../images/react.png";
import node from "../../../images/node.png";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-bg">
      <Container className="pb-5" id="blog">
        <h2 className="pt-5 pb-3" data-aos="flip-left">
          My <span style={{ color: "#ff4a57" }}>Blogs</span>
        </h2>
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="col">
            <div className="card h-100">
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                href="https://medium.com/@snhabib777/react-js-fundamental-10-concepts-6dd6dbc3489"
                rel="noreferrer"
              >
                <div className="card-img-hover blog-img">
                  <img src={js} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-black">Javascript</h5>
                  <p className="card-text text-black">
                    JavaScript, often abbreviated as JS, is a programming
                    language that conforms to the ECMAScript specification.
                    JavaScript is high-level, often just-in-time compiled and
                    multi-paradigm
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button className="btn-brand">Read More</button>
                </div>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                href="https://medium.com/@snhabib777/react-js-fundamental-10-concepts-6dd6dbc3489"
                rel="noreferrer"
              >
                <div className="card-img-hover blog-img">
                  <img src={react} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-black">React JS</h5>
                  <p className="card-text text-black">
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on UI components and
                    awesome project creat is a React.js Library.
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button className="btn-brand">Read More</button>
                </div>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                href="https://medium.com/@snhabib777/ultimate-guide-to-backend-web-development-details-and-required-skill-set-9ed25ef3d52b"
                rel="noreferrer"
              >
                <div className="card-img-hover blog-img">
                  <img src={node} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-black">Node JS</h5>
                  <p className="card-text text-black">
                    Node.js is an open-source, cross-platform, back-end
                    JavaScript runtime environment that runs on the V8 engine
                    and executes JavaScript code outside a web browser.
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button className="btn-brand">Read More</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
