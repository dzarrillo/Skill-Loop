const router = require("express").Router();
const bookRoutes = require("./SkillSets");

// Book routes
router.use("/SkillSets", skillSetRoutes);

module.exports = router;