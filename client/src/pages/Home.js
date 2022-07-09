import { React } from "react";
import "react-bootstrap";
import imgPlateWeights from "../assets/images/plate_weights.jpg";

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
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div className="card card-01">
                <img
                  className="card-img-top"
                  src={imgPlateWeights}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <span className="badge-box">
                    <i className="fa fa-check"></i>
                  </span>
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-default text-uppercase">
                    Explore
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div className="card card-01">
                <img
                  className="card-img-top"
                  src={imgPlateWeights}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <span className="badge-box">
                    <i className="fa fa-check"></i>
                  </span>
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-default text-uppercase">
                    Explore
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div className="card card-01">
                <img
                  className="card-img-top"
                  src={imgPlateWeights}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <span className="badge-box">
                    <i className="fa fa-check"></i>
                  </span>
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-default text-uppercase">
                    Explore
                  </a>
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
