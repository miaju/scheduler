import React from 'react';
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR-SAVE";
const ERROR_DELETE = "ERROR_DELETE";

// Appointment component; uses the other components in the Appointments file
// props: {
//   interview: Object || null,
//   id: Number,
//   cancelInterview: Function,
//   time: String,
//   interviewers: Object,
// }
export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props
    .bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(error => transition(ERROR_SAVE, true));
  
  }

  function del() {
    transition(DELETING);
   
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))   
    .catch((e) => transition(ERROR_DELETE, true));
  }

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === SHOW && (
        <Show
          id={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          time={props.time}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} time={props.time}/>}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => transition(EMPTY)} onSave={save}/>}
      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === DELETING && <Status message={"Deleting"}/>}
      {mode === CONFIRM && <Confirm message={"Are you sure you would like to delete this appointment?"} onCancel={back} onConfirm={() => del(props.id)}/>}
      {mode === EDIT && (
        <Form 
          interviewers={props.interviewers} 
          student={props.interview.student} 
          interviewer={props.interview.interviewer.id} 
          onCancel={() => transition(SHOW)} 
          onSave={save}
        />
        )}
      {mode === ERROR_SAVE && <Error onClose={back} message={"Could not save the appointment."}/>}
      {mode === ERROR_DELETE && <Error onClose={back} message={"Could not delete the appointment."}/>}
    </article>
  );
}