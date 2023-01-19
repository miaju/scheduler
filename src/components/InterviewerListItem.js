import React from 'react';
import "components/InterviewerListItem.scss";
import classNames from "classnames";

// Interviewer component in the Interviewer list in the create/edit appointment view
// props: {
//   selected: Boolean,
//   setInterviewer: Function,
//   avatar: String,
//   name: String,
// }
export default function InterviewerListItem(props) {
  const interviewerClass = classNames("interviewers__item", {"--selected": props.selected}).split(" ").join("");
  return(
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected ? props.name : ""} 
    </li>
  );
}