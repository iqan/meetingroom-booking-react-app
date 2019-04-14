import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

export class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Meeting Room Booking App</h1>
          <p className="lead">Login and book a room for your meeting in a few seconds.</p>
          <p className="lead">
            <Button color="primary">Login <icon className="fa fa-sign-in-alt" /></Button> {'  '}
            <Button style={{ backgroundColor: 'green' }}>Register <icon className="fa fa-user-plus" /></Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
};

export default Home;