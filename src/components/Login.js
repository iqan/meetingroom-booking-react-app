import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { login } from "../redux/actions/userActions";

class Login extends Component {
  user = {};
  handleLogin = e => {
    e.preventDefault();
    this.props.onLogin(this.user);
  };
  render() {
    return (
      <div className="d-flex flex-column">
        <h2 className="text-center my-5">Login</h2>
        <form className="align-self-center center-form mb-5">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              placeholder="Enter email"
              onChange={e => (this.user.email = e.target.value)}
            />
            <small className="form-text text-muted" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={e => (this.user.password = e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProp(dispatch) {
  return {
    onLogin: user => {
      dispatch(login(user));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Login);
