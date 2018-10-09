import functions from "../src/utils/HistoryCaseRevision.functions";

const state = {
  stationName: "null",
  caseTitle: "null",
  caseDetails: "null",
  tickDisplayed: true,
  caseDetailsDisplayed: true,
  markSchemeCompleted: 0,
  markSchemeElements: [
    { text: "string", completed: false },
    { text: "string2", completed: false }
  ]
};

describe("Ensure markComplete() successfully updates by ID", () => {
  test("valid id should update state", () => {
    const newState = functions.markComplete(0, state);
    // check if the element is marked as completed
    expect(newState.markSchemeElements[0].completed).toBeTruthy();
    // check if number of completed elements increased
    expect(newState.markSchemeCompleted).toBe(1);
    // check if other states remain unchanged
    expect(state.tickDisplayed).toBeTruthy();
  });

  test("invalid id should throw error", () => {
    expect(() => functions.markComplete(2000, state)).toThrow();
  });
});

describe("Ensure markComplete() successfully toggles 'complete' status", () => {
  test("markSchemeElement object is true after markComplete()", () => {
    // set completed to false
    state.markSchemeElements[0].completed = false;
    // call the function
    const newState = functions.markComplete(0, state);
    // check if complete: true after click
    expect(newState.markSchemeElements[0].completed).toBe(true);
  });
  test("markSchemeElement object goes back to false after calling markComplete() again", () => {
    // call the function
    const newState = functions.markComplete(0, state);
    // check if complete: false after second click
    expect(newState.markSchemeElements[0].completed).toBe(false);
  });
});

describe("Test swipe() updates caseDetailsDisplayed", () => {
  test("state should be updated", () => {
    const newState = functions.swipe(state);
    expect(newState.caseDetailsDisplayed).toBe(!state.caseDetailsDisplayed);
  });
});
