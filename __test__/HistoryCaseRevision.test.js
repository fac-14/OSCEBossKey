import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Revision from "../src/components/Pages/Revision/RevisionPage";
import { render, fireEvent } from "react-testing-library";

// setup a mock API call with fetch-mock to provide <Revision> component with correct information
const fetchMock = require("fetch-mock");
fetchMock.mock("end:/api/history/chest-pain/case/1", {
  payload: {
    title: "32-year-old man has panic attack after mocking fetch() in Node",
    details:
      "poor 32-year-old man is very thankful for fetch-mock and node-fetch packages",
    mark_scheme: ["one", "two", "three"]
  }
});

const { getByTestId } = render(
  <Router>
    <Revision match={{ params: { station: "chest-pain", caseid: "1" } }} />
  </Router>
);

describe("Testing Body component", () => {
  test("when Body component rendered, case details should be displayed", () => {
    const caseDetails = getByTestId("case-details");
    expect(caseDetails).toBeTruthy();
    expect(() => getByTestId("mark-scheme-list")).toThrow();
  });
  test("when swipe button is clicked, mark scheme should render", () => {
    const swipeButton = getByTestId("mark-ball");
    fireEvent.click(swipeButton);
    expect(() => getByTestId("case-detail")).toThrow();
    expect(getByTestId("mark-scheme-list")).toBeTruthy();
    const markSchemeList = getByTestId("mark-scheme-list");
    expect(markSchemeList.children.length).toBeGreaterThan(0);
  });
  // test for strikethrough mark scheme elements
});
