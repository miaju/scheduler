import React from 'react';
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === SHOW && (
        <Show
          id={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          time={props.time}
        />
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} time={props.time}/>}
      {mode === CREATE && <Form interviewers={[]} onCancel={() => transition(EMPTY)}/>}
    </article>
  );
}