const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/books"
router.route("/")
  .post(controller.create);



module.exports = router;
