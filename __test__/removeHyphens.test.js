import removeHyphens from "../src/utils/removeHyphens";

test("removeHyphens() should all hyphens from a string of text", () => {
  expect(removeHyphens("the-quick-brown-fox")).toEqual("the quick brown fox");
  expect(removeHyphens("not the definition of insanity - e=mc2")).toEqual(
    "not the definition of insanity   e=mc2"
  );
  expect(removeHyphens("")).toEqual("");
  expect(removeHyphens(null)).toEqual(null);
});
