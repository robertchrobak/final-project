import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCalorieGoal } from '../actions';

class CalorieGoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calorieGoal: ""
    };
  }
  render() {
    return (
      <div className="KnowYourCals">
        <form className="FoodForm" onSubmit={this.onSubmit.bind(this)}>
          {/* <label>Total Calories</label> */}
          <input type="number" className="calorieGoal" placeholder="Today's calorie goal" value={this.state.calorieGoal} onChange={this.handleCalorieGoalChange.bind(this)}/>
          <button className="enterButton" type="submit">ENTER</button>
          </form>
          <a href="https://www.bodybuilding.com/fun/macronutcal.htm" target="blank" className="targetLink">Don't know your calorie goal?</a>
      </div>
    );
  }

  handleCalorieGoalChange(event) {
    this.setState({
      calorieGoal: event.target.value
    });
  }


onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(Number(this.state.calorieGoal));
    this.setState({
        calorieGoal: ""
    });
}

}

const mapActionsToProps = {
onSubmit: fetchCalorieGoal
}

export default connect(null, mapActionsToProps)(CalorieGoalForm);
