// common utility functions
// chartJS
import {
  Chart,
  Colors,
  CategoryScale,
  Tooltip,
  LinearScale,
  Legend,
} from "chart.js";

// line graph utility
import { LineController, LineElement, PointElement } from "chart.js";

// pie graph utility
import { PieController, ArcElement } from "chart.js";

// chartJS react components
import { Line, Pie } from "react-chartjs-2";

// test files
import { UndefinedParam } from "../utility/throwError";

// css
import chart from "./charts.module.css";

Chart.register(
  Colors,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
  PieController,
  ArcElement
);

// wrapper to allow responsive graphs
function Wrapper({ children }) {
  return <div className={chart.wrapper}>{children}</div>;
}

function LineGraph({ labels, datasets, titles }) {
  // throws an error if a parameter is undefined
  UndefinedParam({
    labels: labels,
    datasets: datasets,
    titles: titles,
  });

  return (
    <Wrapper>
      <Line
        options={{
          scales: {
            x: { title: { display: true, text: titles.xAxis } },
            y: { title: { display: true, text: titles.yAxis } },
          },
        }}
        data={{ labels, datasets }}
      />
    </Wrapper>
  );
}

function PieGraph({ labels, data }) {
  // throws an error if a parameter is undefined
  UndefinedParam({ labels: labels, data: data });
  const a = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
      },
    ],
    hoverOffset: 4,
  };

  return (
    <Wrapper>
      <Pie data={a} />
    </Wrapper>
  );
}

export { LineGraph, PieGraph };
