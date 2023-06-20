import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NavLinks from "./nav-links";

test("header links are directing to proper react-router endpoints", () => {
  return false;
});
describe("imgs load correct file based on if an error is thrown", () => {
  test("when error is not thrown load SVG", async () => {
    render(<NavLinks />);
    const imgs = await screen.findAllByRole("img");

    // make sure all btns have an img
    expect(imgs.length).toBe(6);

    // makes sure all imgs are right img type
    for (let i = 0; i < imgs.length; i++) {
      console.log(imgs[i].src.endsWith(".svg"));
      expect(imgs[i].src).endsWith(".svg");
    }
  });
  test("when error is thrown load PNG", () => {
    return false;
  });
});
