import { LineGraph, PieGraph } from "../../common/charts/charts";

function Dashboard() {
  const past30Days = [
    "06/01/23",
    "06/01/23",
    "06/01/23",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];

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
