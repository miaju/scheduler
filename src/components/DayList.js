import React from "react";
import DayListItem from "./DayListItem";

// list of Days component in the nav bar
// props: {
//   days: Array,
//   value: String,
//   onChange: Function
// }
export default function DayList(props) {
  let days =[];
  if (props.days !== undefined) {
    days = props.days.map(day => {
      return (
        <DayListItem
          key={day.id} 
          name={day.name} 
          spots={day.spots} 
          selected={day.name === props.value}
          setDay={props.onChange}
        />
      );
    });
  } 
  return(
    <ul>
      {days}
    </ul>
  );
  
}