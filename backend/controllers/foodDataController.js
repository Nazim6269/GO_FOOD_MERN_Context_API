const mongoose = require("mongoose");

const foodDataController = async (req, res) => {
  try {
    const data = await mongoose.connection.db
      .collection("Food_Items")
      .find({})
      .toArray();
    const foodCat = await mongoose.connection.db
      .collection("Food_Category")
      .find({})
      .toArray();
    res.send([data, foodCat]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = foodDataController;
