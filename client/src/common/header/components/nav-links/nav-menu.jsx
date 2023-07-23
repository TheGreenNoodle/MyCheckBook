// css
import styles from "../../layout.module.css";

function NavMenu({ menuToggled, setMenuToggle }) {
  return (
    <button
      onClick={() => {
        setMenuToggle(!menuToggled);
      }}
      className={`${styles["box"]} ${styles["box--dropdown"]}`}>
      <img
        onError={({ currentTarget }) => {
          currentTarget.onError = null; // prevents looping
          currentTarget.src = "/icons/header/down-arrow.png";
        }}
        src="/icons/header/down-arrow.svg"
        className={styles["box__icon"]}
        alt="dropdown-icon"
      />
    </button>
  );
}

export default NavMenu;
