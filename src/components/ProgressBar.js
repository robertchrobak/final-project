import React, {Component} from 'react';
import { connect } from 'react-redux';

class ProgressBar extends Component {
  render() {
    let calculatedTotal = 0;
    this.props.foodItems.forEach((foodItem) =>
      calculatedTotal+=foodItem.calories
    );

  let calorieGoal = this.props.calorieGoal;

    return (
      <div className="ProgressBar">
        <h2>Progress bar</h2>
      <progress value={calculatedTotal} max={calorieGoal}>yeah</progress>
      <div className="progressBarText">
        <div>
          {parseInt((parseInt(calculatedTotal) / calorieGoal) * 100 )}% Complete
        </div>
        <div>
          Calorie Count: {parseInt(calculatedTotal)} / Calorie Goal: {calorieGoal}
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        foodItems: state.foodItems,
        calorieGoal: state.calorieGoal
    }
}

export default connect(mapStateToProps)(ProgressBar);
