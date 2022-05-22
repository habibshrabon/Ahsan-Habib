/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-comment-textnodes */

import React from "react";
import me from "../../images/me.jpg";
import "./About.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="container mt-5" id="about">
      <div className="row d-flex align-items-center">
        <div
          className="col-md-6 col-sm-12 col-xs-12 text-start about-content"
          data-aos="fade-left"
        >
          <h3>
            Hello, I'm <span style={{ color: "#ff4a57" }}>Ahsan Habib</span>{" "}
          </h3>
          <p>
            A Full-Stack Web Developer with an avid interest in full-stack web
            development. JavaScript is my ideal language and I enjoy working
            with ReactJS. As a programmer, I love taking on challenges and love
            being part of the solution. I am able to work well both in a team
            environment as well as using my own initiative. I am able to work
            well under pressure and adhere to strict deadlines.
          </p>
          <h4>My Skills</h4>
          <div className="pe-4 pb-3 skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>React Router</span>
            <span>Bootstrap</span>
            <span>React Bootstrap</span>
            <span>Tailwind</span>
            <span>Material UI</span>
            <span>React Icon</span>
            <span>Netlify</span>
            <span>Firebase</span>
            <span>Heroku</span>
          </div>
          <div className="pt-4">
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
        <div className="col-md-6 col-sm-12 col-xs-12" data-aos="fade-right">
          <div className="about-img">
            <img className="align-middle" src={me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
