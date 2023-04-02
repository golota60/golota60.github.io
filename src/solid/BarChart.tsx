import Chart, {
  ChartConfiguration,
  ChartConfigurationCustomTypesPerDataset,
} from "chart.js/auto";
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";

interface Props {
  dataValues: Array<number>;
  labels: Array<string>;
}

const getData = ({ dataValues, labels }: Props) => ({
  labels: labels,
  datasets: [
    {
      label: "Performance measurements",
      data: dataValues,
      backgroundColor: [
        "rgba(255, 205, 86, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgb(255, 205, 86)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(255, 159, 64)",
      ],
      borderWidth: 1,
    },
  ],
});

const getConfig = ({
  dataValues,
  labels,
}: Props): ChartConfiguration | ChartConfigurationCustomTypesPerDataset =>
  ({
    type: "bar",
    data: getData({ dataValues, labels }),
    options: {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  } as const);

// To be used only on a client(with `client:only` directive)
const BarChart = (props: Props) => {
  let canvasRef: HTMLCanvasElement | undefined;
  const [chart, setChart] = createSignal<Chart>();
  const calculateChart = () => {
    return new Chart(canvasRef!, getConfig(props));
  };

  createEffect(() => {
    const chartInstance = chart();

    if (chartInstance) {
      chartInstance.data = getData(props);

      chartInstance.update();
    }
  });

  onMount(() => {
    let localChart = calculateChart();
    setChart(localChart);
  });

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default BarChart;
