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

  test("test valid id", () => {
    const newState = markComplete(0, state);
    // check if the element is marked as completed
    expect(newState.markSchemeElements[0].completed).toBeTruthy();
    // check if number of completed elements increased
    expect(newState.markSchemeCompleted).toBe(1);
    // check if other states remain unchanged
    expect(state.tickDisplayed).toBeTruthy();
  });

  test("invalid id returns null", () => {
    const invalidState = markComplete(2000, state);
    function markCompleteInvalid() {
      return invalidState;
    }
    // check if it throws an error when called with invalid id
    expect(markCompleteInvalid).toThrow;
  });
});
