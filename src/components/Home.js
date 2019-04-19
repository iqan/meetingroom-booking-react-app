import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Meeting Room Booking App</h1>
        <p className="lead">
          Login and book a room for your meeting in a few seconds.
        </p>
        <p className="lead">
          <a className="btn btn-primary" href="/login" role="button">
            Login <i className="fa fa-sign-in-alt" />
          </a>{" "}
          {"  "}
          <a className="btn btn-warning" href="/register" role="button">
            Register <i className="fa fa-user-plus" />
          </a>
        </p>
      </div>
    );
  }
}

export default Home;
