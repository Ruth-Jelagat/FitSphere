import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <h1>FitSphere</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/progress">Progress</Link>
      </nav>

      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
