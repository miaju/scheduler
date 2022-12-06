import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const days = props.days.map((day) => {
    return (
      props.day===day.name && <DayListItem name={day.name} spots={day.spots} setDay={props.setDay}/>
    );
  });
  return(
    <ul>
      {days}
    </ul>
  );
}