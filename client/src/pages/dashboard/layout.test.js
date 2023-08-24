// jest utility
import userEvent from "@testing-library/user-event";
import { screen, render, prettyDOM, logRoles } from "@testing-library/react";

// so canvas works properly in the testing environment
import "canvas";

// components
import Layout from "./layout";

// allows this npm package to render
jest.mock("react-chartjs-2", () => ({
  Line: () => null,
}));

describe("layout", () => {
  test("all components are rendering in DOM", () => {
    render(<Layout />);

    const elementsToCheck = [
      { role: "button", name: "Change time frame dropdown" },
      { role: "generic", name: "Money Flow Summary" },
      { role: "generic", name: "Income vs Spending line chart" },
    ];

    elementsToCheck.forEach((element) => {
      const foundElement = screen.getByRole(element.role, {
        name: element.name,
      });
      expect(foundElement).toBeInTheDocument();
    });

    // test chart.js somehow
  });
});

describe("changeTimeFrame", () => {
  test("all elements render in DOM", () => {});
  test("clicking the drop-down displays and removes the menu", () => {});
  test("clicking each option changes the name of the drop-down", () => {});
});
describe("moneyFlowSummary", () => {
  test("all elements render in DOM", () => {});
  test("expense is the difference between income and spending", () => {});
});
