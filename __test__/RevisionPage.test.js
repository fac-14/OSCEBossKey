import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Revision from "../src/components/Pages/Revision/RevisionPage";
import { render, fireEvent } from "react-testing-library";

const { getByText, getByTestId } = render(
  <Router>
    <Revision match={{ params: { station: "chest-pain", caseid: "0" } }} />
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
  test("when more than one element of the mark scheme is completed, the submission tick should render", () => {
    fireEvent.click(getByText("Introduces themselves"));
    fireEvent.click(getByTestId("complete"));
    expect(getByText("Results")).toBeTruthy();
  });
  // test for strikethrough mark scheme elements
});
