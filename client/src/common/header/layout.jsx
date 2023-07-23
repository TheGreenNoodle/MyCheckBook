// ui components
import Title from "./components/title";

// btns
import NavLinks from "./components/nav-links/nav-links";

// css
import layout from "./layout.module.css";

function Header() {
  return (
    <header className={`${layout["grid"]} ${layout["grid--main"]}`}>
      <Title />
      <NavLinks />
    </header>
  );
}

export default Header;
