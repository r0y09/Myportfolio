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
              src="https://media.licdn.com/dms/image/C4E03AQGgBwK8SyUPWA/profile-displayphoto-shrink_200_200/0?e=1572480000&v=beta&t=1eRAQsjSVyBy4XvsWvLuNFyxCK4z_-waXyKe7pe4FBk"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Hello! My name is Indrajeet Aditya Roy and welcome to my website!
              I'm a student currently pursuing Computer Engineering at Iowa
              State University. My goal is to gain knowledge and expertise in
              order to contribute significantly to the world of Computing and
              continue to grow professionally.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
