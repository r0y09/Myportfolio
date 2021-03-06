import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.macworld.co.uk/cmsdata/features/3608274/Terminalicon2_thumb800.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Hello World !</h1>
              <p>
                My name is Indrajeet Aditya Roy and welcome to my portfolio.
              </p>
              <hr />
              <p>Programmer | Web Developer | Student</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/indrajeet-aditya-roy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/r0y09/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
