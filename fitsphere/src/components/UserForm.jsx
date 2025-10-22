import React, { useState } from "react";
import "../App.css";

function UserForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    goal: "lose", // Default goal
    type: "",
    duration: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = { ...formData };
    onSubmit(newData);
    setFormData({
      name: "",
      calories: "",
      goal: formData.goal, // Keep the goal selection
      type: "",
      duration: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        {type === "meal" ? "Add a New Meal" : "🏋️ Add a New Workout"}
      </h3>

      {/* Goal Selection - Available for both meals and workouts */}
      <select name="goal" value={formData.goal} onChange={handleChange}>
        <option value="lose">Lose Weight</option>
        <option value="maintain">Maintain Weight</option>
        <option value="gain">Gain Muscle</option>
      </select>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={type === "meal" ? "Meal name" : "Workout name"}
        required
      />

      {type === "meal" ? (
        <>
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            placeholder="Calories"
            required
          />
        </>
      ) : (
        <>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Workout type (e.g., Cardio, Strength)"
            required
          />
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration (minutes)"
            required
          />
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            placeholder="Calories burned"
            required
          />
        </>
      )}

      <button type="submit">Add</button>
    </form>
  );
}

export default UserForm;
