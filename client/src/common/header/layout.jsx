// react utility
import { useState } from "react";

// ui components
import Title from "./components/title";

// btns
import NavMenu from "./components/nav-links/nav-menu";
import NavLinks from "./components/nav-links/nav-links";

// css
import layout from "./layout.module.css";

function Header() {
  const [menuToggled, setMenuToggle] = useState(false);

  return (
    <header className={`${layout["grid"]} ${layout["grid--main"]}`}>
      <Title />
      <NavMenu menuToggled={menuToggled} setMenuToggle={setMenuToggle} />
      <NavLinks menuToggled={menuToggled} />
    </header>
  );
}

export default Header;
