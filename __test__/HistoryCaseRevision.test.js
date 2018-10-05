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
    { text: "string2", completed: true }
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

describe("Test swipe() updates caseDetailsDisplayed", () => {
  test("state should be updated", () => {
    const newState = functions.swipe(state);
    expect(newState.caseDetailsDisplayed).toBe(!state.caseDetailsDisplayed);
  });
});
