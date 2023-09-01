// react utility
import { useMemo, useState } from "react";

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
function Wrapper({ ariaLabel, children, isLoading }) {
  // add loader here
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div
      aria-label={ariaLabel}
      className={`${chart["makeResponsive"]} ${chart["makeResponsive--white"]}`}>
      {children}
    </div>
  );
}

function LineGraph({ labels, datasets, titles, ariaLabel }) {
  // throws an error if a parameter is undefined
  UndefinedParam({
    labels: labels,
    datasets: datasets,
    titles: titles,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({
    datasets: [],
    labels: labels,
  });

  useMemo(() => {
    const trend = new generateTrend(datasets);
    setIsLoading(true);

    setChartData({
      datasets: trend.generateTrend(),
      labels: labels,
    });

    setIsLoading(false);
  }, [datasets, labels]);

  return (
    <Wrapper ariaLabel={ariaLabel} isLoading={isLoading}>
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
        data={chartData}
      />
    </Wrapper>
  );
}

function PieGraph({ labels, titles, currency, data, ariaLabel }) {
  // throws an error if a parameter is undefined
  UndefinedParam({ labels: labels, data: data });

  return (
    <Wrapper ariaLabel={ariaLabel}>
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
