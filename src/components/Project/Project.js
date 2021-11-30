import React from "react";
import { Container } from "react-bootstrap";
import tour1 from "../../images/tour-01.png";
import tour2 from "../../images/tour-02.png";
import tour3 from "../../images/tour-03.png";

const Project = () => {
  return (
    <Container>
      <h2 className="text-white text-center">Featured Projects</h2>
      <div className="row py-5">
        <div className="col-md-4">
          <div className="card">
            <img src={tour1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={tour1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={tour1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
