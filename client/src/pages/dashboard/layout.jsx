// react utility
import { useState } from "react";

// utility
import { createArrayOfDates } from "../../common/utility/date/createArrayOfDates";

// child components of layout
import { ChangeTimeFrame } from "./children/changeTimeFrame";
import { MoneyFlowSummary } from "./children/moneyFlowSummary";

// graphs
import { LineGraph, PieGraph } from "../../common/charts/charts";

// testing remove
import { createFakeData } from "../../common/utility/testing/createFakeData";

// css
import styles from "./layout.module.css";

function Dashboard() {
  const [timeFrame, setTimeFrame] = useState({
    name: "Past 30 Days",
    dates: createArrayOfDates(30),
  });

  // remove
  const moneyByDate = new createFakeData();
  const income = moneyByDate.overallCashFlow(timeFrame.dates);
  const expenses = moneyByDate.overallCashFlow(timeFrame.dates);

  return (
    <>
      <div className={`${styles[`layout`]} ${styles["layout--sectionOne"]}`}>
        {/* MoneyFlowSummary is wrapped because ChangeTimeFrames dropdown menu needs to display over the top of it. ChangeTimeFrame can be wrapped around components and all of it`s children will positioned underneath the dropdown menu. */}
        <ChangeTimeFrame setTimeFrame={setTimeFrame}>
          <MoneyFlowSummary income={2000} expenses={151} />
        </ChangeTimeFrame>

        <LineGraph
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
