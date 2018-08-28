import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'reactstrap';
import Game from './components/Gamecards/Game.js';
// import GamecardsList from './components/Gamecards/GamecardsList.js';
class App extends Component {
  // state = {
  //   count: 0
  // };

  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count += 1 });
  //   console.log(this.state.count);
  // };

  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Click Game</h1>
        </header>
        <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
        </p>

        
          <Game />
        
      </div>
    );
  }
}

export default App;
