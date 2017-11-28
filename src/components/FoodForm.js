import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';

class FoodForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mealChoice: "Meal 1"
        };
    }

    render() {
        return (
            // Added onSubmit handler here.
            <form className="FoodForm" onSubmit={this.onSubmit.bind(this)}>
                <p>
                    <label className="form__label">Food Item</label>
                    {/* Added two-way sync here: value + onChange */}
                    <input type="text"  onChange={this.handleNameChange.bind(this)} />
                </p>
                <p>
                    <label className="form__label"></label>
                    <label><input type="radio" name="mealOptions" value="Meal 1"
                        onChange={this.handleMealChange.bind(this)}/>Meal 1</label>
                    <label><input type="radio" name="mealOptions" value="Meal 2"
                        onChange={this.handleMealChange.bind(this)}/>Meal 2</label>
                    <label><input type="radio" name="mealOptions" value="Meal 3"
                        onChange={this.handleMealChange.bind(this)}/>Meal 3</label>
                    <label><input type="radio" name="mealOptions" value="Snacks"
                        onChange={this.handleMealChange.bind(this)}/>Snacks</label>
                </p>
                <p>
                    <button type="submit">SUBMIT</button>
                </p>
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
            name: event.target.value
        });
    }

    // TODO call this function when the form submits
    onSubmit(event) {
        event.preventDefault();


        // Here's the object to add to the registrations array.
        const foodSubmission = {
            name: this.state.name,
            mealChoice: this.state.mealChoice
        }

        // Added this
        this.props.onSubmit(foodSubmission);

        // Clear form
        this.setState({
            name: "",
            mealChoice: "Meal 1"
        });
    }

}

const mapActionsToProps = {
    onSubmit: register
}

export default connect(null, mapActionsToProps)(FoodForm);
