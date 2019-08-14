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
              src="./img/portrait.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Hello! My name is Indrajeet Aditya Roy and welcome to my website!
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
