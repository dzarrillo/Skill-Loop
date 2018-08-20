const router = require("express").Router();
const skillsController = require("../../controllers/SkillsController");

// Matches with "/api/books"
router.route("/")
.get(SkillsController.findAll)
.post(SkillsController.create);


module.exports = router;