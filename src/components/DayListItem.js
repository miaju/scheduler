import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

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
  const formattedSpots = formatSpots(props.spots);
  const dayClass = classNames("day-list__item", {"--selected": props.selected, "--full": !props.spots}).split(" ").join("");
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}