import functions from "../src/utils/RevisionPage.functions";

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
  let newState = { ...state };
  test("valid id can toggle true", () => {
    newState = functions.markComplete(0, newState);
    expect(newState.markSchemeElements[0].completed).toBeTruthy();
    expect(newState.markSchemeCompleted).toBe(1);
  });
  test("valid id can toggle false", () => {
    newState = functions.markComplete(0, newState);
    expect(newState.markSchemeElements[0].completed).toBeFalsy();
    expect(newState.markSchemeCompleted).toBe(0);
  });
  test("invalid id should throw error", () => {
    expect(() => functions.markComplete(2000, newState)).toThrow();
  });
});

describe("Test swipe() updates caseDetailsDisplayed", () => {
  const newState = functions.swipe(state);
  test("state should be updated", () => {
    expect(newState.caseDetailsDisplayed).toBe(!state.caseDetailsDisplayed);
  });
});
