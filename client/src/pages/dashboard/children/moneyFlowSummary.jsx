// react utility
import { useReducer, useMemo } from "react";

// css
import styles from "../layout.module.css";

function Block({ name, moneyAmount }) {
  function roundUp(state) {
    return Math.round(state * 100) / 100;
  }

  const [state, dispatch] = useReducer(roundUp, moneyAmount);
  useMemo(() => {
    dispatch();
  }, []);

  return (
    <div
      className={`${styles["box"]}  ${styles["box--moneyFlow"]} ${styles["box--moneyFlow__block"]} `}>
      <h3>{name}</h3>
      <p>${state}</p>
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
