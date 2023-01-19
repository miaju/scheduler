import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import React, { useState } from 'react';


// Component for interview form
// props: {
//   student: String || null,
//   interviewer: Object || null,
//   interviewers: Object,
//   onCancel: Function,
//   onSave: Function,
// }
// state: [interviewer, student, error]

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  const reset = () => {
    setStudent("");
    setInterviewer(null);
  }
  const cancel = () => {
    reset();
    setError("");
    props.onCancel();
  }

  function validate() {
    if (!student) {
      setError("Student name cannot be blank");
      return;
    }

    if (!interviewer) {
      setError("Please select an interviewer");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  }
  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
         <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList 
          interviewers={props.interviewers}
          interviewer={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => validate()}>Save</Button>
        </section>
      </section>
    </main>
  )
}