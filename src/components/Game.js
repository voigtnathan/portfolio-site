import React, {Component} from 'react';

class Game extends Component{
    

    //inital state for game
    state = {
        gameBoard: null,
        score: 0,
        gameOver: false,
        message: null
    }

    //create starting board with two random coordinates with starting numbers
    createBoard = () => {
        let board = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ];
        this.setState({
            gameBoard:board
        });
    }
    
    addStarters = () => {
        //check for all zero spots
        let options = [];
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                if(this.state.gameBoard[i][j] === 0){
                    options.push({
                        x: i,
                        y: j
                    })
                }
            }
        }
    }
    //addStarters
    //function should pick two random tiles and add either 2 or 4 there
    //DO AFTER FINDING BLANK SPACES ON BOARD


    




    render(){
        return(
            <div>
                <table>{this.state.gameBoard}</table>
            </div>
        )
    }
}

export default Game;