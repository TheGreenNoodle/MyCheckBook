// react utility
import { useState, useRef } from "react";

// utility
import { xToCurrDate } from "../../../common/utility/date/xToCurrDate";

// create a unique key
import { v4 as uuidv4 } from "uuid";

// css
import styles from "../layout.module.css";

const timeFrames = {
  "Past 30 Days": xToCurrDate(30),
  "Past 90 Days": xToCurrDate(90),
  "Past Year": xToCurrDate(365),
  "All Time": [],
};

// used to change the time frame of data in dashboard
// can wrap around other components if need to overlay them
function ChangeTimeFrame({ setTimeFrame, children }) {
  const [toggled, setToggled] = useState(false);

  const menu = useRef(null);

  if (menu.current)
    toggled
      ? menu.current.classList.add(`${styles["display--none"]}`)
      : menu.current.classList.remove(`${styles["display--none"]}`);

  return (
    <div className={`${styles[`wrapper--flex`]}`}>
      <button
        onClick={() => {
          setToggled(!toggled);
        }}
        className={`${styles["box"]} ${styles["box--dropdown__btn"]}`}>
        <h3 className={`${styles["box--dropdown__header"]}`}>Past 30 Days</h3>
        <img
          className={`${styles["box--dropdown__icon"]}`}
          onError={({ currentTarget }) => {
            currentTarget.onError = null; // prevents looping
            currentTarget.src = "/icons/changeTimeFrame/down-arrow-black.png";
          }}
          src="/icons/changeTimeFrame/down-arrow-black.svg"
          alt="dropdown-icon"
        />
      </button>

      <div className={styles.div}>
        <ul
          ref={menu}
          className={`${styles["box"]} ${styles["box--dropdown__menu"]}`}
          onChange={(e) => {
            const keyName = e.target.value;
            setTimeFrame({ name: keyName, dates: timeFrames[keyName] });
          }}>
          {Object.keys(timeFrames).map((keyName) => {
            return (
              <li key={uuidv4()} data-value={keyName}>
                <button
                  className={`${styles["box"]}  ${styles["box--sharpCorners"]} ${styles["box--dropdown__menu__btn"]}`}>
                  <p>{keyName}</p>
                </button>
              </li>
            );
          })}
        </ul>

        {/* an element we want overladed */}
        {children}
      </div>
    </div>
  );
}

export { ChangeTimeFrame };
