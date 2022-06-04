const Fellow = require("../Models/fellow");
class ChartController {
  async piechart(req, res) {
    try {
      const parentsVisited = [];
      const parentsTalked = [];
      let fellows = await Fellow.find({});
      fellows.forEach((fellow) => {
        parentsVisited.push(
          fellow.Number_of_parents_visited_Anubhuti_learning_centers
        );

        parentsTalked.push(
          fellow.Number_of_parents_had_one_on_one_conversations_with_fellows_during_the_field_visit
        );
      });
      console.log(fellows);
      res.json({ parentsVisited, parentsTalked });
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

module.exports = new ChartController();
