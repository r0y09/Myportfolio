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
          "SQL",
          "Kotlin"
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
            data: [3, 2, 3, 3, 4, 4, 4, 3, 2, 1]
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
          "Jira",
          "MongoDB",
          "postgresSQL"
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
            data: [3, 3, 3, 4, 2, 2, 3, 4, 4, 1, 2, 2]
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
            data: [4, 3, 2, 4, 4]
          }
        ]
      },
      chartData4: {
        labels: [
          "ReactJS",
          "AngularJS",
          "Vue.js",
          "Node.js",
          "Express.js",
          "Bootstrap",
          "D3.js",
          "jQuery",
          "Phaser.js",
          "Django",
          "Flask",
          "Requests",
          "BeautifulSoup",
          "NumPy",
          "PyGame",
          "pyQt5",
          "matplotlib",
          "tensorflow",
          "tflearn",
          "Spring",
          "Swing"
        ],
        datasets: [
          {
            label: "Years of experience/use",
            fill: true,
            data: [
              4,
              3,
              3,
              3,
              3,
              3,
              3,
              3,
              2,
              3,
              3,
              3,
              3,
              2,
              3,
              3,
              2,
              1,
              1,
              2,
              2
            ],
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 10,
            pointHoverColor: "red"
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
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <br />
            <br />
            <Chart
              chartData={this.state.chartData4}
              legendPosition="top"
              text="Programming frameworks and libraries"
            />
            <br />
            <br />
            <h2>Additional Skills</h2>
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
