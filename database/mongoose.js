const mongoose = require("mongoose");

require("dotenv").config({ path: "./configuration/config.env" });
const DB = process.env.DATABASE_LOCAL;

// connecting the database
mongoose
  .connect(DB)
  //if connections gets success
  .then((con) => {
    // console.log(con.connections)
    console.log("DB connect successful");
  })
  //if the connections doesn't get patched up
  .catch((error) => {
    console.log(error);
  });
