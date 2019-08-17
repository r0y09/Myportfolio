import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media.licdn.com/dms/image/C4E03AQH8WUlxh68pww/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=tUBPokEGNa8tRyiDc5RWqAcHEr5672QAN0FJSTmZ13c"
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
                  href="https://github.com"
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
