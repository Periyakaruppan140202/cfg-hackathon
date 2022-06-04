const router = require("express").Router();
const Fellow = require("../Models/fellow");

router.get("/fetchfellows", async (req, res) => {
  try {
    const data = await Fellow.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
