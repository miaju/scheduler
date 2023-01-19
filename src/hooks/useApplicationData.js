import { useState, useEffect } from "react";
import axios from "axios";

// Sets state and makes axios calls in the Application
// state: {
//   day: String,
//   days: Array,
//   appointments: Object,
//   interviewers: Object
// }

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // updates the spots for the given day by the amount given
  function updateSpots(day, amount) {
    const dayId = state.days.map(d => d.name).indexOf(day);
    const spots = state.days[dayId].spots;
    state.days[dayId] = {
      ...state.days[dayId],
      spots: spots + amount
    }
  } 

  const setDay = day => setState({ ...state, day });

  // makes an axios put request to book the given interview, replaces existing interview if just editing it
  async function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    await axios.put(`api/appointments/${id}`, appointment)
      .then(response => {
        if(!(state.appointments[id].interview)){
          updateSpots(state.day, -1);
        }
        setState({
          ...state,
          appointments
        });
      });
  
  }

  // makes an axios delete request to remove the given interview
  async function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    await axios.delete(`api/appointments/${id}`, appointment)
      .then( response =>{
        updateSpots(state.day, 1);
        setState({
          ...state,
          appointments
        })
      }
      );

  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    }).catch((error) => {
      console.error(error.message);
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
};