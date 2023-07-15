// react utility
import { useState } from "react";

// utility
import { xToCurrDate } from "../../common/utility/date/xToCurrDate";

// child components of layout
import { ChangeTimeFrame } from "./children/changeTimeFrame";
import { MoneyFlowSummary } from "./children/moneyFlowSummary";

// graphs
import { LineGraph, PieGraph } from "../../common/charts/charts";

// css
import styles from "./layout.module.css";

function Dashboard() {
  const [timeFrame, setTimeFrame] = useState({
    name: "Past 30 Days",
    dates: xToCurrDate(30),
  });

  return (
    <div className={styles.wrapper}>
      <div>
        <ChangeTimeFrame setTimeFrame={setTimeFrame} />
        <MoneyFlowSummary />
      </div>

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
            data: [],
          },
          {
            label: "Spending",
            data: [],
          },
        ]}
      />

      <PieGraph
        titles={{
          main: "Spending by Category",
          xAxis: timeFrame.name,
          yAxis: "USD",
        }}
        labels={["Milk", "oreo's", "apple"]}
        currency={"USD"}
        data={[1, 2, 3]}
      />
    </div>
  );
}
export default Dashboard;
