// react utility
import { forwardRef } from "react";

// utility
import { xToCurrDate } from "../../../common/utility/date/xToCurrDate";

// css
import background from "../../../common/css/color/background-color.module.css";
import border from "../../../common/css/outer-box/border-radius.module.css";
import position from "../../../common/css/position/box-align.module.css";

function Option({ daysBack, name }) {
  const dates = xToCurrDate(daysBack);
  return <option value={dates}>{name}</option>;
}

// used to change the time frame of data in dashboard
const ChangeTimeFrame = forwardRef((props, ref) => {
  return (
    <select
      className={`${background.whiteWithNoOutline} ${border.fivePx} ${position.flexMid}`}
      ref={ref}>
      <Option daysBack={30} name="Past Month" />
      <Option daysBack={90} name="Past 3 Months" />
      <Option daysBack={365} name="Past Year" />
    </select>
  );
});

export { ChangeTimeFrame };
