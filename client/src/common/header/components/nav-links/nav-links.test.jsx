// jest testing kit
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// img dir path data
import { named, noName } from "./link-data";

// components
import NavLinks from "./nav-links";

// file system explorer
const fs = require("fs");

// test("header links are directing to proper react-router endpoints", () => {
//   return false;
// });

describe("icons", () => {
  test("files exist in right dir path", () => {
    const linkData = named.concat(noName);

    expect(fs.existsSync("./link-data.js")).toBe(true);

    // for (const element of linkData) {
    //   // svgs exist in right path
    //   expect(fs.existsSync(element.svg)).toBe(true);
    // }
  });

  describe("imgs load correct file based on if an error is thrown", () => {
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
});
