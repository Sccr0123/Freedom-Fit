import React from "react";
import FitnessInstructor from "../assets/images/fitnessinstructor.jpg";
import Nutritionist from "../assets/images/nutritionist.jpg";
import PT from "../assets/images/physicaltherapist.jpg";
import CourseManager from "../assets/images/coursemanager.jpg";

function About() {
  return (
    <div>
      <div className="about d-flex h-100 m-3 p-4 justify-content-center">
        <div className="p-3 text-center">
          <h1 className="mb-4">FreedomFit History</h1>
          <h3>
            FreedomFit came to life when a couple of friends decided to merge
            their expertise of fitness and nutrition to create educational
            courses that empower others to take charge of their health. When
            you're in charge or your health, you have freedom to live life to
            the fullest. Each FreedomFit course is designed by a certified
            fitness instructor, nutritionist and licensed physical therapist to
            provide you with a solid plan on how to improve your health. The
            team at FreedomFit is here to support you so that you can live your
            life free!
          </h3>
        </div>
      </div>
      <div className="about d-flex h-100 m-3 p-4">
        <img
          className="about-img img-fluid img-thumbnail rounded float-left"
          src={FitnessInstructor}
          alt="Two people in athletic gear"
        />
        <div className="p-3 text-left">
          <h2 className="mb-4">Xavier Abaza - Fitness Instructor</h2>
          <h3>
            Xavier is a certified fitness instructor with six years of
            experience developing customized fitness plans. Xavier first became
            interested in health when he joined his school's track team as a
            teenager. Xavier's goal is to help others find the type of exercise
            that brings them joy while meeting their health needs.
          </h3>
        </div>
      </div>

      <div className="about d-flex h-100 m-3 p-4">
        <div className="p-3 text-left">
          <h2 className="mb-4">Camila Rodriguez - Physical Therapist</h2>
          <h3>
            Camila is a practicing physical therapist with five years of
            experience. Camila became interested in PT as profession after she
            required therapy herself due to an ACL tear. Camila's goal is to
            share knowledge that will allow others to train properly and avoid
            injury.
          </h3>
        </div>
        <img
          className="about-img img-fluid img-thumbnail rounded float-left"
          src={PT}
          alt="Two people in athletic gear"
        />
      </div>

      <div className="about d-flex h-100 m-3 p-4">
        <img
          className="about-img img-fluid img-thumbnail rounded float-left"
          src={Nutritionist}
          alt="Two people in athletic gear"
        />
        <div className="p-3 text-left">
          <h2 className="mb-4">Aiko Yamada - Nutritionist</h2>
          <h3>
            Aiko is a nutritionist with seven years of experience developing
            customized meal plans. Aiko's love of food began at a young age
            helping her father in the kitchen. Aiko's mission is to teach others
            that you can enjoy flavorful food and still eat to optimize your
            health
          </h3>
        </div>
      </div>

      <div className="about d-flex h-100 m-3 p-4">
        <div className="p-3 text-left">
          <h2 className="mb-4">Jayla Jordan - Course Manager</h2>
          <h3>
            Jayla is the course manager at FreedomFit. She has over three years
            of experience as a content creator and compiles all of the knowledge
            from the FreedomFit team into easy to digest courses. Jayla's goal
            is to bring the expertise from the FreedomFit team to users in a way
            that is informative, concise, and motivational.
          </h3>
        </div>
        <img
          className="about-img img-fluid img-thumbnail rounded float-left"
          src={CourseManager}
          alt="Two people in athletic gear"
        />
      </div>
    </div>
  );
}

export default About;
