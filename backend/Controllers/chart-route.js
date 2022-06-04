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

router.get("/chart2", async (req, res) => {
  try {
    const showFellow = await Fellow.find();
    const x = showFellow.map((f) => f.FellowName);
    const y = [
      showFellow.map(
        (f) => f.Total_Number_OoSC_and_Out_Of_School_Children_Identified
      ),
      showFellow.map(
        (f) =>
          f.Total_Number_OoSC_and_Out_Of_Children_Enrolled_In_Learning_Center
      ),
      showFellow.map(
        (f) =>
          f.Number_of_Sessions_Visits_Meetings_on_vision_setting_reflection_and_selfawareness
      ),
      showFellow.map(
        (f) =>
          f.Number_of_training_on_classroom_intervention_behaviour_management_cycle_and_culture_Values
      ),
      showFellow.map(
        (f) =>
          f.Number_of_community_visits_made_to_identify_and_understand_local_problems
      ),
      showFellow.map(
        (f) => f.Number_of_Community_event_organised_to_mobilize_stakeholders
      ),
      showFellow.map(
        (f) => f.Number_of_parents_attended_workshops_training_PTM_SMC
      ),
      showFellow.map(
        (f) =>
          f.Number_of_parents_joined_participated_in_awareness_drives_and_campaigns
      ),
      showFellow.map(
        (f) =>
          f.Number_of_community_members_attended_community_events_and_program_organized_for_mobilization
      ),
      showFellow.map(
        (f) => f.Number_of_parents_visited_Anubhuti_learning_centers
      ),
      showFellow.map(
        (f) =>
          f.Number_of_parents_had_one_on_one_conversations_with_fellows_during_the_field_visit
      ),
    ];
    res.json({ x, y });
  } catch {
    res.json(err);
  }
});

module.exports = router;
