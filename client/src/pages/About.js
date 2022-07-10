import React from "react";
import AboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <div>
      <div className="about d-flex h-100 m-3 p-4 justify-content-center">
        <div className="col-8 p-3 text-center">
          <h1 className="mb-4">FreedomFit History</h1>
          <h2>
            This is where a brief company history will go that will make you
            like this company and want to buy products.
          </h2>
        </div>
      </div>
      <div className="about d-flex h-100 m-3 p-4">
        <img
          className="about-img img-fluid img-thumbnail rounded float-left"
          src={AboutImage}
          alt="Two people in athletic gear"
        />
        <div className="p-3 text-left">
          <h2 className="mb-4">Fitness Instructor</h2>
          <h3>
            JC and AJ are some of the finest nutritionists in the USA. They will
            be able to help you achieve your goals through planned meals that
            are centered around your goals!
          </h3>
        </div>
      </div>
      <div className="about d-flex h-100 m-3 p-4">
        <div className="p-3 text-left">
          <h2 className="mb-4">Nutritionist</h2>
          <h3>
            JC and AJ are some of the finest nutritionists in the USA. They will
            be able to help you achieve your goals through planned meals that
            are centered around your goals!
          </h3>
        </div>
        <img
          className="about-img img-fluid img-thumbnail rounded float-left"
          src={AboutImage}
          alt="Two people in athletic gear"
        />
      </div>
      <div className="about d-flex h-100 m-3 p-4">
        <img
          className="about-img img-fluid img-thumbnail rounded float-left"
          src={AboutImage}
          alt="Two people in athletic gear"
        />
        <div className="p-3 text-left">
          <h2 className="mb-4">Physical Therapist</h2>
          <h3>
            JC and AJ are some of the finest nutritionists in the USA. They will
            be able to help you achieve your goals through planned meals that
            are centered around your goals!
          </h3>
        </div>
      </div>
      <div className="about d-flex h-100 m-3 p-4">
        <div className="p-3 text-left">
          <h2 className="mb-4">Course Manager</h2>
          <h3>
            JC and AJ are some of the finest nutritionists in the USA. They will
            be able to help you achieve your goals through planned meals that
            are centered around your goals!
          </h3>
        </div>
        <img
          className="about-img img-fluid img-thumbnail rounded float-left"
          src={AboutImage}
          alt="Two people in athletic gear"
        />
      </div>
    </div>
  );
}

export default About;
