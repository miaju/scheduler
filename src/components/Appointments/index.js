import React from 'react';
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    };

    const bookInterview = async() => {
      await props.bookInterview(props.id, interview);
      transition(SHOW);
    }

    return bookInterview();
  
  }

  function confirm() {
    transition(CONFIRM);
  };

  function del() {
    transition(DELETING);
    const cancelInterview = async() => {
      await props.cancelInterview(props.id);
      transition(EMPTY);
    }
    return cancelInterview();
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === SHOW && (
        <Show
          id={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          time={props.time}
          onDelete={() => confirm(props.id)}
        />
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} time={props.time}/>}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => transition(EMPTY)} onSave={save}/>}
      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === DELETING && <Status message={"Deleting"}/>}
      {mode === CONFIRM && <Confirm message={"Are you sure you would like to delete this appointment?"} onCancel={back} onConfirm={() => del(props.id)}/>}
    </article>
  );
}