import React from "react";
import "../App.css";

const workoutSuggestions = {
  lose: [
    { name: "HIIT Cardio", type: "Cardio", duration: 30, calories: 400, description: "High-intensity interval training" },
    { name: "Running", type: "Cardio", duration: 45, calories: 450, description: "Steady pace running" },
    { name: "Cycling", type: "Cardio", duration: 40, calories: 350, description: "Moderate intensity cycling" }
  ],
  maintain: [
    { name: "Full Body Workout", type: "Strength", duration: 50, calories: 300, description: "Balanced strength training" },
    { name: "Yoga Flow", type: "Flexibility", duration: 60, calories: 200, description: "Improve flexibility and balance" },
    { name: "Swimming", type: "Cardio", duration: 45, calories: 400, description: "Full body workout" }
  ],
  gain: [
    { name: "Upper Body Strength", type: "Strength", duration: 60, calories: 350, description: "Focus on chest, back, arms" },
    { name: "Leg Day", type: "Strength", duration: 55, calories: 380, description: "Squats, deadlifts, lunges" },
    { name: "Push/Pull Routine", type: "Strength", duration: 70, calories: 400, description: "Compound movements" }
  ]
};

function WorkoutSuggestions({ userGoal }) {
  const suggestions = workoutSuggestions[userGoal] || workoutSuggestions.lose;

  return (
    <div className="suggestions-section">
      <h3>Suggested Workouts for {userGoal === 'lose' ? 'Weight Loss' : userGoal === 'gain' ? 'Muscle Gain' : 'Maintenance'}</h3>
      <div className="grid">
        {suggestions.map((workout, index) => (
          <div key={index} className="card suggestion-card">
            <h4>{workout.name}</h4>
            <p>Type: {workout.type}</p>
            <p>Duration: {workout.duration} mins</p>
            <p>Calories: {workout.calories}</p>
            <p className="description">{workout.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutSuggestions;
