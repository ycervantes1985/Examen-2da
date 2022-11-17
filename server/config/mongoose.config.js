const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/petsDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("DB Pets lista"))
	.catch(err => console.log("No tenemos DB", err));