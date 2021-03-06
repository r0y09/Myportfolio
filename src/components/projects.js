import React, { Component } from "react";
import {
  Avatar,
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardHeader,
  Button,
  CardMedia,
  CardMenu,
  IconButton,
  MoreVertIcon
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card
            shadow={5}
            style={{ width: "320px", height: "400px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/full/javascriptlang.png) center / cover"
              }}
            >
              JavaScript Project #1
            </CardTitle>
            <CardText>
              A simple Tic-Tac-Toe game created using vanilla JavaScript, HTML5
              and CSS. Additionally, I also implemented the Minimax Algorithm to
              play around with an AI element.
            </CardText>

            <CardActions border>
              <Button colored href="https://r0y09.github.io/package/">
                Demo
              </Button>
            </CardActions>
          </Card>
          {/* Project 2 */}
          <Card
            shadow={5}
            style={{ width: "320px", height: "400px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/full/javascriptlang.png) center / cover"
              }}
            >
              JavaScript Project #2
            </CardTitle>
            <CardText>
              A simple Rock-Paper-scissors game created using vanilla
              JavaScript, HTML5 and SCSS.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://r0y09.github.io/rock-paper-scissors/"
              >
                Demo
              </Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card
            shadow={5}
            style={{
              width: "320px",
              height: "400px",
              margin: "auto"
            }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/full/javascriptlang.png) center / cover"
              }}
            >
              JavaScript Project #3
            </CardTitle>
            <CardText>
              A simple snake game built using Vanilla JavaScript, HTML5 and
              SCSS.
            </CardText>
            <CardActions border>
              <Button colored href="https://r0y09.github.io/snake/">
                Demo
              </Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card
            shadow={5}
            style={{ width: "320px", height: "400px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/full/javascriptlang.png) center / cover"
              }}
            >
              JavaScript Project #4
            </CardTitle>
            <CardText>
              A chess engine built using jQuery,HTML5 and CSS.
            </CardText>
            <CardActions border>
              <Button colored href="https://r0y09.github.io/chess/">
                Demo
              </Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card
            shadow={5}
            style={{ width: "320px", height: "400px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/full/javascriptlang.png) center / cover"
              }}
            >
              JavaScript Project #5
            </CardTitle>
            <CardText>
              A replica of freelancer website, where individuals can post job
              proposals with job details such as skills required, job
              descritpion, estimated fee and contanct email. The application was
              built using Vanilla JavaScript, Node.js, postgresSQL and
              Handlebars.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/r0y09/mockfreelancer">
                GitHub
              </Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card
            shadow={5}
            style={{ width: "320px", height: "400px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/full/javascriptlang.png) center / cover"
              }}
            >
              JavaScript Project #6
            </CardTitle>
            <CardText>
              A personal portfolio page displaying a brief indtroduction,
              skills, projects and contact information. The application was
              built using ReactJS.
            </CardText>
            <CardActions border>
              <Button colored href="https://indrajeet-aditya-roy.herokuapp.com">
                Demo
              </Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card
            shadow={5}
            style={{ width: "320px", height: "400px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/full/javascriptlang.png) center / cover"
              }}
            >
              JavaScript Project #7
            </CardTitle>
            <CardText>
              A simple replica of the 1980's astroids video game built using
              HTML5, Vanilla JavaScript and CSS.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/r0y09/astroidgame">
                Github
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/profile_images/439154912719413248/pUBY5pVj_400x400.png) center / cover"
              }}
            >
              Python Project #1
            </CardTitle>
            <CardText>
              A simple mspaint replica built using python. Libraries used
              include pygame and tkinter libraries.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/r0y09/simplemspaint">
                GitHub
              </Button>
            </CardActions>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/profile_images/439154912719413248/pUBY5pVj_400x400.png) center / cover"
              }}
            >
              Python Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/r0y09/simplemspaint">
                GitHub
              </Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/profile_images/439154912719413248/pUBY5pVj_400x400.png) center / cover"
              }}
            >
              Python Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/r0y09/simplemspaint">
                GitHub
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/141px-Java_programming_language_logo.svg.png) center / cover"
              }}
            >
              Java Project #1
            </CardTitle>
            <CardText>
              A simple tetris-like game built using Java and Java swing. The
              user is able to play via the keyboard keys.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/141px-Java_programming_language_logo.svg.png) center / cover"
              }}
            >
              Java Project #2
            </CardTitle>
            <CardText>
              A simulation of a game of cricket built using Java. The user is
              able to input parameters such as number of teams, players and
              overs and the game engine would simulate the game with the
              Parameters and output the winner and the final scores and
              statistics of the match.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/141px-Java_programming_language_logo.svg.png) center / cover"
              }}
            >
              Java Project #3
            </CardTitle>
            <CardText>
              A simulation of an uber ride built using Java. The user is able to
              input parameters such as number of passengers, stops, and distance
              and the program would simulate the uber ride with the Parameters
              and output the final costs such as the ride, and the additional
              costs such as the fuel.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png) center / cover"
              }}
            >
              C Project #1
            </CardTitle>
            <CardText></CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png) center / cover"
              }}
            >
              C Project #2
            </CardTitle>
            <CardText></CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png) center / cover"
              }}
            >
              C Project #3
            </CardTitle>
            <CardText></CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
          <Tab>Java</Tab>
          <Tab>C/C++</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
