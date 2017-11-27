import React, {Component} from 'react';

class ProgressBar extends Component {
  render() {
    return (
      <div className="ProgressBar">
        <h2>Progress bar</h2>
      <progress id="ProgressBar" value="1700" max="1800"></progress>
    </div>
    );
  }
}

export default ProgressBar;
