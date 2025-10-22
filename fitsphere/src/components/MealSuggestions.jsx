import React from "react";
import "../App.css";

const mealSuggestions = {
  lose: [
    { name: "Grilled Chicken Salad", calories: 350, protein: "30g", carbs: "15g" },
    { name: "Vegetable Stir Fry", calories: 280, protein: "12g", carbs: "25g" },
    { name: "Greek Yogurt with Berries", calories: 180, protein: "15g", carbs: "20g" }
  ],
  maintain: [
    { name: "Salmon with Quinoa", calories: 450, protein: "35g", carbs: "40g" },
    { name: "Chicken Wrap", calories: 400, protein: "25g", carbs: "35g" },
    { name: "Oatmeal with Nuts", calories: 350, protein: "12g", carbs: "45g" }
  ],
  gain: [
    { name: "Protein Shake with Banana", calories: 600, protein: "40g", carbs: "60g" },
    { name: "Beef and Rice Bowl", calories: 650, protein: "45g", carbs: "70g" },
    { name: "Peanut Butter Sandwich", calories: 500, protein: "20g", carbs: "55g" }
  ]
};

function MealSuggestions({ userGoal }) {
  const suggestions = mealSuggestions[userGoal] || mealSuggestions.lose;

  return (
    <div className="suggestions-section">
      <h3>Suggested Meals for {userGoal === 'lose' ? 'Weight Loss' : userGoal === 'gain' ? 'Muscle Gain' : 'Maintenance'}</h3>
      <div className="grid">
        {suggestions.map((meal, index) => (
          <div key={index} className="card suggestion-card">
            <h4>{meal.name}</h4>
            <p>Calories: {meal.calories}</p>
            <p>Protein: {meal.protein}</p>
            <p>Carbs: {meal.carbs}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealSuggestions;
