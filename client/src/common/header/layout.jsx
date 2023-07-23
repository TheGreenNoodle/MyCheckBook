// ui components
import Title from "./components/title";

// btns
import NavLinks from "./components/nav-links/nav-links";
import NavMenu from "./components/nav-links/nav-menu";

// css
import layout from "./layout.module.css";

function Header() {
  return (
    <header className={`${layout["grid"]} ${layout["grid--main"]}`}>
      <Title />
      <NavMenu />
      <NavLinks />
    </header>
  );
}

export default Header;
