import markComplete from "../src/utils/markComplete";

describe("Ensure markComplete() successfully updates by ID", () => {
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

  test("invalid id returns error", () => {
    expect(markComplete(2000, state)).toThrow;
  });
});
