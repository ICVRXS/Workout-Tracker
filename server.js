const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const timeout = require("connect-timeout");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(timeout("30"));

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_DB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes"));

app.listen(PORT, ()=>{
  console.log(`App is running on port: ${PORT}`)
});