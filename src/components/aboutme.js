import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Aboutme extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Indrajeet Aditya Roy</h2>
            <img
              src="https://d1b10bmlvqabco.cloudfront.net/photos/jqsmuf1wTO50/1579163587_200.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Hello! My name is Indrajeet Aditya Roy and welcome to my website!
              I'm a student currently pursuing Computer Engineering with a minor
              in cyber security at Iowa State University. My goal is to gain
              knowledge and expertise in order to contribute significantly to
              the world of Computing and continue to grow professionally.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
