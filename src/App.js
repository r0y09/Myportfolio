import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content, Footer } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Skills</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Skills</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
