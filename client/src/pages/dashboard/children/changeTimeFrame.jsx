// utility
import { xToCurrDate } from "../../../common/utility/date/xToCurrDate";

// css
import background from "../../../common/css/color/background-color.module.css";

const timeFrames = {
  "Past 30 Days": xToCurrDate(30),
  "Past 90 Days": xToCurrDate(90),
  "Past Year": xToCurrDate(365),
  "All Time": [],
};

// used to change the time frame of data in dashboard
function ChangeTimeFrame({ setTimeFrame }) {
  return (
    <select
      className={`${background.whiteWithNoOutline}`}
      onChange={(e) => {
        const keyName = e.target.value;
        setTimeFrame({ name: keyName, dates: timeFrames[keyName] });
      }}>
      {Object.keys(timeFrames).map((keyName, index) => {
        return (
          <option key={index} value={keyName}>
            {keyName}
          </option>
        );
      })}
    </select>
  );
}

export { ChangeTimeFrame };
