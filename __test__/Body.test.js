import React from "react";
import Body from "../src/components/Body";
import HistoryCaseRevision from "../src/components/HistoryCaseRevision";
import { render, fireEvent } from "react-testing-library";

test("Jest is working", () => {
  expect(true).toBeTruthy();
});

describe("Testing Body component", () => {
  test("when swipe button is clicked mark scheme renders 3 elements", () => {
    const { getByTestId } = render(<HistoryCaseRevision />);
    const swipeButton = getByTestId("swipeButton");
    fireEvent.click(swipeButton);
    const markSchemeList = getByTestId("markSchemeList");
    expect(markSchemeList.children.length).toBe(3);
  });
});
