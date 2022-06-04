const Fellow = require("../Models/fellow");
const FileUtils = require("../Utils/upload");
class UploadController {
  async upload(req, res) {
    const file = req.file.path;
    const type = "fellow";
    const fileUtils = new FileUtils(file, type);
    let data = fileUtils.readExcel();
    console.log(data);
    try {
      for (let fellow of data) {
        let fellowDoc = new Fellow({
          FellowName: fellow.FellowName,
          CenterName: fellow.CenterName,
          Total_Number_OoSC_and_Out_Of_School_Children_Identified:
            fellow.Total_Number_OoSC_and_Out_Of_School_Children_Identified,
          Total_Number_OoSC_and_Out_Of_Children_Enrolled_In_Learning_Center:
            fellow.Total_Number_OoSC_and_Out_Of_Children_Enrolled_In_Learning_Center,
          The_Total_Classes_Conducted_this_month:
            fellow.The_Total_Classes_Conducted_this_month,
          Hindi: fellow.Hindi,
          English: fellow.English,
          EVS: fellow.EVS,
          Math: fellow.Math,
          Number_of_the_Students_attended_classes_regularly_More_than_80_attendance:
            fellow.Number_of_the_Students_attended_classes_regularly_More_than_80_attendance,
          Number_of_exposure_visits_sessions_done:
            fellow.Number_of_exposure_visits_sessions_done,
          Number_of_Sessions_Visits_Meetings_on_vision_setting_reflection_and_selfawareness:
            fellow.Number_of_Sessions_Visits_Meetings_on_vision_setting_reflection_and_selfawareness,
          Number_of_training_on_classroom_intervention_behaviour_management_cycle_and_culture_Values:
            fellow.Number_of_training_on_classroom_intervention_behaviour_management_cycle_and_culture_Values,
          Number_of_community_visits_made_to_identify_and_understand_local_problems:
            fellow.Number_of_community_visits_made_to_identify_and_understand_local_problems,
          Number_of_Community_event_organised_to_mobilize_stakeholders:
            fellow.Number_of_Community_event_organised_to_mobilize_stakeholders,
          Number_of_parents_attended_workshops_training_PTM_SMC:
            fellow.Number_of_parents_attended_workshops_training_PTM_SMC,
          Number_of_parents_joined_participated_in_awareness_drives_and_campaigns:
            fellow.Number_of_parents_joined_participated_in_awareness_drives_and_campaigns,
          Number_of_community_members_attended_community_events_and_program_organized_for_mobilization:
            fellow.Number_of_community_members_attended_community_events_and_program_organized_for_mobilization,
          Number_of_parents_visited_Anubhuti_learning_centers:
            fellow.Number_of_parents_visited_Anubhuti_learning_centers,
          Number_of_parents_had_one_on_one_conversations_with_fellows_during_the_field_visit:
            fellow.Number_of_parents_had_one_on_one_conversations_with_fellows_during_the_field_visit,
          Thank_You_for_Filling_the_Form_Please_Rate_you_experience_or_day:
            fellow.Thank_You_for_Filling_the_Form_Please_Rate_you_experience_or_day,
          Location: fellow.Location,
        });
        await fellowDoc.save();
      }
      console.log(fellowDoc);
      res.json({
        msg: "Fellow Sheet Uploaded Successfully",
        err: null,
      });
    } catch (err) {
      res.json({
        msg: "Course sheet upload failed",
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
