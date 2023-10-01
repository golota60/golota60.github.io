import Chart, {
  ChartConfiguration,
  ChartConfigurationCustomTypesPerDataset,
} from "chart.js/auto";
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import Spoiler from "./Spoiler";

const dataSet1 = {
  labels: [
    "Hello world(empty worker)",
    "Rust + lol_html/Javascript + HTMLRewriter",
    "Normal page(no worker)",
  ],
  datasets: [
    {
      label: "Javascript",
      data: [68.75, 14.41],
      borderColor: "#03befc",
      backgroundColor: "#5cd6ff",
      borderRadius: 5,
      borderWidth: 2,
      borderSkipped: false,
    },
    {
      label: "Rust",
      data: [60.87, 14.39],
      borderColor: "#c2fc03",
      backgroundColor: "#e0ff7a",
      borderRadius: 5,
      borderWidth: 2,
      borderSkipped: false,
    },
    {
      label: "Other",
      data: [0, 0, 28.9],
      borderColor: "#ae4efc",
      backgroundColor: "#c37aff",
      borderRadius: 5,
      borderWidth: 2,
      borderSkipped: false,
    },
  ],
};

const dataSet2 = {
  labels: [
    "(small HTML)(no deserialization)",
    "(big HTML)(no deserialization)",
    "(big HTML)(with deserialization)",
  ],
  datasets: [
    {
      label: "Javascript",
      data: [14.41, 8.09, 7.79],
      borderColor: "#03befc",
      backgroundColor: "#5cd6ff",
      borderRadius: 5,
      borderWidth: 2,
      borderSkipped: false,
    },
    {
      label: "Rust",
      data: [14.39, 8.56, 8.64],
      borderColor: "#c2fc03",
      backgroundColor: "#e0ff7a",
      borderRadius: 5,
      borderWidth: 2,
      borderSkipped: false,
    },
  ],
};

const data = [dataSet1, dataSet2];

const getConfig = (dataset: any) =>
  ({
    type: "bar",
    data: dataset,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Avg req/sec(higher=better)",
          },
        },
      },
    },
  } as any);

interface Props {
  datasetNumber: 0 | 1;
}

// To be used only on a client(with `client:only` directive)
const RustWorkersBarChart = (props: Props) => {
  let canvasRef: HTMLCanvasElement | undefined;
  const [chart, setChart] = createSignal<Chart>();
  const calculateChart = () => {
    return new Chart(canvasRef!, getConfig(data[props.datasetNumber]));
  };

  createEffect(() => {
    const chartInstance = chart();

    if (chartInstance) {
      chartInstance.data = data[props.datasetNumber];

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

export default RustWorkersBarChart;

export const RustWorkersSpoiler = () => {
  return (
    <Spoiler title="Rewritten page layout">
      <div class="w-full flex justify-center">
        <img src="/ui_map_rewritten.png" />
      </div>
    </Spoiler>
  );
};
