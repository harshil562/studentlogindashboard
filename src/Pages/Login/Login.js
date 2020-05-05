import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';

import logo from './../../assets/logo.svg';
import './login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  submitForm = () => {
    const { cookies } = this.props;
    cookies.set('isSessionActive', true);
  }

  render() {
    return (
      <div className="login">
        <img src={logo} alt="logo" />
        <Form id="login" onSubmit={this.submitForm}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
         </Button>
        </Form>
      </div>
    )
  }
}

export default Login;