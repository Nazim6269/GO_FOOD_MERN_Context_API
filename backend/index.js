require("dotenv").config();
require("./configs/db");
const express = require("express");
const app = express();
const router = require("./routes/userRoute");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is running successfully at http://localhost:${PORT}`);
});
