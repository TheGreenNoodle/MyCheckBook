// react utility
import { useEffect, useMemo, useState } from "react";

// utility
import { createArrayOfDates } from "../../common/utility/date/createArrayOfDates";

// child components of layout
import { ChangeTimeFrame } from "./children/changeTimeFrame";
import { MoneyFlowSummary } from "./children/moneyFlowSummary";

// graphs
import { LineGraph, PieGraph } from "../../common/charts/charts";

// testing remove
import { createFakeData } from "../../common/utility/createFakeData";

// css
import styles from "./layout.module.css";

function Dashboard() {
  const [timeFrame, setTimeFrame] = useState({
    name: "Past 30 Days",
    dates: createArrayOfDates(30),
  });

  // remove
  const fakeData = useMemo(() => {
    return new createFakeData();
  }, []);

  const income = useMemo(
    () => fakeData.overallCashFlow(timeFrame.dates),
    [fakeData, timeFrame.dates]
  );
  const expenses = useMemo(
    () => fakeData.overallCashFlow(timeFrame.dates),
    [fakeData, timeFrame.dates]
  );

  // sums up all cash key values in an array of objects
  function findSum(array) {
    let sum = 0;
    for (let element of array) {
      sum += element["cash"];
    }
    sum = Math.round(sum * 100) / 100;
    return sum;
  }

  const [totals, setTotals] = useState({
    income: findSum(income),
    expenses: findSum(expenses),
  });

  useMemo(() => {
    setTotals({
      income: findSum(income),
      expenses: findSum(expenses),
    });
  }, [income, expenses]);

  return (
    <>
      <div className={`${styles[`layout`]} ${styles["layout--sectionOne"]}`}>
        {/* MoneyFlowSummary is wrapped because ChangeTimeFrames dropdown menu needs to display over the top of it. ChangeTimeFrame can be wrapped around components and all of it`s children will positioned underneath the dropdown menu. */}
        <ChangeTimeFrame setTimeFrame={setTimeFrame}>
          <MoneyFlowSummary totals={totals} />
        </ChangeTimeFrame>

        <LineGraph
          ariaLabel="Income vs Spending line chart"
          titles={{
            main: "Income vs Spending",
            xAxis: timeFrame.name,
            yAxis: "USD",
          }}
          labels={timeFrame.dates}
          datasets={[
            {
              label: "Income",
              data: income,
              backgroundColor: "#306030",
              borderColor: "#306030",
            },
            {
              label: "Spending",
              data: expenses,
              backgroundColor: "#fd5240",
              borderColor: "#fd5240",
            },
          ]}
        />
      </div>
    </>
  );
}
export default Dashboard;
