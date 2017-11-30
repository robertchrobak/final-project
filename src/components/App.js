import React, { Component } from 'react';
import '../index.css';
<<<<<<< HEAD
import HeaderBar from './HeaderBar';
=======
import FooterBar from './FooterBar';
>>>>>>> 1ff874dcbb23a7c4b4afa450ee8c570c747658e1
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

<<<<<<< HEAD
=======
        <div className="FooterBar">
          <FooterBar />
        </div>

>>>>>>> 1ff874dcbb23a7c4b4afa450ee8c570c747658e1
        <div>
          <Chart className="Chart"/>
        </div>

      </div>
    );
  }
}

export default App;
