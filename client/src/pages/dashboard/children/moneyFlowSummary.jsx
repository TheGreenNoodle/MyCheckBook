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

function MoneyFlowSummary() {
  return (
    <div className={`${styles["box"]} ${styles["box--moneyFlow"]} `}>
      <Block name="Income" moneyAmount={2000} isIncome={true} />
      <hr className={`${styles["line"]}`} />
      <Block name="Expenses" moneyAmount={2000} isIncome={false} />
      <hr className={`${styles["line"]}`} />
      <Block
        name="Return"
        moneyAmount={2000}
        isIncome={true}
        isNetProfit={true}
      />
    </div>
  );
}

export { MoneyFlowSummary };
