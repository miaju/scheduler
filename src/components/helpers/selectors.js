export function getAppointmentsForDay(state, dayName) {
  let result = [];
  const appointmentIds = state.days.filter(day => day.name === dayName)[0];
  if(appointmentIds) {
    for(const appointmentId of appointmentIds.appointments) {
      result.push(state.appointments[appointmentId]);
    }
  }
  return result;
}