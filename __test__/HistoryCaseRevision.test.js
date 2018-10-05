import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import { markComplete } from "../src/components/HistoryCaseRevision";

afterEach(cleanup);

describe("Ensure markComplete() successfully updates by ID", () => {
  // todo: create dummy state data and ensure it updates properly
  // create new instance of component to be tested

  const state = {
    stationName: "null",
    caseTitle: "null",
    caseDetails: "null",
    tickDisplayed: true,
    caseDetailsDisplayed: true,
    markSchemeCompleted: 0,
    markSchemeElements: [
      { text: "string", completed: false },
      { text: "string2", completed: true }
    ]
  };
  const newState = markComplete(0, state);
  test("test valid id", () => {
    expect(newState.markSchemeElements[0].completed).toBeTruthy();
  });
});
