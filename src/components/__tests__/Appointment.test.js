import React from "react";

import { render, cleanup, waitForElement } from "@testing-library/react";

import Appointment from "components/Appointments/index";

afterEach(cleanup);

it("renders without crashing", async() => {
  const { getByAltText } = render(<Appointment />);

  await waitForElement(() => getByAltText("Add"));

});