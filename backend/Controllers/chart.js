const Fellow = require("../Models/fellow");
class ChartController {
  async piechart(req, res) {
    try {
      let fellows = await Fellow.find({});
      res.json(fellows);
    } catch (err) {
      console.log(err);
      res.json({
        msg: "Failed to find fellows",
        err: err,
      });
    }
  }

  async getFellow(req, res) {
    try {
      let fellows = await Fellow.find({});
      res.json(fellows);
    } catch (err) {
      console.log(err);
      res.json({
        msg: "Failed to find fellows",
        err: err,
      });
    }
  }
}

module.exports = new UploadController();
