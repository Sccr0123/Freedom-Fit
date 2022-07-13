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
					<h3>
						{new Date(
							parseInt(order.purchaseDate)
						).toLocaleDateString()}
					</h3>
					<div className="flex-row">
						{order.courses.map((course) => (
							<div className="card">
								<Link to={`/courses/${course._id}`}>
									<h4 className="card-title">
										{course.name}
									</h4>
									<img
										alt={course.name}
										src={`/assets/images/${course.image}`}
									/>
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