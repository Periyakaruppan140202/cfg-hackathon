import React, { useState } from "react";
import { getEndPoint, postEndPoint } from "../../request/request";
import "./Form.css";
import NavBars from "../../components/NavBars";
export default function App() {
  const [loading, setIsLoading] = React.useState(false);
  const [errorMsg, setErrMsg] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [name, setName] = React.useState("");
  const [centerName, setCenterName] = React.useState("");
  const [identified, setIdentified] = React.useState("");
  const [enrolled, setEnrolled] = React.useState("");
  const [conducted, setConducted] = React.useState("");
  const [hindi, setHindi] = React.useState("");
  const [english, setEnglish] = React.useState("");
  const [evs, setEvs] = React.useState("");
  const [math, setMath] = React.useState("");
  const [regular, setRegular] = React.useState("");
  const [exposure, setExposure] = React.useState("");
  const [session, setSession] = React.useState("");
  const [training, setTraining] = React.useState("");
  const [events, setEvents] = React.useState("");
  const [visits, setVisits] = React.useState("");
  const [parentWorkshop, setParentWorkshop] = React.useState("");
  const [parentAwareness, setParentAwareness] = React.useState("");
  const [members, setMembers] = React.useState("");
  const [parentsVisit, setParentsVisit] = React.useState("");
  const [oneOnOne, setOneOnOne] = React.useState("");
  const [thanks, setThanks] = React.useState("");
  const [location, setLocation] = React.useState("");

  async function submitRegister(e) {
    //   console.log(name,email,password, isStudent)
    e.preventDefault();
    if (thanks > 5) {
      alert("Rating has to be less than 5");
      return;
    } else if (thanks < 1) {
      alert("Rating has to be more than 0");
      return;
    }
    try {
      const response2 = await postEndPoint(
        "/add",
        {
          name,
          centerName,
          identified,
          enrolled,
          conducted,
          hindi,
          english,
          evs,
          math,
          regular,
          exposure,
          training,
          events,
          visits,
          parentWorkshop,
          parentAwareness,
          members,
          parentsVisit,
          oneOnOne,
          thanks,
          location,
        },
        null
      );
      if (response2) {
        if (response2.status === 200 && response2.data.token) {
          console.log(response2);
          alert("Form Successfully Submitted");
          localStorage.setItem("token", response2.data.token);
        }
      } else {
        setIsLoading(false);
        setErrMsg("OOPS AN ERROR OCCURED TRY AGAIN LATER!!");
        setShowError(true);
      }
    } catch (err) {
      alert(err.response.data.message);
      setIsLoading(false);
      if (
        typeof err.response !== "undefined" &&
        typeof err.response.data !== "undefined" &&
        typeof err.response.data.msg !== "undefined"
      ) {
        setErrMsg(err.response.data.msg);
        setShowError(true);
      } else {
        setErrMsg("OOPS AN ERROR OCCURED TRY AGAIN LATER!!");
        setShowError(true);
      }
    }
  }

  return (
    <>
      <NavBars />
      <body className="fellow">
        <form className="fellowForm">
          <h1>Monthly Review</h1>

          <label>
            Name:
            <input
              type="text"
              name="FellowName"
              value={name}
              onInput={(event) => {
                setName(event.target.value);
              }}
              required
            />
          </label>
          <label>
            CenterName:
            <input
              type="text"
              name="CenterName"
              value={centerName}
              onInput={(event) => {
                setCenterName(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Total Number OoSC and Out Of School Children Identified:
            <input
              type="number"
              name="Total_Number_OoSC_and_Out_Of_School_Children_Identified"
              value={identified}
              onInput={(event) => {
                setIdentified(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Total Number OoSC and Out Of Children Enrolled In Learning Center:
            <input
              type="number"
              name="Total_Number_OoSC_and_Out_Of_Children_Enrolled_In_Learning_Center"
              value={enrolled}
              onInput={(event) => {
                setEnrolled(event.target.value);
              }}
              required
            />
          </label>
          <label>
            The Total Classes Conducted this month:
            <input
              type="number"
              name="The_Total_Classes_Conducted_this_month"
              value={conducted}
              onInput={(event) => {
                setConducted(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Hindi:
            <input
              type="number"
              name="Hindi"
              value={hindi}
              onInput={(event) => {
                setHindi(event.target.value);
              }}
              required
            />
          </label>
          <label>
            English:
            <input
              type="number"
              name="English"
              value={english}
              onInput={(event) => {
                setEnglish(event.target.value);
              }}
              required
            />
          </label>
          <label>
            EVS:
            <input
              type="number"
              name="EVS"
              value={evs}
              onInput={(event) => {
                setEvs(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Math:
            <input
              type="number"
              name="Math"
              value={math}
              onInput={(event) => {
                setMath(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of the Students attended classes regularly (More than 80%
            attendance):
            <input
              type="number"
              name="Number_of_the_Students_attended_classes_regularly_More_than_80_attendance"
              value={regular}
              onInput={(event) => {
                setRegular(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of exposure visits/sessions done:
            <input
              type="number"
              name="Number_of_exposure_visits_sessions_done"
              value={exposure}
              onInput={(event) => {
                setExposure(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of Sessions/Visits/Meetings on vision setting, reflection and
            self-awareness:
            <input
              type="number"
              name="Number_of_Sessions_Visits_Meetings_on_vision_setting_reflection_and_selfawareness"
              value={session}
              onInput={(event) => {
                setSession(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of training on classroom intervention, behaviour management
            cycle and culture & Values:
            <input
              type="number"
              name="Number_of_training_on_classroom_intervention_behaviour_management_cycle_and_culture_Values"
              value={training}
              onInput={(event) => {
                setTraining(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of community visits made to identify and understand local
            problems:
            <input
              type="number"
              name="Number_of_community_visits_made_to_identify_and_understand_local_problems"
              value={visits}
              onInput={(event) => {
                setVisits(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of Community event organised to mobilize stakeholders:
            <input
              type="number"
              name="Number_of_Community_event_organised_to_mobilize_stakeholders"
              value={events}
              onInput={(event) => {
                setEvents(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of parents attended workshops/training (PTM, SMC):
            <input
              type="number"
              name="Number_of_parents_attended_workshops_training_PTM_SMC"
              value={parentWorkshop}
              onInput={(event) => {
                setParentWorkshop(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of parents joined/participated in awareness drives and
            campaigns:
            <input
              type="number"
              name="Number_of_parents_joined_participated_in_awareness_drives_and_campaigns"
              value={parentAwareness}
              onInput={(event) => {
                setParentAwareness(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of community members attended community events and program
            organized for mobilization:
            <input
              type="number"
              name="Number_of_community_members_attended_community_events_and_program_organized_for_mobilization"
              value={members}
              onInput={(event) => {
                setMembers(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of parents visited Anubhuti learning centers:
            <input
              type="number"
              name="Number_of_parents_visited_Anubhuti_learning_centers"
              value={parentsVisit}
              onInput={(event) => {
                setParentsVisit(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Number of parents had one on one conversations with fellows during
            the field visit:
            <input
              type="number"
              name="Number_of_parents_had_one_on_one_conversations_with_fellows_during_the_field_visit"
              value={oneOnOne}
              onInput={(event) => {
                setOneOnOne(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Thank You for Filling the Form - Please Rate you experience or day:
            <input
              type="number"
              name="Thank_You_for_Filling_the_Form_Please_Rate_you_experience_or_day"
              value={thanks}
              onInput={(event) => {
                setThanks(event.target.value);
              }}
              required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="Location"
              value={location}
              onInput={(event) => {
                setLocation(event.target.value);
              }}
              required
            />
          </label>

          <button
            onClick={() => {
              submitRegister();
            }}
          >
            Submit
          </button>
        </form>
      </body>
    </>
  );
}
