const express = require("express");
const mongoose = require("mongoose");

const PORT = procrss.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.useexpress.static("public");

mongoose.connect(process.env)

app.use(require("./routes"))