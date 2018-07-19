import React, { Component } from 'react';
import GamecardsList from './GamecardsList.js';

let gamecards = [
  {
    id: 1,
    src: "1.jpg",
    clicked: false
  },
  {
    id: 2,
    src: "2.jpg",
    clicked: false
  },
  {
    id: 3,
    src: "3.jpg",
    clicked: false
  },
  {
    id: 4,
    src: "4.jpg",
    clicked: false
  },
  {
    id: 5,
    src: "5.jpg",
    clicked: false
  },
  {
    id: 6,
    src: "6.jpg",
    clicked: false
  },
  {
    id: 7,
    src: "7.jpg",
    clicked: false
  },
  {
    id: 8,
    src: "8.jpg",
    clicked: false
  },
  {
    id: 9,
    src: "9.jpg",
    clicked: false
  },
  {
    id: 10,
    src: "10.jpg",
    clicked: false
  },
  {
    id: 11,
    src: "11.jpg",
    clicked: false
  },
  {
    id: 12,
    src: "12.jpg",
    clicked: false
  }
]

class Game extends Component {
  // state = {
  //   count: 0
  // };

  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count += 1 });
  //   console.log(this.state.count);
  // };

  // shuffle = array => {
  //   var currentIndex = array.length, temporaryValue, randomIndex;

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {

  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }

  //   return array;
  // }

  // gamecards = this.shuffle(gamecards);

  render() {
    return (
      <GamecardsList gamecards={gamecards}/>
    );
  }

}

export default Game;