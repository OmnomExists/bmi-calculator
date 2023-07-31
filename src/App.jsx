import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = () => {
    const weightFloat = parseFloat(weight);
    const heightFloat = parseFloat(height);

    if (!isNaN(weightFloat) && !isNaN(heightFloat) && heightFloat > 0) {
      const bmi = weightFloat / (heightFloat / 100) ** 2;
      setBmiResult(bmi.toFixed(1));

      if (bmi < 18.5) {
        setBmiCategory("Underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setBmiCategory("Normal Weight");
      } else if (bmi >= 25 && bmi < 29.9) {
        setBmiCategory("Overweight");
      } else {
        setBmiCategory("Obesity");
      }
    } else {
      setBmiResult("Invalid input");
      setBmiCategory("");
    }
  };

  return (
    <div className="app">
      <h1>BMI Calculator</h1>
      <div className="input-fields">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
      <div id="result">BMI: {bmiResult}</div>
      {bmiCategory && <div id="category">Category: {bmiCategory}</div>}
    </div>
  );
};

export default App;
