import React from "react";
import "../App.css";

function WorkoutCard({ workout }) {
  // Add safety check to prevent undefined errors
  if (!workout) {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Workout not available</h3>
          <p>Please try again</p>
        </div>
      </div>
    );
  }

  const { 
    name = "Unknown Workout", 
    duration = "Unknown duration", 
    caloriesBurned = 0, 
    image = "https://via.placeholder.com/300x200?text=No+Image",
    description = "No description available",
    goal = "maintain"
  } = workout;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Calories Burned:</strong> {caloriesBurned}</p>
        <p><strong>Goal:</strong> {goal === "lose" ? "Weight Loss" : goal === "gain" ? "Muscle Gain" : "Maintenance"}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default WorkoutCard;