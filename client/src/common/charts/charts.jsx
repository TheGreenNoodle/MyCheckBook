// common utility functions
import { Chart, Colors, CategoryScale, LinearScale, Legend } from "chart.js";
import { UndefinedParam } from "../utility/throwError";

// line graph utility
import { LineController, LineElement, PointElement } from "chart.js";

// pie graph utility
import { PieController, ArcElement } from "chart.js";

// react components
import { Line, Pie } from "react-chartjs-2";

// css
import styles from "./charts.module.css";

Chart.register(
  Colors,
  CategoryScale,
  LinearScale,
  Legend,
  LineController,
  LineElement,
  PointElement,
  PieController,
  ArcElement
);

// wrapper to allow responsive graphs
function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

function LineGraph({ labels, datasets }) {
  const example = "ea sports";
  // throws an error if a parameter is undefined
  UndefinedParam(example);

  return (
    <Wrapper>
      <Line data={{ labels, datasets }} />
    </Wrapper>
  );
}

function PieGraph() {
  const data = {
    labels: ["Red", "Orange", "Blue"],

    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: ["#FF0000", "#0000FF", "#00FF00"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Wrapper>
      <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </Wrapper>
  );
}

export { LineGraph, PieGraph };
