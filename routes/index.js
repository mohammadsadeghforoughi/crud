var express = require("express");
var router = express.Router();
const DO = require("../Modules/DO");
const DataObject = new DO();
DataObject.init({
  path:"db/DO"
});
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/create", function (req, res, next) {
  DataObject.insert(req.body);
  res.json(DataObject.read());
});

router.get("/read", function (req, res, next) {
  res.json(DataObject.read());
});

router.post("/update", function (req, res, next) {
  DataObject.update(req.body.id, req.body);
  res.json(DataObject.read());
});

router.post("/delete", function (req, res, next) {
  DataObject.remove(req.body.id);
  res.json(DataObject.read());
});

module.exports = router;
