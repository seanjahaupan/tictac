import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import GameSquare from './gameSquare';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = props.initialState;
    }

    onPress(index) {
      console.log(index);
      //check if there's already text inside the box, if not then do nothing
      if (this.state.gameBoard[index] === '') {
        this.playTurn(index);
      }
    }

    playTurn(index) {
      //creates a copy of the state board
      const newArray = [...this.state.gameBoard];
      //updates the square 
      newArray[index] = this.state.player;

      //if we're x, switch to o and vice versa, set state to update
      switch (this.state.player) {
        case ('X'):
          this.setState({ player: 'O', gameBoard: newArray });
          break;
        case ('O'):
          this.setState({ player: 'X', gameBoard: newArray });
          break;
        default:
          break; 
      }
      // check winning condition
      this.checkWinningCondition(newArray);
    }

    checkWinningCondition(newArray) {
      //check if it's tie game aka full board
      if (newArray[0] !== '' && newArray[0] === newArray[1] && newArray[0] === newArray[2]) {
        //check horizontal winning condition 0,1,2
        this.showWinner(newArray[0]);
        console.log(`Winner is ${newArray[0]}`);
      } else if (newArray[3] !== '' && newArray[3] === newArray[4] && newArray[3] === newArray[5]) {
        //check horizontal winning condition 3,4,5
        this.showWinner(newArray[3]);
        console.log(`Winner is ${newArray[3]}`);
      } else if (newArray[6] !== '' && newArray[6] === newArray[7] && newArray[6] === newArray[8]) {
        //check horizontal winning condition 6,7,8
        this.showWinner(newArray[6]);
        console.log(`Winner is ${newArray[6]}`);
      } else if (newArray[0] !== '' && newArray[0] === newArray[3] && newArray[0] === newArray[6]) {
        //check vertical winning condition 0,3,6
        this.showWinner(newArray[0]);
        console.log(`Winner is ${newArray[0]}`);
      } else if (newArray[1] !== '' && newArray[1] === newArray[4] && newArray[1] === newArray[7]) {
        //check vertical winning condition 1,4,7
        this.showWinner(newArray[1]);
        console.log(`Winner is ${newArray[1]}`);
      } else if (newArray[2] !== '' && newArray[2] === newArray[5] && newArray[2] === newArray[8]) {
        //check vertical winning condition 2,5,8
        this.showWinner(newArray[2]);
        console.log(`Winner is ${newArray[2]}`);
      } else if (newArray[0] !== '' && newArray[0] === newArray[4] && newArray[0] === newArray[8]) {
        //check diagonal winning condition 0,4,8
        this.showWinner(newArray[0]);
        console.log(`Winner is ${newArray[0]}`);
      } else if (newArray[2] !== '' && newArray[2] === newArray[4] && newArray[2] === newArray[6]) {
        //check diagonal winning condition 2,4,6
        this.showWinner(newArray[2]);
        console.log(`Winner is ${newArray[2]}`);
      } else if (!newArray.includes('')) {
        console.log('tie game');
        this.showWinner('');
      }
    }
  

    showWinner(winner) {
      let winnerMessage = '';
      if (winner === '') {
        // tie condition
        winnerMessage = 'Tie-game!';
      } else {
        winnerMessage = `Player ${winner} Won!`;
      }
      // show the sexy alert
      Alert.alert(winnerMessage, 'press to replay', 
        [{ text: 'Replay', onPress: () => this.replay() }]
      );
    }

    replay() {
      this.setState({ ...this.props.initialState });
    }

    render() {
        console.log(this.state);
        return ( 
            <View style={styles.viewStyle} >
              {this.state.gameBoard.map((playerMarker, i) => (
                <GameSquare key={i} turn={playerMarker} onPress={() => this.onPress(i)} />
              ))}
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'stretch'
    }
};

App.defaultProps = {
    initialState: {
        gameBoard: new Array(9).fill(''),
        player: 'X',
        showModal: false
    }
};

export default App;
