import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

//since we have data, we're going to need it in a state
class Chart extends Component{
constructor(props){
  super(props);
  this.state = {
    chartData:{
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets:[
        {
          label: 'Calories consumed',
          data:[
            2000 ,
            1895 ,
            1780,
            1800,
            1900,
          ],
          backgroundColor: ['red','red', 'red', 'red', 'red']
        }
      ]
    }
  }
}

  render () {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData} //calling the data that's in the state
          options={{
          title: {
            display: true,
            text: 'Weekly Progress'
          },

          }}
        />
      </div>
    )
  }
}

export default Chart;
