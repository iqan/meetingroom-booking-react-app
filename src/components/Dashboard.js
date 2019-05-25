import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return this.props.user == null || !this.props.user.isLoggedIn ? (
      <Redirect to="/" />
    ) : (
      <>
        <div className="d-flex flex-column">
          <h1>Dashboard</h1>
        </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Dashboard);
