import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodItems } from '../actions';

class FoodForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mealChoice: "Meal 1"
        };
        // 2-way syncing for mealChoice
        this.handleMealChange = this.handleMealChange.bind(this);
    }

    render() {
        return (
            <form className="FoodForm" onSubmit={this.onSubmit.bind(this)}>
                <div>
                    {/* <label className="FormLabel">Food Item</label> */}
                    <input type="text" onChange={this.handleNameChange.bind(this)} placeholder="Enter food or meal" value={this.state.name}/>
                    <button className="FoodFormButton" type="submit">SUBMIT</button>
                </div>
                <div className="MealSelectContainer">
                    <label className="FormLabel"></label>
                      <select value={this.state.mealChoice} onChange={this.handleMealChange.bind(this)}>
                        <option defaultValue="Meal 1">Meal 1</option>
                        <option value="Meal 2">Meal 2</option>
                        <option value="Meal 3">Meal 3</option>
                        <option value="Snacks">Snacks</option>
                      </select>
                </div>
            </form>
        );
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleMealChange(event) {
        this.setState({
            mealChoice: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        const foodSubmission = {
            name: this.state.name,
            mealChoice: this.state.mealChoice
        }
        this.props.onSubmit(foodSubmission);
        this.setState({
            name: "",
            mealChoice: "Meal 1"
        });
    }

}

const mapActionsToProps = {
    onSubmit: fetchFoodItems
}

export default connect(null, mapActionsToProps)(FoodForm);
