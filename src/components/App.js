import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import Login from "./Login";
import MealPlan from './MealPlan';
import ProgressBar from './ProgressBar';
import FoodForm from './FoodForm';
import CalorieGoalForm from './CalorieGoalForm';
import Chart from "./Chart";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="LoginView" >
          <Login />
        </div>

        <div className="AppView" >

          <header className="App-header">
            <h1 className="App-title">DAILY CALORIE COUNTER</h1>
            <h3 className="Welcome-message">Welcome back, {this.props.username}</h3>
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

          <div>
            <Chart className="Chart"/>
          </div>

          <div className="Footer">
            <a href="http://www.nutritionix.com/business/api"><img className="AttributionLink" src="/nutritionix250w.png" alt="Powered By Nutritionix"/></a>
          </div>

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

// export default App;

export default connect(mapStateToProps)(App);
