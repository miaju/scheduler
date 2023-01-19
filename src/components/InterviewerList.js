import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import "components/InterviewerList.scss"
import PropTypes from 'prop-types'; 

// list of interviewers component in the appointment edit/create view
// props: {
//   interviewers: Array,
//   onChange: Function,
//   interviewer: Number
// }
function InterviewerList(props) {
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;
