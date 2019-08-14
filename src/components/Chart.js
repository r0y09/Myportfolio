import React, { Component } from "react";
import { Doughnut, Radar, Line, Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  };

  render() {
    return (
      <div className="chart">
        <Radar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Programming Languages",
              fontSize: 25,
              fontColor: "#F85F73"
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            scale: {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 5,
                stepSize: 1
              }
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
