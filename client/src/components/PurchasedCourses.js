import React from "react";
import { Link } from "react-router-dom";

const PurchasedCourses = ({ orders }) => {
  if (!orders || !orders.length) {
    return (
      <div>
        <p className="profile p-3">
          No courses purchased yet.
          <br></br>
          <Link className="profile" to={`/courses`}>
            Find the course that's right for you!
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Courses:</h2>
      {orders.map((order) => (
        <div key={order._id}>
          <div className="d-flex justify-content-between text-dark">
            <h3>Order Number: {order._id}</h3>
            <h3>
              Date of Purchase:
              {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
            </h3>
          </div>
          <div className="card flex-row flex-wrap justify-content-start">
            {order.courses.map((course) => (
              <div className="about purchase-card m-2 p-4">
                <h4 className="p-card-title text-center">
                  {course.name} <span>${course.price}</span>
                </h4>
                <div className="d-flex justify-content-center">
                  <img
                    className="img p-card-title"
                    alt={course.name}
                    src={`/assets/images/${course.image}`}
                  />
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchasedCourses;
