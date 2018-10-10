import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HistoryCaseRevision from "../src/components/HistoryCaseRevision";
import { render, fireEvent } from "react-testing-library";

const { getByTestId } = render(
  <Router>
    <HistoryCaseRevision
      match={{ params: { station: "chest-pain", caseid: "0" } }}
    />
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
