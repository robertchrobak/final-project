import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeFoodItem } from '../actions';
import "font-awesome/css/font-awesome.css";

class MealPlan extends Component {

  render() {

    const meal1Items = [];
    const meal2Items = [];
    const meal3Items = [];
    const snackItems = [];

    this.props.foodItems.forEach((foodItem, index) => {

      if(foodItem.meal === "Meal 1") {
        meal1Items.push(<li key={index}>{foodItem.food} &mdash; {parseInt(foodItem.calories)} calories <p><button onClick={this.onDelete.bind(this, index)} className="delete" href=""><i className="fa fa-trash fa-lg" idName="deletebutton"></i></button></p></li>);
      }
      if(foodItem.meal === "Meal 2") {
        meal2Items.push(<li key={index}>{foodItem.food} &mdash; {parseInt(foodItem.calories)} calories <p><button onClick={this.onDelete.bind(this, index)} className="delete" href=""><i className="fa fa-trash fa-lg"></i></button></p></li>);
      }
      if(foodItem.meal === "Meal 3") {
        meal3Items.push(<li key={index}>{foodItem.food} &mdash; {parseInt(foodItem.calories)} calories <p><button onClick={this.onDelete.bind(this, index)} className="delete" href=""><i className="fa fa-trash fa-lg"></i></button></p></li>);
      }
      if(foodItem.meal === "Snacks") {
        snackItems.push(<li key={index}>{foodItem.food} &mdash; {parseInt(foodItem.calories)} calories <p><button onClick={this.onDelete.bind(this, index)} className="delete" href=""><i className="fa fa-trash fa-lg"></i></button></p></li>);
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
      </div>
    );
  }

  onDelete(index) {
      // event.preventDefault();
      this.props.removeFoodItem(index);
      // this.setState({
      //     name: "",
      //     mealChoice: "Meal 1"
      // });
  }

}

const mapActionsToProps = {
  removeFoodItem
}

function mapStateToProps(state) {
    return {
        foodItems: state.foodItems
    }
}

export default connect(mapStateToProps, mapActionsToProps)(MealPlan);
