import React, { Component } from "react";

class LoginControl extends Component {
  state = { isLoggedIn: false };
  handleLoginClick = () => this.setState({ isLoggedIn: true });
  handleLogoutClick = () => this.setState({ isLoggedIn: false });

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;

    isLoggedIn ? (button = <LogoutButton onClick={this.handleLogoutClick} />) : (button = <LoginButton onClick={this.handleLoginClick} />);

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn && <p>Welcome to React Study Group</p>}
        {button}
      </div>
    );
  }
}

const UserGreeting = () => <h1>Welcome back!</h1>;
const GuestGreeting = () => <h1>Please sign up.</h1>;

const Greeting = ({ isLoggedIn }) =>
  isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

const LoginButton = ({ onClick }) => (
  <button onClick={() => onClick()}>Login</button>
);
const LogoutButton = ({ onClick }) => (
  <button onClick={() => onClick()}>Logout</button>
);

export default LoginControl;
