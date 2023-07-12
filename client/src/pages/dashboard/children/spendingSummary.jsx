// css
import background from "../../../common/css/color/background-color.module.css";
import border from "../../../common/css/outer-box/border-radius.module.css";
import position from "../../../common/css/position/box-align.module.css";

function Block({ name, moneyAmount }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>${moneyAmount}</p>
    </div>
  );
}

function SpendingSummary() {
  return (
    <div
      className={`${background.whiteWithNoOutline} ${border.fivePx} ${position.flexMidWrap}`}>
      <h1>Expense Summary</h1>
      <hr />
      <Block name="Income" moneyAmount={2000} />
      <hr />
      <Block name="Expenses" moneyAmount={2000} />
      <hr />
      <Block name="Net Profit" moneyAmount={2000} />
    </div>
  );
}

export { SpendingSummary };
