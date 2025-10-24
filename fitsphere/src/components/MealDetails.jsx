import React from "react";
import "../App.css";

function MealDetails({ meal, onClose, onAddToPlan }) {
  // Extract ingredients and measurements
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  // Estimate calories for the meal details modal
  const getCalorieEstimate = () => {
    const category = meal.strCategory || "";
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

  const ingredients = getIngredients();
  const calorieEstimate = getCalorieEstimate();

  return (
    <div className="meal-details-overlay">
      <div className="meal-details-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="meal-details-content">
          <div className="meal-details-header">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="meal-info">
              <h2>{meal.strMeal}</h2>
              <p><strong>Category:</strong> {meal.strCategory}</p>
              <p><strong>Cuisine:</strong> {meal.strArea}</p>
              <p><strong>Estimated Calories:</strong> ~{calorieEstimate}</p>
              {meal.strTags && <p><strong>Tags:</strong> {meal.strTags}</p>}
              <button 
                className="add-to-plan-btn"
                onClick={() => onAddToPlan(meal)}
              >
                Add to Weekly Plan
              </button>
            </div>
          </div>

          <div className="meal-details-body">
            <div className="ingredients-section">
              <h3>Ingredients</h3>
              <ul className="ingredients-list">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="instructions-section">
              <h3>Instructions</h3>
              <div className="instructions-text">
                {meal.strInstructions.split('\n').map((step, index) => (
                  step.trim() && <p key={index}>{step}</p>
                ))}
              </div>
            </div>

            {meal.strYoutube && (
              <div className="video-section">
                <h3>Video Tutorial</h3>
                <a 
                  href={meal.strYoutube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  Watch on YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;