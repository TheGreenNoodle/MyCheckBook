// react utility
import { useState, useRef } from "react";

// utility
import { createArrayOfDates } from "../../../common/utility/date/createArrayOfDates";
import Toggle from "../../../common/utility/toggle";

// create a unique key
import { v4 as uuidv4 } from "uuid";

// css
import styles from "../layout.module.css";

const timeFrames = {
  "Past 30 Days": createArrayOfDates(30),
  "Past 90 Days": createArrayOfDates(90),
  "Past Year": createArrayOfDates(365),
  "All Time": [],
};

// used to change the time frame of data in dashboard
// can wrap around other components and have the dropdown menu overlay them
function ChangeTimeFrame({ setTimeFrame, children }) {
  const [menuHeaderText, setMenuHeaderText] = useState("Past 30 Days");

  const dropdown__btn = useRef(null);
  return (
    <div className={`${styles[`changeTimeFrame`]}`}>
      <button
        aria-label="Change time frame dropdown"
        ref={dropdown__btn}
        className={`${styles["box"]} ${styles["box--dropdown__btn"]}`}>
        <h3 className={`${styles["box--dropdown__header"]}`}>
          {menuHeaderText}
        </h3>

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

      <div className={`${styles["changeTimeFrame__menuAndChildren"]}`}>
        <Toggle toggler={dropdown__btn.current} initialState={false}>
          <ul
            aria-label="Time frame options"
            className={`${styles["box"]} ${styles["box--dropdown__menu"]}`}>
            {Object.keys(timeFrames).map((keyName) => {
              return (
                <li key={uuidv4()}>
                  <button
                    aria-label={keyName}
                    onClick={(e) => {
                      const keyName = e.target.value;
                      setMenuHeaderText(keyName);
                      setTimeFrame({
                        name: keyName,
                        dates: timeFrames[keyName],
                      });
                    }}
                    className={`${styles["box"]} ${styles["box--dropdown__menu__btn"]}`}
                    value={keyName}>
                    {keyName}
                  </button>
                </li>
              );
            })}
          </ul>
        </Toggle>

        {/* elements that are overladed by changeTimeFrames menu */}
        {children}
      </div>
    </div>
  );
}

export { ChangeTimeFrame };
