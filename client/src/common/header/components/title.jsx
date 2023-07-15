// css
import styles from "../layout.module.css";

function Title() {
  return (
    <h1
      className={`${styles["box"]} ${styles["box--black"]} ${styles["box__title"]}`}>
      My Checkbook
    </h1>
  );
}
export default Title;
