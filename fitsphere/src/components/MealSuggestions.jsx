import React from "react";
import "../App.css";

const mealSuggestions = {
  lose: [
    { name: "Grilled Chicken Salad", calories: 350, protein: "30g", carbs: "15g", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
    { name: "Vegetable Stir Fry", calories: 280, protein: "12g", carbs: "25g", image: "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg" },
    { name: "Greek Yogurt with Berries", calories: 180, protein: "15g", carbs: "20g", image: "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg" },
    { name: "Quinoa Bowl with Veggies", calories: 320, protein: "18g", carbs: "45g", image: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg" },
    { name: "Baked Salmon with Asparagus", calories: 380, protein: "35g", carbs: "10g", image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg" },
    { name: "Turkey Lettuce Wraps", calories: 250, protein: "25g", carbs: "12g", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
    { name: "Egg White Omelette", calories: 200, protein: "20g", carbs: "8g", image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg" },
    { name: "Chicken Vegetable Soup", calories: 220, protein: "22g", carbs: "18g", image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg" },
    { name: "Zucchini Noodles with Pesto", calories: 190, protein: "10g", carbs: "15g", image: "https://images.pexels.com/photos/7654950/pexels-photo-7654950.jpeg" },
    { name: "Tuna Salad Cucumber Boats", calories: 180, protein: "20g", carbs: "8g", image: "https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg" },
    { name: "Steamed Fish with Broccoli", calories: 270, protein: "32g", carbs: "12g", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg" },
    { name: "Cottage Cheese with Peaches", calories: 210, protein: "25g", carbs: "22g", image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg" }
  ],
  maintain: [
    { name: "Salmon with Quinoa", calories: 450, protein: "35g", carbs: "40g", image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg" },
    { name: "Chicken Wrap", calories: 400, protein: "25g", carbs: "35g", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
    { name: "Oatmeal with Nuts", calories: 350, protein: "12g", carbs: "45g", image: "https://images.pexels.com/photos/6805740/pexels-photo-6805740.jpeg" },
    { name: "Beef and Vegetable Skewers", calories: 420, protein: "30g", carbs: "25g", image: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg" },
    { name: "Mediterranean Bowl", calories: 380, protein: "18g", carbs: "42g", image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg" },
    { name: "Turkey Sandwich", calories: 320, protein: "22g", carbs: "35g", image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg" },
    { name: "Shrimp Scampi", calories: 390, protein: "28g", carbs: "30g", image: "https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg" },
    { name: "Chicken Rice Bowl", calories: 410, protein: "32g", carbs: "45g", image: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg" },
    { name: "Vegetable Lasagna", calories: 380, protein: "20g", carbs: "48g", image: "https://images.pexels.com/photos/4079522/pexels-photo-4079522.jpeg" },
    { name: "Pork Tenderloin with Sweet Potato", calories: 430, protein: "35g", carbs: "38g", image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg" },
    { name: "Greek Salad with Chicken", calories: 360, protein: "28g", carbs: "22g", image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg" },
    { name: "Fish Tacos", calories: 340, protein: "24g", carbs: "32g", image: "https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg" }
  ],
  gain: [
    { name: "Protein Shake with Banana", calories: 600, protein: "40g", carbs: "60g", image: "https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg" },
    { name: "Beef and Rice Bowl", calories: 650, protein: "45g", carbs: "70g", image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg" },
    { name: "Peanut Butter Sandwich", calories: 500, protein: "20g", carbs: "55g", image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg" },
    { name: "Chicken Alfredo Pasta", calories: 680, protein: "38g", carbs: "75g", image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" },
    { name: "Steak with Mashed Potatoes", calories: 720, protein: "50g", carbs: "65g", image: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg" },
    { name: "Mass Gainer Smoothie", calories: 750, protein: "35g", carbs: "85g", image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg" },
    { name: "Bodybuilder Omelette", calories: 580, protein: "42g", carbs: "15g", image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg" },
    { name: "Protein Pancakes", calories: 520, protein: "30g", carbs: "58g", image: "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg" },
    { name: "Beef Burger with Fries", calories: 780, protein: "45g", carbs: "72g", image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg" },
    { name: "Cottage Cheese with Honey", calories: 450, protein: "35g", carbs: "40g", image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg" },
    { name: "Salmon with Brown Rice", calories: 620, protein: "48g", carbs: "55g", image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg" },
    { name: "Greek Yogurt Parfait", calories: 480, protein: "32g", carbs: "52g", image: "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg" }
  ]
};

function MealSuggestions({ userGoal }) {
  const suggestions = mealSuggestions[userGoal] || mealSuggestions.lose;

  return (
    <div className="suggestions-section">
      <h3>💡 Suggested Meals for {userGoal === 'lose' ? 'Weight Loss' : userGoal === 'gain' ? 'Muscle Gain' : 'Maintenance'}</h3>
      <div className="grid">
        {suggestions.map((meal, index) => (
          <div key={index} className="card suggestion-card">
            <img src={meal.image} alt={meal.name} />
            <div className="card-content">
              <h4>{meal.name}</h4>
              <p>Calories: {meal.calories}</p>
              <p>Protein: {meal.protein}</p>
              <p>Carbs: {meal.carbs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealSuggestions;
