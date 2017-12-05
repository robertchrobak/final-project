import React, { Component } from 'react';
import { connect } from 'react-redux';
import MealPlan from './MealPlan';
import ProgressBar from './ProgressBar';
import FoodForm from './FoodForm';
import CalorieGoalForm from './CalorieGoalForm';
import Chart from "./Chart";
import AutoSuggestForm from "./AutoSuggestForm";


  class HomePage extends Component {
    render() {
      return (
        <div className="AppView" >

          <header className="App-header">
            <h1 className="App-title">CALORIE GALLERY</h1>
            <h3 className="Welcome-message">Welcome back, {this.props.username}</h3>
          </header>

          <div className="CalorieGoalForm">
            <CalorieGoalForm />
          </div>

          <div className="foodFormContainer">
            <FoodForm />
          </div>

          <div className="foodFormContainer">
            <AutoSuggestForm />
          </div>

          <div className="MealPlan">
            <MealPlan />
          </div>

          <div className="ProgressBar">
            <ProgressBar />
          </div>

          <div>
            <Chart className="Chart"/>
          </div>

          <div className="Footer">
            <a href="http://www.nutritionix.com/business/api"><img className="AttributionLink" src="/nutritionix250w.png" alt="Powered By Nutritionix"/></a>
          </div>

        </div>
      );
    }
  }

  function mapStateToProps(state) {
      return {
          username: state.username
      }
  }

export default connect(mapStateToProps)(HomePage);



// export default HomePage;
