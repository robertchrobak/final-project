import React, {Component} from 'react';
import { connect } from 'react-redux';

class MealPlan extends Component {
  render() {
    const meal1Items = this.props.foodItems.map((foodItem, index) =>
        <li key={index}>{foodItem.food} - {foodItem.calories} calories</li>
    );

    const meal2Items = this.props.foodItems.map((foodItem, index) =>
        <li key={index}>{foodItem.food} - {foodItem.calories} calories</li>
    );

    return (

      <div className="MealPlan">
        <div className="Meal">
          <h2>Meal 1</h2>
          <ul>
            {meal1Items}
          </ul>
        </div>
        <div className="Meal">
          <h2>Meal 2</h2>
          <ul>
            {meal2Items}
          </ul>
        </div>
        <div className="Meal">
          <h2>Meal 3</h2>
          <ul>
          </ul>
        </div>
        <div className="Meal">
          <h2>Snacks</h2>
          <ul>
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
