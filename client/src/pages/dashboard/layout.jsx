// graphs
import { LineGraph, PieGraph } from "../../common/charts/charts";

// utility
import { xToCurrDate } from "../../common/utility/date/xToCurrDate";

function Dashboard() {
  const past30Days = xToCurrDate(30);

  console.log(xToCurrDate(28));
  const spending = {
    lineOne: [
      { x: "1", y: 9 },
      { x: "7", y: 18 },
    ],
    lineTwo: [
      { x: "1", y: 2 },
      { x: "3", y: 4 },
      { x: "5", y: 11 },
      { x: "7", y: 17 },
    ],
  };

  // slice will be the length of the data for labels
  return (
    <div>
      <LineGraph
        labels={past30Days.slice(0, 7)}
        titles={{
          xAxis: "Past Month",
          yAxis: "USD",
        }}
        datasets={[
          {
            label: "Income",
            data: spending.lineOne,
          },
          {
            label: "Spending",
            data: spending.lineTwo,
          },
        ]}
      />

      <PieGraph
        labels={["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]}
        data={[12, 19, 3, 5, 2, 3]}
      />
    </div>
  );
}
export default Dashboard;
