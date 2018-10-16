import timerFormat from "../src/utils/timerFormat";

test("timerFormat should properly display time inputted in seconds in string MM:SS or 00:SS format", () => {
  expect(timerFormat(61)).toEqual("01:01");
  expect(timerFormat(5)).toEqual("00:05");
  expect(timerFormat(732)).toEqual("12:12");
});
