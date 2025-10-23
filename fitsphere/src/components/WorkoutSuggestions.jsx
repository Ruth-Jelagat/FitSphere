import React from "react";
import "../App.css";

const workoutSuggestions = {
  lose: [
    { name: "HIIT Cardio Blast", type: "Cardio", duration: 30, calories: 400, description: "High-intensity interval training for maximum fat burn", image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" },
    { name: "Running Intervals", type: "Cardio", duration: 45, calories: 450, description: "Sprint and recovery intervals for fat loss", image: "https://images.pexels.com/photos/2359223/pexels-photo-2359223.jpeg" },
    { name: "Cycling Sprint", type: "Cardio", duration: 40, calories: 350, description: "High-speed cycling intervals", image: "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg" },
    { name: "Jump Rope Circuit", type: "Cardio", duration: 25, calories: 300, description: "Fast-paced jump rope intervals", image: "https://images.pexels.com/photos/4662340/pexels-photo-4662340.jpeg" },
    { name: "Swimming Laps", type: "Cardio", duration: 45, calories: 400, description: "Continuous swimming for full-body workout", image: "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg" },
    { name: "Stair Climbing", type: "Cardio", duration: 30, calories: 350, description: "Intensive stair climbing session", image: "https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg" },
    { name: "Kickboxing Cardio", type: "Cardio", duration: 50, calories: 500, description: "Martial arts inspired cardio workout", image: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg" },
    { name: "Dance Aerobics", type: "Cardio", duration: 45, calories: 380, description: "Fun dance-based cardio routine", image: "https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg" },
    { name: "Rowing Machine", type: "Cardio", duration: 35, calories: 320, description: "Full-body rowing intervals", image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" },
    { name: "Mountain Climbers Circuit", type: "Cardio", duration: 20, calories: 250, description: "Bodyweight cardio circuit", image: "https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg" },
    { name: "Elliptical Training", type: "Cardio", duration: 40, calories: 360, description: "Low-impact cardio machine workout", image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" },
    { name: "Burpee Challenge", type: "Cardio", duration: 25, calories: 280, description: "High-intensity bodyweight circuit", image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg" }
  ],
  maintain: [
    { name: "Full Body Strength", type: "Strength", duration: 50, calories: 300, description: "Balanced strength training routine", image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg" },
    { name: "Yoga Flow", type: "Flexibility", duration: 60, calories: 200, description: "Improve flexibility and balance", image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg" },
    { name: "Pilates Core", type: "Core", duration: 45, calories: 220, description: "Core strengthening and stability", image: "https://images.pexels.com/photos/4662352/pexels-photo-4662352.jpeg" },
    { name: "Balanced Circuit", type: "Circuit", duration: 40, calories: 280, description: "Mixed cardio and strength circuit", image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg" },
    { name: "Swimming", type: "Cardio", duration: 45, calories: 350, description: "Moderate pace swimming", image: "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg" },
    { name: "Power Walking", type: "Cardio", duration: 60, calories: 300, description: "Brisk walking for endurance", image: "https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg" },
    { name: "Bodyweight Training", type: "Strength", duration: 35, calories: 250, description: "No-equipment strength workout", image: "https://images.pexels.com/photos/3838386/pexels-photo-3838386.jpeg" },
    { name: "Tai Chi", type: "Flexibility", duration: 50, calories: 180, description: "Gentle movement and balance", image: "https://images.pexels.com/photos/6295975/pexels-photo-6295975.jpeg" },
    { name: "Resistance Band", type: "Strength", duration: 40, calories: 240, description: "Light resistance training", image: "https://images.pexels.com/photos/4753896/pexels-photo-4753896.jpeg" },
    { name: "Barre Workout", type: "Flexibility", duration: 45, calories: 260, description: "Ballet-inspired toning", image: "https://images.pexels.com/photos/4662354/pexels-photo-4662354.jpeg" },
    { name: "Light Jogging", type: "Cardio", duration: 30, calories: 280, description: "Steady pace running", image: "https://images.pexels.com/photos/2359223/pexels-photo-2359223.jpeg" },
    { name: "Stretching Routine", type: "Flexibility", duration: 25, calories: 120, description: "Full-body stretching and mobility", image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg" }
  ],
  gain: [
    { name: "Heavy Lifting Session", type: "Strength", duration: 60, calories: 350, description: "Compound lifts for muscle growth", image: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg" },
    { name: "Chest and Triceps", type: "Strength", duration: 55, calories: 320, description: "Upper body focus workout", image: "https://images.pexels.com/photos/3838536/pexels-photo-3838536.jpeg" },
    { name: "Back and Biceps", type: "Strength", duration: 50, calories: 300, description: "Posterior chain development", image: "https://images.pexels.com/photos/4753900/pexels-photo-4753900.jpeg" },
    { name: "Leg Day Intensive", type: "Strength", duration: 65, calories: 400, description: "Squats, deadlifts, and lunges", image: "https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg" },
    { name: "Shoulder Power", type: "Strength", duration: 45, calories: 280, description: "Shoulder and trap development", image: "https://images.pexels.com/photos/3838534/pexels-photo-3838534.jpeg" },
    { name: "Push/Pull Routine", type: "Strength", duration: 70, calories: 380, description: "Advanced compound movements", image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg" },
    { name: "Powerlifting Focus", type: "Strength", duration: 75, calories: 420, description: "Max strength training", image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" },
    { name: "Bodybuilding Split", type: "Strength", duration: 80, calories: 350, description: "Muscle isolation techniques", image: "https://images.pexels.com/photos/3764380/pexels-photo-3764380.jpeg" },
    { name: "Strongman Training", type: "Strength", duration: 90, calories: 500, description: "Functional strength movements", image: "https://images.pexels.com/photos/1552109/pexels-photo-1552109.jpeg" },
    { name: "Olympic Lifting", type: "Strength", duration: 60, calories: 380, description: "Snatch and clean & jerk practice", image: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg" },
    { name: "CrossFit WOD", type: "Circuit", duration: 45, calories: 400, description: "High-intensity functional training", image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" },
    { name: "Hypertrophy Focus", type: "Strength", duration: 70, calories: 320, description: "Muscle growth specific training", image: "https://images.pexels.com/photos/3838536/pexels-photo-3838536.jpeg" }
  ]
};

function WorkoutSuggestions({ userGoal }) {
  const suggestions = workoutSuggestions[userGoal] || workoutSuggestions.lose;

  return (
    <div className="suggestions-section">
      <h3>Suggested Workouts for {userGoal === 'lose' ? 'Weight Loss' : userGoal === 'gain' ? 'Muscle Gain' : 'Weight Maintenance'}</h3>
      <div className="grid">
        {suggestions.map((workout, index) => (
          <div key={index} className="card suggestion-card">
            <img src={workout.image} alt={workout.name} />
            <div className="card-content">
              <h4>{workout.name}</h4>
              <p>Type: {workout.type}</p>
              <p>Duration: {workout.duration} mins</p>
              <p>Calories: {workout.calories}</p>
              <p className="description">{workout.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutSuggestions;
