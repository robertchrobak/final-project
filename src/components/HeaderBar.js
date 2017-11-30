import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCalorieGoal } from '../actions';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calorieGoal: ""
    };
  }
  render() {
    return (
      <div className="headerWrapper">
        <div className="headerLeft">
          <h1>TODAY'S MEAL PLAN</h1>
        </div>
          <form className="FoodForm" onSubmit={this.onSubmit.bind(this)}>
          <input type="number" className="calorieGoal" placeholder="today's calorie goal" value={this.state.calorieGoal} onChange={this.handleCalorieGoalChange.bind(this)}/>
          <button type="submit">ENTER</button>
          </form> 
          <div>{this.state.calorieGoal}</div>
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

export default connect(null, mapActionsToProps)(HeaderBar);
