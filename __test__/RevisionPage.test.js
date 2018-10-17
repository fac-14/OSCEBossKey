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
    mark_scheme: ["Introduces themselves", "Eats", "Shoots", "Leaves"]
  }
});

// wrapping in new <Router> tags is required for <Revision> component to render nav (which has <Link> elements)
// overwriting React Router match prop with necessary information for test
const { getByText, getByTestId } = render(
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
  // This passes even when the CompleteButton component is hijacked with a React Router link - why?
  // Can React Testing Library interpret <Link /> components?
  test("when more than one element of the mark scheme is completed, the submission tick should render", () => {
    fireEvent.click(getByText("Introduces themselves"));
    fireEvent.click(getByTestId("complete"));
    expect(getByText("Results")).toBeTruthy();
  });
  // test for strikethrough mark scheme elements
});
