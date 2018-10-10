import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HistoryCaseRevision from "../src/components/HistoryCaseRevision";
import { render, fireEvent } from "react-testing-library";

test("Jest is working", () => {
  expect(true).toBeTruthy();
});

describe("Testing Body component", () => {
  test("when swipe button is clicked mark scheme renders 3 elements", () => {
    const { getByTestId } = render(
      <Router>
        <HistoryCaseRevision
          match={{ params: { station: "chest-pain", caseid: "0" } }}
        />
      </Router>
    );
    const swipeButton = getByTestId("markBall");
    fireEvent.click(swipeButton);
    const markSchemeList = getByTestId("markSchemeList");
    expect(markSchemeList.children.length).toBe(3);
  });
});
