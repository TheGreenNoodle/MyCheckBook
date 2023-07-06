// css
import background from "../../../common/css/color/background-color.module.css";
import border from "../../../common/css/outer-box/border-radius.module.css";
import position from "../../../common/css/position/box-align.module.css";

function ExpenseSummary() {
  return (
    <div
      className={`${background.whiteWithNoOutline} ${border.fivePx} ${position.flexMid}`}>
      Expense Summary
    </div>
  );
}

export { ExpenseSummary };
