import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

// Day component in the list of days in the nav bar
// props: {
//   selected: Boolean,
//   spots: Number,
//   name: String,
//   setDay: Function
// }
export default function DayListItem(props) {
  const formatSpots= function(spots) {
    switch (Number(spots)) {
      case (1):
        return "1 spot remaining";
      case (0):
        return "no spots remaining";
      default:
        return `${spots} spots remaining`;
    }

  };
  const dayClass = classNames("day-list__item", {"--selected": props.selected, "--full": !props.spots}).split(" ").join("");
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}