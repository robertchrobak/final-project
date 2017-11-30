import React, { Component } from 'react';
import '../index.css';
import FooterBar from './FooterBar';
import MealPlan from './MealPlan';
import ProgressBar from './ProgressBar';
import FoodForm from './FoodForm';
import CalorieGoalForm from './CalorieGoalForm';
import Chart from "./Chart";

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">DAILY CALORIE COUNTER</h1>
        </header>

        <div className="CalorieGoalForm">
          <CalorieGoalForm />
        </div>

        <div className="foodFormContainer">
          <FoodForm />
        </div>

        <div className="MealPlan">
          <MealPlan />
        </div>

        <div className="ProgressBar">
          <ProgressBar />
        </div>

        <div className="FooterBar">
          <FooterBar />
        </div>

        <div>
          <Chart className="Chart"/>
        </div>

      </div>
    );
  }
}

export default App;
