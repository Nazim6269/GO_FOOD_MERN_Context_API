const mongoose = require("mongoose");
const url = process.env.DATABASE;

mongoose
  .connect(url)
  .then(async () => {
    console.log("Mongodb is connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
