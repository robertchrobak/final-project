import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./Login";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path ="/" component={Login} />
          <Route exact path ="/login" component={Login} />
          <Route exact path="/homepage" component={HomePage} />
        </div>
      </Router>

      // {/* <div className="App">
      //
      //   <div className="LoginView" >
      //     <Login />
      //   </div>
      //
      //   <div className="HomePageView" >
      //     <HomePage />
      //   </div>
      //
      // </div> */}
    );
  }
}

function mapStateToProps(state) {
    return {
        username: state.username
    }
}

// export default App;

export default connect(mapStateToProps)(App);
