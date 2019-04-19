import React, { Component } from "react";

export default class AppFooter extends Component {
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-light bg-light container">
        <a className="navbar-brand" href="/">
          &copy; 2019 iqans.com
        </a>
      </nav>
    );
  }
}
