import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';

//since we have data, we're going to need it in a state
class Chart extends Component{

  render () {

      let calculatedTotal = 0;
      this.props.foodItems.forEach((foodItem) =>
        calculatedTotal+=foodItem.calories
      );

    var chartData = {
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets:[
            {
              label: 'Calories consumed',
              data:[
                1800 ,
                1900,
                2000,
                1800,
                1500,
                parseInt(calculatedTotal),
                0
              ],
              backgroundColor: ['white', 'white', 'white', 'white', 'white', 'white'],
              hoverBackgroundColor: ['gold', 'gold','gold','gold','gold','gold', 'gold'],
              yAxes: [{
                           display: true,
                           ticks: {
                               beginAtZero: true,
                               // steps: 10,
                               // stepValue: 5,
                               // max: 100
                           }
                       }],
            }
          ],
        }

    return (
      <div className="chart">
        <Bar
          data={chartData} //calling the data that's in the state
          options={{
          title: {
            display: true,
            text: 'Weekly Progress',
            fontSize: 26,
            fontColor: 'black',
            fontFamily: 'Lato'
          },

          }}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        foodItems: state.foodItems,
    }
}

export default connect(mapStateToProps)(Chart);
