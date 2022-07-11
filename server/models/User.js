const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
	},
	orders: [
		{
			type: Schema.Types.ObjectId,
			ref: "Order",
		},
	],
});

userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hashSync(this.password, saltRounds);
	}

	next();
});

//Check Password
userSchema.methods.isCorrectPassword = async function (password) {
	console.log(password, this.password);
	const response = await bcrypt.compare(password, this.password);
	console.log(response);

	return response;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
