import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logout } from "../redux/actions/userActions";

class LogOut extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.onLogout();
      this.props.history.push("/");
    }, 500);
  }

  render() {
    return (
      <>
        <div>Logging out...</div>
      </>
    );
  }
}

LogOut.propTypes = {
  onLogout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    history: ownProps.history
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logout())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
