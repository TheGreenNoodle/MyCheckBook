// css
import styles from "../layout.module.css";

function Block({ name, moneyAmount }) {
  return (
    <>
      <h3>{name}</h3>
      <p>${moneyAmount}</p>
    </>
  );
}

function MoneyFlowSummary() {
  return (
    <div className={`${styles["box"]} ${styles["box--moneyFlow"]}`}>
      <Block name="Income" moneyAmount={2000} />
      <hr />
      <Block name="Expenses" moneyAmount={2000} />
      <hr />
      <Block name="Net Profit" moneyAmount={2000} />
    </div>
  );
}

export { MoneyFlowSummary };
