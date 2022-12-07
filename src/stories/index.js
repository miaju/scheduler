import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";
import DayList from 'components/DayList';
import InterviewerListItem from "components/InterviewerListItem";
import InterviewerList from "components/InterviewerList";
import Appointment from "components/Appointments/index";
import Header from "components/Appointments/Header";
import Empty from "components/Appointments/Empty";
import Show from "components/Appointments/Show";
import Confirm from 'components/Appointments/Confirm';
import Status from "components/Appointments/Status";

storiesOf("Button", module)
  .addParameters({
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e"}]
    }
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

storiesOf("DayListItem", module) 
  .addParameters({
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e"}]
    }
  })
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />) 
  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />) 
  .add("Full", () => <DayListItem name="Monday" spots={0} />)
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} /> 
  ));

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
      spots: 0,
    },
];
  
storiesOf("DayList", module)
  .addParameters({
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: "#222f3e"}]
    }
  })
  .add("Monday", () => (
    <DayList days={days} day={"Monday"} setDay={action("setDay")} />
  ))
  .add("Tuesday", () => (
    <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />
  ))
  .add("Wednesday", () => (
      <DayList days={days} day={"Wednesday"} setDay={action("setDay")} />
  ));

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

storiesOf("InterviewerListItem", module)
  .addParameters({
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e"}]
    }
  })
  .add("Unselected", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
    />
  ))
  .add("Selected", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected
    />
  ))
  .add("Clickable", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={action("setInterviewer")}
    />
  ));

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

storiesOf("InterviewerList", module)
  .addParameters({
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e"}]
    }
  })
  .add("Initial", () => (
    <InterviewerList
      interviewers={interviewers}
    />
  ))
  .add("Selected", () => (
    <InterviewerList
      interviewers={interviewers}
      interviewer={3}
    />
  ))
  .add("Clickable", () => (
    <InterviewerList
      interviewers={interviewers}
      setInterviewer={action("setInterviewer")}
    />
  ));

storiesOf("Appointment", module)
  .addParameters({
    backgrounds: {
      default: "white", 
      values: [{name: "white", value: "#fff"}] 
    }
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />);

storiesOf("Appointment", module)
  .addParameters({
    backgrounds: {
      default: "white", 
      values: [{name: "white", value: "#fff"}] 
    }
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />)
  .add("Header", () => <Header time="12pm"/>)
  .add("Empty", () => <Empty onAdd={action("onAdd")}/>)
  .add("Show", () => <Show student="Lydia Miller-Jones" interviewer="Sylvia Palmer" onDelete={action("onDelete")} onEdit={action("onEdit")}/>)
  .add("Confirm", () => <Confirm message='Delete the appointment?' onConfirm={action("onConfirm")} onCancel={action("onCancel")}/>)
  .add("Status", () => <Status message="Deleting"/>)
  ;