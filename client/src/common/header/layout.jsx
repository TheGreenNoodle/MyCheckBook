// react utility
import { useState } from "react";

// ui components
import Title from "./components/title";

// btns
import NavDropdown from "./components/nav-links/nav-dropdown";
import NavLinks from "./components/nav-links/nav-links";

// css
import layout from "./layout.module.css";

function Header() {
  const [menuToggled, setMenuToggle] = useState(false);

  return (
    <header className={`${layout["grid"]} ${layout["grid--main"]}`}>
      <Title />
      <NavDropdown menuToggled={menuToggled} setMenuToggle={setMenuToggle} />
      <NavLinks menuToggled={menuToggled} />
    </header>
  );
}

export default Header;
