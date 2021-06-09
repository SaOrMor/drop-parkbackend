require('dotenv').config();

const envfile = require('envfile');
const fs = require('fs');

const express = require('express');
const path = require("path");

const cookieParser = require("cookie-parser");
const erv = require("express-react-views");
const session = require("express-session");

const siteRouter = require("./routes/siteRouter");

const app = express();

app.listen(3000, function () {
    console.log('Park App listening on port 3000!');
  });


// VIEW ENGINE SETUP
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());

// MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


// app.use(
//     session({
//       secret: process.env.SESSION_SECRET,
//       // cookie: { maxAge: 3600000 * 1 },	// 1 hour // Time after which the cookie saved on the browser expires
//       resave: true,
//       saveUninitialized: false,
//     })
//   ); 



  app.use("/api", siteRouter);


/* GET home page. */
app.get("/", (req, res, next) => {
    res.render("Home");
  });

  module.exports = app;