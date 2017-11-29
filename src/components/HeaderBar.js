import React, {Component} from 'react';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calorieGoal: null
    };
  }
  render() {
    return (
      <div className="headerWrapper">
        <div className="headerLeft">
          <h1>TODAY'S MEAL PLAN</h1>
        </div>
          <form className="FoodForm" onSubmit={this.handleSubmit.bind(this)}>
          <input type="number" className="caloricGoal" placeholder="today's calorie goal" value={this.state.calorieGoal} onChange={this.handleCalorieGoalChange.bind(this)}/>
          <button type="submit" onSubmit={this.handleSubmit.bind(this)}>ENTER</button>
          </form>
          <div>{this.state.calorieGoal}</div>
      </div>
    );
  }

let calorieGoal = null;

  handleCalorieGoalChange(event) {
    this.setState({
      calorieGoal: event.target.value
    });
  }

  handleSubmit() {
    this.props.onSubmit({
      calorieGoal: this.state.calorieGoal
    });
    this.setState({
      calorieGoal: null
    })
  }

}

export default HeaderBar;
