// utility
import { xToCurrDate } from "../../../common/utility/date/xToCurrDate";
// create a unique key
import { v4 as uuidv4 } from "uuid";

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
      className={``}
      onChange={(e) => {
        const keyName = e.target.value;
        setTimeFrame({ name: keyName, dates: timeFrames[keyName] });
      }}>
      {Object.keys(timeFrames).map((keyName) => {
        return (
          <option key={uuidv4()} value={keyName}>
            {keyName}
          </option>
        );
      })}
    </select>
  );
}

export { ChangeTimeFrame };
