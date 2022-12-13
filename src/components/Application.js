import React, { useState, useEffect } from "react";
import DayList from "./DayList";
import axios from "axios";

import "components/Application.scss";
import Appointment from "./Appointments";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: []
  });
  const setDay = day => setState({ ...state, day });
  const setDays = days => setState(prev => ({ ...prev, days}));
  useEffect(() => {
    axios.get("/api/days").then(response => setDays(response.data));
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList
        days={state.days}
        value={state.day}
        onChange={setDay}
      />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {state.appointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
