const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

//directory match...
const path = require("path");

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

//serves static page
app.use(express.static(path.join(__dirname, "/view")));

//database
require("./database/mongoose");

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
//routes
const userRouter = require("./route/userRoutes");
const adminRouter = require("./route/adminRoute");

app.use(cookieParser());
app.use(userRouter);
app.use(adminRouter);
module.exports = app;
