const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.log(`Database error: ${error}`));
db.once("open", () => console.log("connected to database"));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
