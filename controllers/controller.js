const db = require("../models");

// Defining methods for the Controller
module.exports = {
  create: function(req, res) {
    db.History
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  }
};
