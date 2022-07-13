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
							{new Date(
								parseInt(order.purchaseDate)
							).toLocaleDateString()}
						</h3>
					</div>
					<div className="card flex-row">
						{order.courses.map((course) => (
							<div className="about d-flex h-100 m-3 p-4">
								<Link to={`/courses/${course._id}`}>
									<h4 className="p-card-title">
										{course.name}
									</h4>
									<div className="about d-flex m-3 p-4">
									<img className="img p-card-title"
										alt={course.name}
										src={`/assets/images/${course.image}`}
									/>
									</div>
								</Link>
								<div>
									<span>${course.price}</span>
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
