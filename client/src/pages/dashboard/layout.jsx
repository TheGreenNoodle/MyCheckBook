// react utility
import { useRef } from "react";

// child components of layout
import { ChangeTimeFrame } from "./children/changeTimeFrame";
import { ExpenseSummary } from "./children/expenseSummary";

// graphs
import { LineGraph, PieGraph } from "../../common/charts/charts";

// css
import styles from "./layout.module.css";

function Dashboard() {
  const timeFrame = useRef(null);

  return (
    <div className={styles.wrapper}>
      <div>
        <ChangeTimeFrame ref={timeFrame} />
        <ExpenseSummary />
      </div>

      <LineGraph
        labels={timeFrame.current.value}
        titles={{
          main: "Income vs Spending",
          xAxis: "Past Month",
          yAxis: "USD",
        }}
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
          xAxis: "Past Month",
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
