
// looks for all appointments that are for a given day
// takes state: Object, dayName: String
// returns: Array
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

// returns an interview if it exits
// takes state: Object, interview: Object
// returns: Object if interview exists, null otherwise
export function getInterview(state, interview){
  if (interview) {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer] 
    }
  }
  return null;

}

// returns a list of the available interviewers for the given day
// takes state: Object, dayName: String
// returns: Object
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