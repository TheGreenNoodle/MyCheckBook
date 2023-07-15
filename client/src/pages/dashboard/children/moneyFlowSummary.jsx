// css
import background from "../../../common/css/color/background-color.module.css";

function Block({ name, moneyAmount }) {
  return (
    <>
      <h2>{name}</h2>
      <p>${moneyAmount}</p>
    </>
  );
}

function MoneyFlowSummary() {
  return (
    <div className={`${background.whiteWithNoOutline}`}>
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

export { MoneyFlowSummary };
