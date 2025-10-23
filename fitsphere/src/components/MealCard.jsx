import React from "react";
import "../App.css";

function MealCard({ meal, onSelect }) {
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
    strMeal = meal.name || "Unknown Meal", 
    strMealThumb = meal.image || "https://via.placeholder.com/300x200?text=No+Image",
    strCategory = meal.goal || "maintain"
    // Removed unused idMeal variable
  } = meal;

  return (
    <div className="card meal-card" onClick={onSelect}>
      <img src={strMealThumb} alt={strMeal} />
      <div className="card-content">
        <h3>{strMeal}</h3>
        <p><strong>Category:</strong> {strCategory}</p>
        <button className="view-recipe-btn">View Recipe & Ingredients</button>
      </div>
    </div>
  );
}

export default MealCard;