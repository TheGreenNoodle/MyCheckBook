// css
import styles from "../layout.module.css";

function Block({ name, moneyAmount }) {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let currency = currencyFormat.format(0);
  if (moneyAmount) currency = currencyFormat.format(moneyAmount);

  return (
    <div
      className={`${styles["box"]}  ${styles["box--moneyFlow"]} ${styles["box--moneyFlow__block"]} `}>
      <h3>{name}</h3>
      <p>{currency}</p>
    </div>
  );
}

function MoneyFlowSummary({ totals }) {
  let totalsCopy = totals;
  if (!totals) totalsCopy = { income: 0, expenses: 0 };
  return (
    <div
      aria-label="Money Flow Summary"
      className={`${styles["box"]} ${styles["box--moneyFlow"]} `}>
      <Block name="Income" moneyAmount={totalsCopy.income} isIncome={true} />
      <hr className={`${styles["line"]}`} />

      <Block
        name="Expenses"
        moneyAmount={totalsCopy.expenses}
        isIncome={false}
      />
      <hr className={`${styles["line"]}`} />

      <Block
        name="Return"
        moneyAmount={totalsCopy.income - totalsCopy.expenses}
      />
    </div>
  );
}

export { MoneyFlowSummary };
