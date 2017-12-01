import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodItems } from '../actions';

class FoodForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mealChoice: ""
        };
        // 2-way syncing for mealChoice
        this.handleMealChange = this.handleMealChange.bind(this);
    }

    render() {
        return (
            <form className="FoodForm" onSubmit={this.onSubmit.bind(this)}>
                <div>
                    <label className="FormLabel">Food Item</label>
                    <input type="text" onChange={this.handleNameChange.bind(this)} placeholder="Enter food or meal" value={this.state.name}/>
                </div>
                <div>
                    <label className="FormLabel"></label>
                    <label><input type="radio" name="mealOptions" value="Meal 1" checked={this.state.mealChoice === 'Meal 1'}
                        onChange={this.handleMealChange.bind(this)}/>Meal 1</label>
                    <label><input type="radio" name="mealOptions" value="Meal 2" checked={this.state.mealChoice === 'Meal 2'}
                        onChange={this.handleMealChange.bind(this)}/>Meal 2</label>
                    <label><input type="radio" name="mealOptions" value="Meal 3" checked={this.state.mealChoice === 'Meal 3'}
                        onChange={this.handleMealChange.bind(this)}/>Meal 3</label>
                    <label><input type="radio" name="mealOptions" value="Snacks" checked={this.state.mealChoice === 'Snacks'}
                        onChange={this.handleMealChange.bind(this)}/>Snacks</label>
                </div>
                <div>
                    <button type="submit">SUBMIT</button>
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
