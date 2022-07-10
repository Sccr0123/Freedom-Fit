import { React } from "react";
import { Link } from "react-router-dom";
import "react-bootstrap";

// import images
import imgPlateWeights from "../assets/images/plate_weights.jpg";
import AboutImage from "../assets/images/about.jpg";
import HighFive from "../assets/images/highfive.jpg";

const Home = () => {
  return (
    <div>
      <div className="home d-flex h-100 p-4 justify-content-center">
        <div className="col-8 p-3 text-center">
          <h1 className="mb-4">FreedomFit</h1>
          <h2>Live your life free.</h2>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-01">
                <img
                  className="card-img-top"
                  src={AboutImage}
                  alt="Two people in athletic gear"
                />
                <div className="card-body">
                  <span className="badge-box">
                    <i className="fa fa-check"></i>
                  </span>
                  <h4 className="card-title">About</h4>
                  <p className="card-text">Learn about our team.</p>
                  <Link to="/about" className="btn btn-default text-uppercase">
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-01">
                <img
                  className="card-img-top"
                  src={imgPlateWeights}
                  alt="Plate weights on ground"
                />
                <div className="card-body">
                  <span className="badge-box">
                    <i className="fa fa-check"></i>
                  </span>
                  <h4 className="card-title">Courses</h4>
                  <p className="card-text">Check out our course offerings.</p>
                  <Link to="/" className="btn btn-default text-uppercase">
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-01">
                <img
                  className="card-img-top"
                  src={HighFive}
                  alt="Two people exercising"
                />
                <div className="card-body">
                  <span className="badge-box">
                    <i className="fa fa-check"></i>
                  </span>
                  <h4 className="card-title">Sign Up</h4>
                  <p className="card-text">Found your fit? Sign up here.</p>
                  <Link to="/" className="btn btn-default text-uppercase">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
