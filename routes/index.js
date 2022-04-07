const router = require("express").Router();
const admin = require("./admin");
const user = require("./user");

router.use("/admin", admin);
router.use("/users", user);

module.exports = router;
