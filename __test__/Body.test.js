import React from "react";
import App from "../src/components/App";
import { render, fireEvent } from "react-testing-library";

test("Jest is working", () => {
  expect(true).toBeTruthy();
});

describe("Testing Body component", () => {
  test("when swipe button is clicked mark scheme renders 3 elements", () => {
    const { getByTestId } = render(<App />);
    const swipeButton = getByTestId("swipeButton");
    fireEvent.click(swipeButton);
    const markSchemeList = getByTestId("markSchemeList");
    expect(markSchemeList.children.length).toBe(3);
  });
});
