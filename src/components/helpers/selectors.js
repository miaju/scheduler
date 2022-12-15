export function getAppointmentsForDay(state, dayName) {
  let result = [];
  const day = state.days.filter(day => day.name === dayName)[0];
  if(day) {
    for(const appointmentId of day.appointments) {
      result.push(state.appointments[appointmentId]);
    }
  }
  return result;
}

export function getInterview(state, interview){
  if (interview) {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer] 
    }
  }
  return null;

}

export function getInterviewersForDay(state, dayName) {
  let result = [];
  const day = state.days.filter(day => day.name === dayName)[0];
  
  if(day) {
    for(const interviewerId of day.interviewers) {

      result.push(state.interviewers[interviewerId]);
    }
  }

  return result;
}