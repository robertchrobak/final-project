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

    var chartData= {
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets:[
            {
              label: 'Calories consumed',
              data:[
                2000 ,
                1895 ,
                3000,
                1800,
                calculatedTotal,
              ],
              backgroundColor: ['red','red', 'red', 'red', 'red']
            }
          ]
        }


    return (
      <div className="chart">
        <Bar
          data={chartData} //calling the data that's in the state
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

function mapStateToProps(state) {
    return {
        foodItems: state.foodItems,
    }
}

export default connect(mapStateToProps)(Chart);
