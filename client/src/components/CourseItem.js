import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import {
	ADD_TO_CART,
	UPDATE_CART_QUANTITY,
	REMOVE_FROM_CART,
} from "../utils/actions";
import { idbPromise } from "../utils/helpers";

function CourseItem(item) {
	const [state, dispatch] = useStoreContext();

	const { image, name, description, _id, price } = item;

	const { cart } = state;

	const addToCart = () => {
		const itemInCart = cart.find((cartItem) => cartItem._id === _id);
		if (itemInCart) {
			dispatch({
				type: UPDATE_CART_QUANTITY,
				_id: _id,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
			idbPromise("cart", "put", {
				...itemInCart,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
		} else {
			dispatch({
				type: ADD_TO_CART,
				course: { ...item, purchaseQuantity: 1 },
			});
			idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
		}
	};

	const removeFromCart = () => {
		dispatch({
			type: REMOVE_FROM_CART,
			_id: item._id,
		});

		idbPromise("cart", "delete", { ...item });
	};

	return (
		<div className="about d-flex h-100 m-3 p-4">
			<div className="p-3 text-left">
				<h2 className="mb-4">{name}</h2>
				<span className="d-flex justify-content-center">
					<h3>${price}</h3>
				</span>
				<div className="d-flex">
					<h3>{description}</h3>
					<p></p>
					<img
						className="about-img img-fluid img-thumbnail rounded float-left"
						alt={name}
						src={`/assets/images/${image}`}
					/>
				</div>
				<div className="d-flex justify-content-center">
					<button onClick={addToCart}>Add to cart</button>
					<button onClick={removeFromCart}>Remove from cart</button>
				</div>
			</div>
		</div>
	);
}

export default CourseItem;
