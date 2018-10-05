import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import HistoryCaseRevision from "../src/components/HistoryCaseRevision";

afterEach(cleanup);

test("Ensure markComplete() successfully updates by ID", () => {
  // todo: create dummy state data and ensure it updates properly
});
