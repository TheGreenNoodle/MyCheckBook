// jest testing kit
import { fireEvent, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// components
import NavLinks from "./nav-links";

// test("header links are directing to proper react-router endpoints", () => {
//   return false;
// });

describe("header icons", () => {
  test("when error is not thrown load SVG", async () => {
    render(<NavLinks />);
    const imgs = await screen.findAllByRole("img");

    // make sure all btns have an img
    expect(imgs.length).toBe(6);

    // make sure that it is the svgs that are loaded
    for (let i = 0; i < imgs.length; i++) {
      expect(imgs[i].src.endsWith(".svg")).toBe(true);
    }
  });

  test("when error is thrown load PNG", async () => {
    render(<NavLinks />);
    const imgs = await screen.findAllByRole("img");

    // make sure all btns have an img
    expect(imgs.length).toBe(6);

    // make sure that it is the svgs that are loaded
    for (let i = 0; i < imgs.length; i++) {
      fireEvent.error(imgs[i]);
      expect(imgs[i].src.endsWith(".png")).toBe(true);
    }
  });
});
