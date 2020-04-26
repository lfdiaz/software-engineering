const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => console.log(`Database Error: ${error}`));
db.once("open", () => console.log("Connected to the Database"));

const signupRoute = require("./routes/signup");
app.use("/api/signup", signupRoute);

const loginRoute = require("./routes/login");
app.use("/api/login", loginRoute);

const addToCartRoute = require('./routes/add_to_cart')
app.use('/api/cart', addToCartRoute)

app.listen(PORT, () => console.log(`Server Started on Port ` + PORT));
