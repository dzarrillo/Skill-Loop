const router = require("express").Router();

const SkillsController = require("../../controllers/SkillsController");

// Matches with "/api/books"
router.route("/")
.get(SkillsController.findAll)
.post(SkillsController.create);


module.exports = router;




