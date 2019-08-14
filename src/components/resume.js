import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Chart from "./Chart";

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
          "R",
          "SQL"
        ],
        datasets: [
          {
            label: "Languages",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            data: [100, 80, 100, 100, 80, 80, 80, 70, 60]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Indrajeet Aditya Roy</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Hello! I'm Indrajeet Aditya Roy, a sophomore currently pursuing
              Computer Engineering at Iowa State University. My goal is to gain
              knowledge and expertise in order to contribute significantly to
              the world of Computing and continue to grow professionally.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p> 2279 Friley Stanton, 212 Beyer Court, Ames, Iowa 50012</p>
            <h5>Phone</h5>
            <p>267-2699650</p>
            <h5>Email</h5>
            <p>iaroy@iastate.edu</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={2018}
              schoolName="Victoria International School, United Arab Emirates"
              schoolDescription="I obtained a diploma from the IBDP program"
            />
            <Education
              startYear={2018}
              endYear={2022}
              schoolName="Iowa State University"
              schoolDescription="I am currently enrolled in the Computer Engeneering program."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Dining Worker at ISU Dining"
              jobDescription="I was working in cohesion with various team members in order to ensure the smooth and successful functioning of the ISU dining services."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={25} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Chart chartData={this.state.chartData} legendPosition="top" />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
