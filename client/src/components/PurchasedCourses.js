import React from 'react';
import { Link } from 'react-router-dom';


const PurchasedCourses = ({ props }) => {

  if (!props.user.orders || !props.user.orders.length) {
    return (
      <div><p className="bg-dark text-light p-3">No courses purchased yet.</p>
      <Link to={`/courselist`}>Find the course that's right for you!</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Courses:</h2>
            {props.user.orders.map((order) => (
              <div key={order._id}>
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.courses.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card">
                      <Link to={`/courses/${_id}`}>
                        <h4 className='card-title'>${name}</h4>
                        <img alt={name} src={`/images/${image}`} />
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            ))}
    </div>
  );
};

export default PurchasedCourses;