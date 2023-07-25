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
    <div
      className={`${styles[`wrapper`]} ${
        styles["wrapper--moneyFlowAndLineGraph"]
      }`}>
      <div className={`${styles[`positionRelative`]}`}>
        <ChangeTimeFrame setTimeFrame={setTimeFrame} />
        <MoneyFlowSummary />
      </div>

      <div className={`${styles["wrapper--lineGraph"]}`}>
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
      </div>
    </div>
  );
}
export default Dashboard;
