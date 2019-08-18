import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Chart from "./Chart";
import Skills from "./skills";

class Resume extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "C",
          "C++",
          "Python",
          "Java",
          "Javascript",
          "HTML",
          "CSS",
          "SCSS",
          "SQL"
        ],
        datasets: [
          {
            label: "Years of experience/use",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 10,
            pointHoverColor: "red",
            data: [3, 3, 4, 3, 5, 5, 5, 4, 3]
          }
        ]
      },
      chartData2: {
        labels: [
          "Eclipse",
          "IntelliJ",
          "PyCharm",
          "VScode",
          "Android Studio",
          "UNIX",
          "Firebase",
          "Git",
          "Command Line",
          "Trello",
          "Jira"
        ],
        datasets: [
          {
            label: "Years of experience/use",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 10,
            pointHoverColor: "red",
            data: [4, 4, 4, 4, 2, 3, 3, 4, 3, 2, 3]
          }
        ]
      },
      chartData3: {
        labels: ["English", "French", "Arabic", "Hindi", "Bengali"],
        datasets: [
          {
            label: "Proficiency",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 10,
            pointHoverColor: "red",
            data: [5, 4, 3, 5, 5]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell col={2} />
          <Cell className="resume-right-col" col={8}>
            <h2>Programming Skills</h2>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <br />
            <Chart
              chartData={this.state.chartData}
              legendPosition="top"
              text="Programming Languages"
            />
            <br />
            <br />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <br />
            <br />
            <Chart
              chartData={this.state.chartData2}
              legendPosition="top"
              text="Programming Tools"
            />
            <br />
            <br />
            <h2>Other Skills</h2>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <br />
            <br />
            <Chart
              chartData={this.state.chartData3}
              legendPosition="top"
              text="Communication Languages"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
