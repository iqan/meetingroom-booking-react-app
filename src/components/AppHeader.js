import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {} from "../redux/actions/userActions";

export class AppHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Meeting Room Booking App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

AppHeader.propTypes = {};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProp(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(AppHeader);
