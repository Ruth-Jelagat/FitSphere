import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ProgressChart({ entries }) {
  const data = {
    labels: entries.map(entry => entry.date),
    datasets: [
      {
        label: "Progress",
        data: entries.map(entry => entry.value),
        borderColor: "rgb(46,125,50)",
        backgroundColor: "rgba(46,125,50,0.2)",
        tension: 0.2,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Your Fitness Progress'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  };

  return (
    <div className="progress-chart-container">
      {entries.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <p className="no-data">No progress data yet. Add some entries to see your chart!</p>
      )}
    </div>
  );
}

export default ProgressChart;