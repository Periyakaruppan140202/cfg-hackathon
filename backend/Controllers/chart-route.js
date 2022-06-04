const router = require("express").Router();
const uploadController = require("../Controllers/upload");
const upload = require("../Middleware/upload");
const Fellow = require("../Models/fellow");

router.get("/chart1", async (req, res) => {
  try {
    const showFellow = await Fellow.find();
    const x = showFellow.map((f) => f.The_Total_Classes_Conducted_this_month);
    const y = [
      showFellow.map((f) => f.Hindi),
      showFellow.map((f) => f.English),
      showFellow.map((f) => f.EVS),
      showFellow.map((f) => f.Math),
    ];
    res.json({ x, y });
  } catch {
    res.json(err);
  }
});

module.exports = router;
