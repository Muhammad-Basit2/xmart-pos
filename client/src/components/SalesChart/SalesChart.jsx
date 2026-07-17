import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

import { weeklySalesData } from "../../data/dashboardData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function SalesChart() {
  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,
        text: "Weekly Sales Overview",
        font: {
          size: 18,
        },
      },
    },

    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return "₨ " + value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <Line data={weeklySalesData} options={options} />
    </div>
  );
}

export default SalesChart;