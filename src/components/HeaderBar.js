import React, {Component} from 'react';

class HeaderBar extends Component {
  render() {
    return (
      <div className="headerWrapper">
        <div className="headerLeft">
          <h1> TODAY'S MEAL PLAN</h1>
        </div>

        <div className="headerRight">
          <p className= "caloricGoal">Caloric Goal: 1700</p>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
