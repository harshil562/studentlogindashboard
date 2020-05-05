import React, { Component } from "react";
import { instanceOf } from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Cookies } from 'react-cookie';

import logo from './../../assets/logo.svg';
import './login.css';

class Login extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submitForm = () => {
    const { cookies } = this.props;
    cookies.set('isSessionActive', true);
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="login">
        <img src={logo} alt="logo" />
        <Form id="login" onSubmit={this.submitForm}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={this.onChange} value={username}
              required type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.onChange} value={password}
              required type="password" placeholder="Password" />
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