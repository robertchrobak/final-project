import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import HomePage from './HomePage';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

nextPath(path) {
  this.props.history.push(path);
}

  render(){
    return(
      <div className="LoginContainer">
        <h1>Logo Goes Here</h1>
        <form className="LoginForm" onSubmit={this.onSubmit.bind(this)}>
          <h2>Please Log In</h2>
          <p>
            <label className="form__label"></label>
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} placeholder="Username" />
          </p>
          <p>
            <label className="form__label"></label>
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} placeholder="Password" />
          </p>

            <button type="submit" onClick={() => this.nextPath('/homepage')}>LOG IN</button>

            {/* <button type="submit">LOG IN</button> */}
            <p>
              <a href="http://google.com">Forgot your password?</a>
            </p>
        </form>
      </div>
    );
  }

  handleUsernameChange(event) {
      this.setState({
          username: event.target.value
      });
  }

  handlePasswordChange(event) {
      this.setState({
          password: event.target.value
      });
  }

  onSubmit(event) {
      event.preventDefault();
      event.action = "./HomePage.js"

      const username = {
        username: this.state.username
      }
      this.props.onSubmit(username);
      this.setState({
        username: "",
        password: ""
      });
  }

}

const mapActionsToProps = {
  onSubmit: loginUser
}

export default connect (null, mapActionsToProps)(Login);
