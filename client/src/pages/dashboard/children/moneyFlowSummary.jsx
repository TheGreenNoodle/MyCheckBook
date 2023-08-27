// react utility
import { useReducer } from "react";

// css
import styles from "../layout.module.css";

function Block({ name, moneyAmount }) {
  function setToZero() {
    return 0;
  }

  const [state, dispatch] = useReducer(setToZero, moneyAmount);
  if (typeof state !== "number" || isNaN(state)) dispatch();

  return (
    <div
      className={`${styles["box"]}  ${styles["box--moneyFlow"]} ${styles["box--moneyFlow__block"]} `}>
      <h3>{name}</h3>
      <p>${state}</p>
    </div>
  );
}

function MoneyFlowSummary({ income, expenses }) {
  return (
    <div
      aria-label="Money Flow Summary"
      className={`${styles["box"]} ${styles["box--moneyFlow"]} `}>
      <Block name="Income" moneyAmount={income} isIncome={true} />
      <hr className={`${styles["line"]}`} />

      <Block name="Expenses" moneyAmount={expenses} isIncome={false} />
      <hr className={`${styles["line"]}`} />

      <Block
        name="Return"
        moneyAmount={income - expenses}
        isIncome={true}
        isNetProfit={true}
      />
    </div>
  );
}

export { MoneyFlowSummary };
