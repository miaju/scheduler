import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import "components/InterviewerList.scss"

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map((inter) => {
    return(
      <InterviewerListItem 
      key={inter.id} 
      name={inter.name} 
      avatar={inter.avatar} 
      setInterviewer={() => props.onChange(inter.id)} 
      selected={(props.interviewer===inter.id)}/> 
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