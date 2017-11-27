import React, {Component} from 'react';

class MealPlan extends Component {
  render() {
    return (
      <div className="MealPlan">
        <div className="Meal">
          <h2>Meal 1</h2>
          <ul>
            <button type="text">enter food item</button> 
            <li>almond butter</li>
            <li>coffee</li>
          </ul>
        </div>
        <div className="Meal">
          <h2>Meal 2</h2>
          <span>1 grilled cheese sandwich, tomato soup</span>
        </div>
        <div className="Meal">
          <h2>Meal 3</h2>
          <span>1 falafel sandwich, 1 tabbouleh salad</span>
        </div>
        <div className="Meal">
          <h2>Snacks</h2>
          <span>pistachios</span>
        </div>
      </div>);
  }
}

export default MealPlan;
