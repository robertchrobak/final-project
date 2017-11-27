import React, {Component} from 'react';

class HeaderBar extends Component {
  render() {
    return (
      <div class="headerWrapper">
        <div class="headerLeft">
          <h1> TODAY'S MEAL PLAN</h1>
        </div>

        <div class="headerRight">
          <p class= "caloricGoal">Caloric Goal: 1700</p>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
