const express = require("express");
const { registerUser,authUser,getUser } = require("../controllers/userControllers");
const { protect } = require("../middelwares/authMiddelware");
const { registerRules, validator } = require("../middelwares/validator");
const router = express.Router();
router.post("/register", registerRules(), validator, registerUser);
router.post('/login',loginRules(),authUser);
router.get("/auth",protect,getUser);
module.exports=router;