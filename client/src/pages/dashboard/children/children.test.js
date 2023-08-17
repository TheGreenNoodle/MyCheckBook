// jest utility
import userEvent from "@testing-library/user-event";
import { screen, render, logDOM } from "@testing-library/react";

// components
import { ChangeTimeFrame } from "./changeTimeFrame";

describe("changeTimeFrame.jsx", () => {
  test("all time frame buttons appear in DOM", () => {
    render(<ChangeTimeFrame />);
    const btns = screen.getAllByRole("button");

    for (let i = 0; i < btns.length; i++) {
      logDOM(btns[i]);
    }
  });
});

describe("moneyFlowSummary.jsx", () => {
  test("", () => {});
});
