import React, { Component } from 'react';
// import { connect } from 'react-redux';
import '../index.css';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';
import MealPlan from './MealPlan';
import ProgressBar from './ProgressBar';
import FoodForm from './FoodForm';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">DAILY CALORIE COUNTER</h1>
        </header>

        <div className="foodFormContainer">
          <FoodForm />
        </div>

        <div className="HeaderBar">
          <HeaderBar />
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

      </div>
    );
  }
}

export default App;
