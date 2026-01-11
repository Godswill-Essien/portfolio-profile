const express = require("express");
const router = express.Router();

router.use("/views", require("./views/view.routes"));

module.exports = router;
