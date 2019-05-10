var links = require("./mockdata.js");

exports.links = function(req, res) {
  res.json(links);
};

exports.link = function(req, res) {
  res.json(links[req.params.id - 1]);
};
