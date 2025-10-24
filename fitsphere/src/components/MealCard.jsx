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

  // Handle both API data and local data structure
  const mealName = meal.strMeal || meal.name || "Unknown Meal";
  const mealImage = meal.strMealThumb || meal.image || "https://via.placeholder.com/300x200?text=No+Image";
  const mealCategory = meal.strCategory || meal.category || meal.goal || "maintain";
  
  // Estimate calories based on category if not provided
  const getCalorieEstimate = () => {
    // If calories are provided, use them
    if (meal.calories) return meal.calories;
    
    // Estimate based on meal category for search results
    const category = meal.strCategory || meal.category || "";
    const calorieEstimates = {
      'Chicken': '350-450',
      'Beef': '450-550', 
      'Pork': '400-500',
      'Seafood': '300-400',
      'Vegetarian': '250-350',
      'Breakfast': '300-400',
      'Dessert': '400-600',
      'Pasta': '500-700',
      'Vegetable': '150-250',
      'Lamb': '380-480',
      'Goat': '350-450',
      'Vegan': '200-300',
      'Side': '150-250',
      'Starter': '200-300',
      'Miscellaneous': '350-450'
    };
    
    return calorieEstimates[category] || '350-450';
  };

  const calorieRange = getCalorieEstimate();

  return (
    <div className="card meal-card" onClick={onSelect}>
      <img src={mealImage} alt={mealName} />
      <div className="card-content">
        <h3>{mealName}</h3>
        <p><strong>Category:</strong> {mealCategory}</p>
        <p><strong>Calories:</strong> {typeof calorieRange === 'number' ? calorieRange : `~${calorieRange}`}</p>
        {meal.goal && (
          <p><strong>Goal:</strong> {meal.goal === "lose" ? "Weight Loss" : meal.goal === "gain" ? "Muscle Gain" : "Maintenance"}</p>
        )}
        <button className="view-recipe-btn">View Recipe & Ingredients</button>
      </div>
    </div>
  );
}

export default MealCard;