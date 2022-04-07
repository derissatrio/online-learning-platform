const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("halo admin");
});

module.exports = router;
