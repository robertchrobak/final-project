import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';

//since we have data, we're going to need it in a state
class Chart extends Component {

  render() {

    let calculatedTotal = 0;
    this.props.foodItems.forEach((foodItem) => calculatedTotal += foodItem.calories);

    var chartData = {
      labels: [
        'Sun',
        'Mon',
        'Tues',
        'Wed',
        'Thurs',
        'Fri',
        'Sat'
      ],
      datasets: [
        {
          label: 'Calories consumed',
          data: [
            1800,
            1900,
            2000,
            1800,
            1500,
            parseInt(calculatedTotal),
            0
          ],
          fontColor: 'rgba(184,101,24,1)',
          backgroundColor: [
            'white',
            '#fff',
            '#fff',
            'white',
            'white',
            'white'
          ],
          hoverBackgroundColor: [
            'rgba(182,100,24,1)',
            'rgba(182,100,24,1)',
            'rgba(182,100,24,1)',
            'rgba(182,100,24,1)',
            'rgba(182,100,24,1)',
            'rgba(182,100,24,1)',
            'rgba(182,100,24,1)'
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,

                // steps: 10,
                // stepValue: 5,
                // max: 100
              }
            }
          ]

        }
      ]
    }

    return (<div className="chart">
      <Bar data={chartData}
        //calling the data that's in the state
        options={{
          responsive: true,
          barThickness: 20,
          // maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Weekly Progress',
            fontSize: 25,
            fontColor: 'rgba(184,101,24,1)',
            fontFamily: 'Lato'
          },
          legend: {
            labels: {
              fontColor: 'rgba(184,101,24,1)',
            }
          },
          scales: {
            yAxes: [{
                gridLines: {
                  color: 'rgba(251,163,58,1)',
                  zeroLineColor: 'rgba(251,163,58,1)',
                },
                ticks: {
                  fontColor: 'rgba(184,101,24,1)'
                }

              }],
            xAxes: [{
                gridLines: {
                  color: 'rgba(251,163,58,1)',
                },
                ticks: {
                  fontColor: 'rgba(184,101,24,1)'
                }
              }]
            }
        }}/>
    </div>)
  }
}

function mapStateToProps(state) {
  return {foodItems: state.foodItems}
}

export default connect(mapStateToProps)(Chart);
