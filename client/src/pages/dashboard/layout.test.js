// jest utility
import userEvent from "@testing-library/user-event";
import { screen, render, prettyDOM, logRoles } from "@testing-library/react";

// so canvas works properly in the testing environment
import "jest-canvas-mock";

// components
import Layout from "./layout";
import { ChangeTimeFrame } from "./children/changeTimeFrame";
import { MoneyFlowSummary } from "./children/moneyFlowSummary";

// allows this react-chartjs-2 to render in jest
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
  });
});

describe("changeTimeFrame", () => {
  test("all elements render in DOM and everything starts at its default state", () => {
    render(
      <ChangeTimeFrame>
        <h1>Test Child Element</h1>
      </ChangeTimeFrame>
    );

    const dropdownBtn = screen.getByRole("button", {
      name: "Change time frame dropdown",
    });
    expect(dropdownBtn).toBeInTheDocument();

    const defaultDropDownHeader = screen.getByRole("heading", {
      name: "Past 30 Days",
    });
    expect(defaultDropDownHeader).toBeInTheDocument();

    const dropDownArrow = screen.getByRole("img", { name: "dropdown-icon" });
    expect(dropDownArrow).toBeInTheDocument();

    const childElement = screen.getByRole("heading", {
      name: "Test Child Element",
    });
    expect(childElement).toBeInTheDocument();

    // need to remove element from the dom tree
    const optionsList = screen.queryByRole("list", {
      name: "Time frame options",
    });
    expect(optionsList).not.toBeInTheDocument();
  });

  test("clicking the drop-down displays the menu and removes the child underneath. Clicking again dose the opposite.", () => {
    render(<ChangeTimeFrame />);
  });

  test("clicking each option changes the name of the drop-down", () => {
    render(<ChangeTimeFrame />);
  });
});

describe("moneyFlowSummary", () => {
  test("all elements render in DOM and if income/expenses is not inputted money value for paragraph tags default to zero", () => {
    render(<MoneyFlowSummary />);

    // h3 tags
    const headers = [
      { role: "heading", name: "Income" },
      { role: "heading", name: "Expenses" },
      { role: "heading", name: "Return" },
    ];

    headers.forEach((element) => {
      const foundElement = screen.getByRole(element.role, {
        name: element.name,
      });
      expect(foundElement).toBeInTheDocument();
    });

    // hr tags
    const lines = screen.getAllByRole("separator");
    expect(lines.length).toEqual(2);

    // paragraph tags where money out put is
    const paragraphs = screen.getAllByText("$0.00");
    expect(paragraphs.length).toEqual(3);
  });

  test("expense is the difference between income and spending", () => {
    render(<MoneyFlowSummary totals={{ income: 45.48, expenses: 23 }} />);

    const moneyReturn = screen.getByText("$22.48");
    expect(moneyReturn).toBeInTheDocument();
  });
});
