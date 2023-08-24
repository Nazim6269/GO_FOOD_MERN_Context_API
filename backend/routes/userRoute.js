//external import
const router = require("express").Router();
//internal import
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const runValidation = require("../validation/auth");
const checkCondition = require("../validation/condition");
const foodDataController = require("../controllers/foodDataController");

router.post("/signup", checkCondition, runValidation, signupController);
router.post("/login", checkCondition, runValidation, loginController);
router.post("/foodData", foodDataController);

module.exports = router;
