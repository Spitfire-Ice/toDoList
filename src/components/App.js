import React, { Component } from "react";
import '../styles/App.scss';
import Button from "./button/button";
import logo from '../assets/img/logo021123.png';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isOpen: true,
  //   }
  // }
  state = {
    tasks: [
      {1:true},
      {1:false}
    ]
  };
  render() {
    const { tasks } = this.state;
    console.log(tasks.length);
    console.log(this.state);

    return (
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is empty React project(webpack+sass)</h1>
        <Button />
      </div>
    );
  }
}

export default App;