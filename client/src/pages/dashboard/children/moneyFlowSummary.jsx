// css
import styles from "../layout.module.css";

function Block({ name, moneyAmount }) {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div
      className={`${styles["box"]}  ${styles["box--moneyFlow"]} ${styles["box--moneyFlow__block"]} `}>
      <h3>{name}</h3>
      <p>{currencyFormat.format(moneyAmount)}</p>
    </div>
  );
}

function MoneyFlowSummary({ totals }) {
  return (
    <div
      aria-label="Money Flow Summary"
      className={`${styles["box"]} ${styles["box--moneyFlow"]} `}>
      <Block name="Income" moneyAmount={totals.income} isIncome={true} />
      <hr className={`${styles["line"]}`} />

      <Block name="Expenses" moneyAmount={totals.expenses} isIncome={false} />
      <hr className={`${styles["line"]}`} />

      <Block name="Return" moneyAmount={totals.income - totals.expenses} />
    </div>
  );
}

export { MoneyFlowSummary };
