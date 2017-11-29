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
            <form className="FoodForm" onSubmit={this.onSubmit.bind(this)}>
                <p>
                    <label className="form__label">Food Item </label>
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
    onSubmit: register
}

export default connect(null, mapActionsToProps)(FoodForm);
