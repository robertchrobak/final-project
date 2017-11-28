import React, {Component} from 'react';
import { connect } from 'react-redux';

class MealPlan extends Component {
  render() {


    const testingSomethingGood = this.props.foodItems.map((tempThing, index) =>
    <div>
      <div>{tempThing.food}</div>
      <div>{tempThing.calories}</div>
    </div>
  );

    return (
      <div className="MealPlan">
        <div className="Meal">
          <h1> {testingSomethingGood}</h1>
          <h2>Meal 1</h2>
          <ul>
            <li>almond butter</li>
            <li>coffee</li>
          </ul>
        </div>
        <div className="Meal">
          <h2>Meal 2</h2>
          <ul>
            <li>1 grilled cheese sandwich</li>
            <li>tomato soup</li>
          </ul>
        </div>
        <div className="Meal">
          <h2>Meal 3</h2>
          <ul>
            <li>1 falafel sandwich</li>
            <li>1 tabbouleh salad</li>
          </ul>
        </div>
        <div className="Meal">
          <h2>Snacks</h2>
          <ul>
            <li>pistachios</li>
          </ul>
        </div>
      </div>);
  }
}

function mapStateToProps(state) {
    return {
        foodItems: state.foodItems
    }
}


export default connect(mapStateToProps)(MealPlan);
