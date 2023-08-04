// css
import styles from "../layout.module.css";

// {isIncome ? ${styles["box--green"]} : ${styles["box--red"]} }

function Block({ name, moneyAmount, isIncome, isNetProfit }) {
  return (
    <div
      className={`${styles["box"]}  ${styles["box--moneyFlow"]} ${
        styles["box--moneyFlow__block"]
      } ${
        isNetProfit
          ? isIncome
            ? styles["box--green"]
            : styles["box--red"]
          : isIncome
          ? styles["box--green"]
          : styles["box--red"]
      }`}>
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
        name="Profit"
        moneyAmount={2000}
        isIncome={true}
        isNetProfit={true}
      />
    </div>
  );
}

export { MoneyFlowSummary };
