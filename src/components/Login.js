import React, { Component } from 'react';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  render(){
    return(

      <div className="LoginContainer">
        <form className="LoginForm" onSubmit={this.onSubmit.bind(this)}>
          <h1>Logo Goes Here</h1>
          <h2>Please Log In</h2>
          <p>
            <label className="form__label"></label>
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} placeholder="Username" />
          </p>
          <p>
            <label className="form__label"></label>
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} placeholder="Password" />
          </p>
            <button type="submit">LOG IN</button>
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

  }

}

export default Login;
