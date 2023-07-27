// css
import styles from "../../layout.module.css";

function NavDropdown({ menuToggled, setMenuToggle }) {
  return (
    <button
      onClick={() => {
        setMenuToggle(!menuToggled);
      }}
      className={`${styles["box"]} ${styles["box--dropdown"]}`}>
      <img
        className={`${styles["box__icon"]}`}
        onError={({ currentTarget }) => {
          currentTarget.onError = null; // prevents looping
          currentTarget.src = "/icons/header/down-arrow-white.png";
        }}
        src="/icons/header/down-arrow-white.svg"
        alt="dropdown-icon"
      />
    </button>
  );
}

export default NavDropdown;
