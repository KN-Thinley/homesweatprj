const express = require("express")
const app = express();

//adding emailRoutes

//directory match...
const path = require("path");



app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//serves static page
app.use(express.static(path.join(__dirname, "/view")));

//database
require("./database/mongoose")

//routes
const userRouter = require("./route/userRoutes");
const adminRouter = require("./route/adminRoute");

app.use(userRouter)
app.use(adminRouter)
module.exports = app