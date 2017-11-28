import React, {Component} from 'react';

class MealPlan extends Component {
  render() {
    return (
      <div className="MealPlan">
        <div className="Meal">
          <h2>Meal 1</h2>
          <input className="meal1inputform" placeholder="type foods"></input><button type="submit">enter</button>
          <ul>
            <button type="text">enter food item</button>
            <li>almond butter</li>
            <li>coffee</li>
          </ul>
        </div>
        <div className="Meal">
          <h2>Meal 2</h2>
          <input placeholder="type foods"></input>
          <ul>
            <li>1 grilled cheese sandwich</li>
            <li>tomato soup</li>
          </ul>
        </div>
        <div className="Meal">
          <h2>Meal 3</h2>
          <input placeholder="type foods"></input>
          <ul>
            <li>1 falafel sandwich</li>
            <li>1 tabbouleh salad</li>
          </ul>
        </div>
        <div className="Meal">
          <h2>Snacks</h2>
          <input placeholder="type foods"></input>
          <ul>
            <li>pistachios</li>
          </ul>
        </div>
      </div>);
  }
}

export default MealPlan;
