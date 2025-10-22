import { useState } from "react";
import { Line } from "react-chartjs-2";
// Remove the unused import - Chart.js is automatically registered
// when you import from 'react-chartjs-2'

function ProgressTracker() {
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [metric, setMetric] = useState("weight");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { 
      date, 
      value: Number(value),
      metric 
    };
    setEntries((prev) => [...prev, newEntry]);
    setDate("");
    setValue("");
  };

  const filteredEntries = entries.filter(entry => entry.metric === metric);

  const data = {
    labels: filteredEntries.map((e) => e.date),
    datasets: [
      {
        label: `${metric.charAt(0).toUpperCase() + metric.slice(1)} Progress`,
        data: filteredEntries.map((e) => e.value),
        borderColor: "rgb(46,125,50)",
        backgroundColor: "rgba(46,125,50,0.2)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Your ${metric} Progress`
      }
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return (
    <div>
      <h2>Progress Tracker</h2>
      <form onSubmit={handleSubmit}>
        <select value={metric} onChange={(e) => setMetric(e.target.value)}>
          <option value="weight">Weight (kg)</option>
          <option value="bodyFat">Body Fat %</option>
          <option value="muscleMass">Muscle Mass (kg)</option>
          <option value="workoutDuration">Workout Duration (min)</option>
          <option value="caloriesBurned">Calories Burned</option>
        </select>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Value" required />
        <button type="submit">Add Progress</button>
      </form>
      <Line data={data} options={chartOptions} />
    </div>
  );
}

export default ProgressTracker;