import React from 'react';
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? <Show student={props.interview.student} id={props.id} time={props.time} interviewer={props.interview.interviewer.name} /> : <Empty time={props.time}/>}
    </article>
  );
}