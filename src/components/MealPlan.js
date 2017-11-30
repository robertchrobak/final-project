import React, {Component} from 'react';
import { connect } from 'react-redux';

class MealPlan extends Component {

  render() {

    const meal1Items = [];
    const meal2Items = [];
    const meal3Items = [];
    const snackItems = [];

    this.props.foodItems.forEach((foodItem, index) => {

      if(foodItem.meal === "Meal 1") {
        meal1Items.push(<li key={index}>{foodItem.food} - {foodItem.calories} calories</li>);
      }
      if(foodItem.meal === "Meal 2") {
        meal2Items.push(<li key={index}>{foodItem.food} - {foodItem.calories} calories</li>);
      }
      if(foodItem.meal === "Meal 3") {
        meal3Items.push(<li key={index}>{foodItem.food} - {foodItem.calories} calories</li>);
      }
      if(foodItem.meal === "Snacks") {
        snackItems.push(<li key={index}>{foodItem.food} - {foodItem.calories} calories</li>);
      }

    });

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
            {meal3Items}
          </ul>
        </div>
        <div className="Meal">
          <h2>Snacks</h2>
          <ul>
            {snackItems}
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
