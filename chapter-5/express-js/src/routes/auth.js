const express = require("express");
const { validateRegister } = require("../middlewares/auth");
const { register } = require("../controllers/auth");

const router = express.Router();

router.post("/register", validateRegister, register);

module.exports = router;
