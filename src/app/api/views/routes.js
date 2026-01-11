const express = require("express");
const router = express.Router();
const { trackView, getTotalViews } = require("./view.controller");

router.post("/track", trackView);
router.get("/total", getTotalViews);

module.exports = router;
