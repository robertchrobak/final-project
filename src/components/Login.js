import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

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
        <img className="logoLogin" src="/slice4.png" alt="Calorie Gallery"/>
        <form className="LoginForm" onSubmit={this.onSubmit.bind(this)}>
          <h1>Please Log In</h1>
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
