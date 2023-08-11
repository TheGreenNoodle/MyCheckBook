// chartJS
import {
  Chart,
  Title,
  Colors,
  CategoryScale,
  Tooltip,
  LinearScale,
  Legend,
} from "chart.js";

// line graph utility
import { LineController, LineElement, PointElement } from "chart.js";
import { generateTrend } from "./generateTrend";

// pie graph utility
import { PieController, ArcElement } from "chart.js";

// chartJS react components
import { Line, Pie } from "react-chartjs-2";

// test files
import { UndefinedParam } from "../utility/throwError";

// css
import chart from "./charts.module.css";

Chart.register(
  Title,
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
function Wrapper({ children, hasBackground }) {
  return (
    <div
      className={`${chart["makeResponsive"]} ${
        hasBackground ? chart["makeResponsive--white"] : null
      }`}>
      {children}
    </div>
  );
}

function LineGraph({ labels, datasets, titles }) {
  // throws an error if a parameter is undefined
  UndefinedParam({
    labels: labels,
    datasets: datasets,
    titles: titles,
  });

  let data = datasets;

  // for (let line of datasets) {
  //   const temp = line.data;
  //   line.data = generateTrend(temp);
  // }
  // console.log(datasets[0]);
  console.log(generateTrend(data[0].data));

  return (
    <Wrapper hasBackground={true}>
      <Line
        options={{
          maintainAspectRatio: false,
          spanGaps: true,
          plugins: {
            title: {
              display: true,
              text: titles.main,
            },
          },
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

function PieGraph({ labels, titles, currency, data }) {
  // throws an error if a parameter is undefined
  UndefinedParam({ labels: labels, data: data });

  return (
    <Wrapper>
      <Pie
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: titles.main,
            },
          },
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: currency,
              data: data,
            },
          ],
        }}
      />
    </Wrapper>
  );
}

export { LineGraph, PieGraph };
