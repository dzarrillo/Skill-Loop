const router = require("express").Router();
const skillSetRoutes = require("./api/SkillSets");

// Book routes
router.use("/SkillSets", skillSetRoutes);

module.exports = router;