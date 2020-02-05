import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import _usersJson from "./data.json";

const _users = _usersJson;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: _users
    };
  }

  render() {
    // this.setState({
    //   users: [_users]
    // });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.users.map((user, i) => {
              return (
                <h1 key={i}>
                  {user._id} : {user.mail}
                </h1>
              );
            })}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
