const router = require("express").Router();
const skillSetRoutes = require("./api/SkillSets");

// Book routes
router.use("/SkillSets", skillSetRoutes);

module.exports = router;


// const router = require("express").Router();
// const bookRoutes = require("./books");

// // Book routes
// router.use("/books", bookRoutes);

// module.exports = router;