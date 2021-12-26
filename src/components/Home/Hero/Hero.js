import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/habib-bg.png";
import TypeWriterEffect from "react-typewriter-effect";
import "./Hero.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Hero = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("click");
    history.push("/about");
  };
  return (
    <>
      <div className="container-md">
        <div className="pb-5 row">
          <div className="col-sm-6 d-flex align-items-center">
            <div className="text-white">
              <h3>Hello</h3>
              <h1>
                I'M <span style={{ color: "#ff4a57" }}>AHSAN HABIB</span>
              </h1>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Roboto",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "1.5em",
                }}
                startDelay={2000}
                cursorColor="#fff"
                multiText={[
                  "Full-stack Web Developer",
                  "Web Developer",
                  "Front end developer",
                  "Full-stack Web Developer",
                  "MERN Stack Web Developer",
                ]}
                loop={true}
                multiTextDelay={1000}
                typeSpeed={150}
              />

              <p className="my-3 text-justify">
                A self-motivated and enthusiastic web developer with a deep
                interest in JavaScript. To work in the Software industry with
                modern web technologies of different local & multinational
                Software/ IT agencies of Bangladesh and grow rapidly with
                increasing responsibilities.
              </p>
              <button
                onClick={handleClick}
                as={Link}
                to="/about"
                className="me-3 btn-brand"
              >
                About Me
              </button>
              <button className="mt-3 button-style btn-brand">
                <a href="https://drive.google.com/uc?export=download&id=1cQEouWGF49vLawzIn0qkeI1RvM2jQ7Z0">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
          <div className=" hero-image col-sm-6">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
