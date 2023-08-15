// css
import styles from "../layout.module.css";

// {isIncome ? ${styles["box--green"]} : ${styles["box--red"]} }

function Block({ name, moneyAmount }) {
  return (
    <div
      className={`${styles["box"]}  ${styles["box--moneyFlow"]} ${styles["box--moneyFlow__block"]} `}>
      <h3>{name}</h3>
      <p>${moneyAmount}</p>
    </div>
  );
}

function MoneyFlowSummary({ income, expenses }) {
  return (
    <div className={`${styles["box"]} ${styles["box--moneyFlow"]} `}>
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
