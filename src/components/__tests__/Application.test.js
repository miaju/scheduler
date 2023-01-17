import React from "react";

import { render, cleanup, waitForElement, fireEvent} from "@testing-library/react";

import Application from "components/Application";
jest.mock('axios');
afterEach(cleanup);

it("defaults to Monday and changes the schedule when a new day is selected", async() => {
  const { getByText } = render(<Application />);

  await waitForElement(() => getByText("Monday"));

  fireEvent.click(getByText("Tuesday"));

  expect(getByText("Leopold Silvers")).toBeInTheDocument();
});