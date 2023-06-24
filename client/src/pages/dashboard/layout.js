import { LineGraph, PieGraph } from "../../common/charts/charts";

function Dashboard() {
  // datasets={[
  //   {
  //     label: "Popularity of colours",
  //     data: [55, 23, 96],
  //     backgroundColor: ["#FF0000", "#0000FF", "#00FF00"],
  //     borderWidth: 1,
  //   },
  // ]}
  return (
    <div>
      <LineGraph labels={["Red", "Orange", "Blue"]} />
      <PieGraph />
    </div>
  );
}
export default Dashboard;
