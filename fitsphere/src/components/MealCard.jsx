import React from "react";
import "../App.css";

function MealCard({ meal }) {
  // Add safety check to prevent undefined errors
  if (!meal) {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Meal not available</h3>
          <p>Please try again</p>
        </div>
      </div>
    );
  }

  const { 
    name = "Unknown Meal", 
    calories = 0, 
    image = "https://via.placeholder.com/300x200?text=No+Image",
    goal = "maintain"
  } = meal;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p><strong>Calories:</strong> {calories}</p>
        <p><strong>Goal:</strong> {goal === "lose" ? "Weight Loss" : goal === "gain" ? "Muscle Gain" : "Maintenance"}</p>
      </div>
    </div>
  );
}

export default MealCard;