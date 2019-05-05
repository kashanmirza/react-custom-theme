import React, { Component } from 'react';
import logo from '../logo.svg';
import $ from 'jquery';
import auth from './auth';

class Login extends Component {

  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {

    }
  }

  loginMethod() {
    var username = $('#username').val();
    var password = $('#password').val();

    if (username == "admin" && password == "admin") {
      auth.login(() => {
        this.props.history.push("/app");
      })
    }
    else {
      alert("wrong Username or Password")
    }
  }

  handleKeyPress(event) {
    if (event.key == "Enter") {
      this.loginMethod();
    }
  }

  render() {
    return (
      <div className="login_Box clearfix">
        <h1>Welcome To Login React Application !</h1>
        <form>
          <input className="login_Box_Input" type="text" id="username" name="userid"
            placeholder="USERNAME"
            required=""
            onKeyPress={this.handleKeyPress} />
          <input className="login_Box_Input" type="password" id="password" name="password"
            placeholder="PASSWORD"
            required=""
            onKeyPress={this.handleKeyPress} />
          <button className="login_Box_Button" onClick={this.loginMethod.bind(this)}>LOGIN</button>
        </form>
      </div>
    );
  }
}

export default Login;
