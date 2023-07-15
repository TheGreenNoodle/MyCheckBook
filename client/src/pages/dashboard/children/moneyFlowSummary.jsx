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
    <div className={``}>
      <h2>Money Flow</h2>
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
