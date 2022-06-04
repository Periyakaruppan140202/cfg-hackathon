const Fellow = require("../Models/fellow");
class ChartController {
  async piechart(req, res) {
    try {
      const parentsVisited = [];
      const parentsTalked = [];
      const Allfellows = [];
      let fellows = await Fellow.find({});
      fellows.forEach((fellow) => {
        parentsVisited.push(
          fellow.Number_of_parents_visited_Anubhuti_learning_centers
        );

        parentsTalked.push(
          fellow.Number_of_parents_had_one_on_one_conversations_with_fellows_during_the_field_visit
        );

        Allfellows.push(fellow.FellowName);
      });
      console.log(fellows);
      res.json({ parentsVisited, parentsTalked, Allfellows });
    } catch (err) {
      console.log(err);
      res.json({
        msg: "Failed to find fellows",
        err: err,
      });
    }
  }

  async centerDataInsight(req, res) {
    try {
      const centername = [];
      const enrolled = [];
      let fellows = await Fellow.find({});
      fellows.forEach((fellow) => {
        centername.push(fellow.CenterName);

        enrolled.push(
          fellow.Total_Number_OoSC_and_Out_Of_Children_Enrolled_In_Learning_Center
        );
      });
      res.json({ centername, enrolled });
    } catch (err) {
      console.log(err);
      res.json({
        msg: "Failed to find fellows",
        err: err,
      });
    }
  }


  async centerDataInsight(req, res) {
    try {
      const centername = [];
      const enrolled = [];
      const attendance = [];
      let fellows = await Fellow.find({});
      fellows.forEach((fellow) => {
        centername.push(fellow.CenterName);

        enrolled.push(
          fellow.Total_Number_OoSC_and_Out_Of_Children_Enrolled_In_Learning_Center
        );

        attendance.push(fellow.Number_of_the_Students_attended_classes_regularly_More_than_80_attendance);
      });
      res.json({ centername, enrolled, attendance });
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
