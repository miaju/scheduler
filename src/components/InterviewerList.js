import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import "components/InterviewerList.scss"

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map((inter) => {
    return(
      ((props.interviewer===inter.id) ? 
      <InterviewerListItem key={inter.id} id={inter.id} name={inter.name} avatar={inter.avatar} setInterviewer={() => props.setInterviewer(inter.id)} selected/> 
      : <InterviewerListItem key={inter.id} id={inter.id} name={inter.name} avatar={inter.avatar} setInterviewer={() => props.setInterviewer(inter.id)}/>)
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  );
}