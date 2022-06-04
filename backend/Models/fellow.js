const mongoose = require("mongoose");

const fellowSchema = mongoose.Schema(
  {
    FellowName: {
      type: String,
      required: true,
    },
    CenterName: {
      type: String,
      required: true,
    },
    Total_Number_OoSC_and_Out_Of_School_Children_Identified: {
      type: Number,
      required: true,
    },
    Total_Number_OoSC_and_Out_Of_Children_Enrolled_In_Learning_Center: {
      type: Number,
      required: true,
    },
    The_Total_Classes_Conducted_this_month: {
      type: Number,
      required: true,
    },
    Hindi: { type: Number, required: true },
    English: { type: Number, required: true },
    EVS: { type: Number, required: true },
    Math: { type: Number, required: true },
    Number_of_the_Students_attended_classes_regularly_More_than_80_attendance: {
      type: Number,
      required: true,
    },
    Number_of_exposure_visits_sessions_done: { type: Number, required: true },
    Number_of_Sessions_Visits_Meetings_on_vision_setting_reflection_and_selfawareness:
      { type: Number, required: true },
    Number_of_training_on_classroom_intervention_behaviour_management_cycle_and_culture_Values:
      { type: Number, required: true },
    Number_of_community_visits_made_to_identify_and_understand_local_problems: {
      type: Number,
      required: true,
    },
    Number_of_Community_event_organised_to_mobilize_stakeholders: {
      type: Number,
      required: true,
    },
    Number_of_parents_attended_workshops_training_PTM_SMC: {
      type: Number,
      required: true,
    },
    Number_of_parents_joined_participated_in_awareness_drives_and_campaigns: {
      type: Number,
      required: true,
    },
    Number_of_community_members_attended_community_events_and_program_organized_for_mobilization:
      { type: Number, required: true },

    Number_of_parents_visited_Anubhuti_learning_centers: {
      type: Number,
      required: true,
    },
    Number_of_parents_had_one_on_one_conversations_with_fellows_during_the_field_visit:
      {
        type: Number,
        required: true,
      },
    Thank_You_for_Filling_the_Form_Please_Rate_you_experience_or_day: {
      type: Number,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Fellow", fellowSchema);

module.exports = model;
