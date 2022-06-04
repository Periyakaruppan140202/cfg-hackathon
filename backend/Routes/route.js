const router = require("express").Router();
const uploadController = require("../Controllers/upload");
const upload = require("../Middleware/upload");
const Fellow = require("../Models/fellow");
router.post("/uploadExcel", upload.single("excel"), uploadController.upload);
const ChartRoute = require("../Controllers/chart-route");
//Create Login Route
const jwt = require("jsonwebtoken");

router.use("/", ChartRoute);
const users = [
  {
    email: "admin",
    password: "admin",
  },
  {
    email: "user",
    password: "user",
  },
];
//Login Route and JWT token generation
router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = users.find((u) => String(u.email) == String(req.body.email));
    console.log(user);
    if (!user) {
      return res.status(400).send("User not found");
    }
    // const hashed = await bcrypt.hash(user.password, 10);
    if (user.password != req.body.password) {
      return res.status(400).send("Password is incorrect");
    }
    // const isMatch = await bcrypt.compare(req.body.password, hashed);
    // if (!isMatch) {
    //   return res.status(400).send("Invalid password");
    // }
    const token = jwt.sign({ user }, "secretkey", { expiresIn: "3d" });
    console.log(token);
    res.json({
      token,
    });
  } catch (error) {
    console.log(error);
  }
});
//verifyToken Middleware
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    //verify token
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.json({
          message: "Forbidden",
        });
      } else {
        res.json({
          message: "Protected route",
          authData,
        });
      }
    });
    next();
  } else {
    res.status(403).send("Forbidden");
  }
};

//add user data
router.post("/add", verifyToken, async (req, res) => {
  //Add fellow data
  const postFellow = new Fellow({
    FellowName: req.body.FellowName,
    CenterName: req.body.CenterName,
    Total_Number_OoSC_and_Out_Of_School_Children_Identified:
      req.body.Total_Number_OoSC_and_Out_Of_School_Children_Identified,
    Total_Number_OoSC_and_Out_Of_Children_Enrolled_In_Learning_Center:
      req.body
        .Total_Number_OoSC_and_Out_Of_Children_Enrolled_In_Learning_Center,
    The_Total_Classes_Conducted_this_month:
      req.body.The_Total_Classes_Conducted_this_month,
    Hindi: req.body.Hindi,
    English: req.body.English,
    EVS: req.body.EVS,
    Math: req.body.Math,
    Number_of_the_Students_attended_classes_regularly_More_than_80_attendance:
      req.body
        .Number_of_the_Students_attended_classes_regularly_More_than_80_attendance,
    Number_of_exposure_visits_sessions_done:
      req.body.Number_of_exposure_visits_sessions_done,
    Number_of_Sessions_Visits_Meetings_on_vision_setting_reflection_and_selfawareness:
      req.body
        .Number_of_Sessions_Visits_Meetings_on_vision_setting_reflection_and_selfawareness,
    Number_of_training_on_classroom_intervention_behaviour_management_cycle_and_culture_Values:
      req.body
        .Number_of_training_on_classroom_intervention_behaviour_management_cycle_and_culture_Values,
    Number_of_community_visits_made_to_identify_and_understand_local_problems:
      req.body
        .Number_of_community_visits_made_to_identify_and_understand_local_problems,
    Number_of_Community_event_organised_to_mobilize_stakeholders:
      req.body.Number_of_Community_event_organised_to_mobilize_stakeholders,
    Number_of_parents_attended_workshops_training_PTM_SMC:
      req.body.Number_of_parents_attended_workshops_training_PTM_SMC,
    Number_of_parents_joined_participated_in_awareness_drives_and_campaigns:
      req.body
        .Number_of_parents_joined_participated_in_awareness_drives_and_campaigns,
    Number_of_community_members_attended_community_events_and_program_organized_for_mobilization:
      req.body
        .Number_of_community_members_attended_community_events_and_program_organized_for_mobilization,
    Number_of_parents_visited_Anubhuti_learning_centers:
      req.body.Number_of_parents_visited_Anubhuti_learning_centers,
    Number_of_parents_had_one_on_one_conversations_with_fellows_during_the_field_visit:
      req.body
        .Number_of_parents_had_one_on_one_conversations_with_fellows_during_the_field_visit,
    Thank_You_for_Filling_the_Form_Please_Rate_you_experience_or_day:
      req.body.Thank_You_for_Filling_the_Form_Please_Rate_you_experience_or_day,
    Location: req.body.Location,
  });
  try {
    const saveFellow = await postFellow.save();
    console.log(saveFellow);
    res.json(saveFellow);
  } catch (err) {
    res.json(err);
  }
});
module.exports = router;
