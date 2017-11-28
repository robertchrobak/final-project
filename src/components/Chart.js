import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

//since we have data, we're going to need it in a state
class Chart extends Component{
constructor(props){
  super(props);
  this.state = {
    chartData:{
      labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets:[
        {
          label: 'Calories consumed',
          data:[
            60 ,
            75 ,
            89,
            93,
            78
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
