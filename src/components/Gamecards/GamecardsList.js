import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class GamecardsList extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    currentAnswer: "",
    message: "Click an image to begin"
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  makeClickedTrue = props => {
    let toChange = this.props.gamecards.find(obj =>
      obj.id === props
    )
    toChange.clicked = true;
  };

  loseGame = () => {
    this.props.gamecards.map(item => {
      item.clicked = false;
      
    });
    // this.state.currentScore = 0;
    this.setState({ 
      currentAnswer: false,
      currentScore: 0, 
      message: 'Wrong Answer... Game Over :( But Try Again!' 
    });
    this.shuffle(this.props.gamecards);
    // this.setState({ message: 'Wrong Answer... Game Over :( But Try Again!' });
  }

  handleclick = (props, props2) => {
    if (props === false) {
      this.setState({ 
        currentAnswer: true,
        currentScore: this.state.currentScore += 1,
        message: 'Correct! Keep going!'
      });

      this.makeClickedTrue(props2);

      this.shuffle(this.props.gamecards);
      if (this.state.topScore < this.state.currentScore) {
        this.setState({ topScore: this.state.currentScore });
      }
      // this.setState({ message: 'Correct! Keep going!' });

    }
    else {
      this.loseGame();
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm="6" xs="6" md="3"><strong>Current Score:</strong>  {this.state.currentScore}</Col>
          <Col sm="6" xs="6" md="3"><strong>Top Score:</strong>  {this.state.topScore}</Col>
          <Col sm="6" xs="6" md="3" className={'answer-'+this.state.currentAnswer}><strong>Last Answer:</strong>  {this.state.message}</Col>

        </Row>
        <Row>
          {this.props.gamecards.map(item => (
            <Col sm="6" xs="6" md="3" key={item.id}>
              <img className="img" src={"img/" + item.src} data-id={item.id} alt="" data-clicked={item.clicked}
                onClick={() => this.handleclick(item.clicked, item.id)}></img>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default GamecardsList;