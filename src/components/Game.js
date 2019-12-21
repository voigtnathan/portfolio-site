import React, { Component } from 'react';

class Game extends Component {


    //inital state for game
    state = {
        gameBoard: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], //change to null when done testing
        score: 0,
        gameOver: false,
        message: null
    }

    //create starting board with two random coordinates with starting numbers
    createBoard = () => {

        let board = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];

        board = this.placeNewRandom(this.placeNewRandom(board));

        this.setState({
            gameBoard: board,
            score: 0,
            gameOver: false,
            message: null
        });
    }


    //check for all zero spots on the board array
    getAllBlankSpaces = (board) => {
        let blankSpaces = [];
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                if (board[r][c] === 0) {
                    blankSpaces.push([r, c])
                }
            }
        }
        return blankSpaces;
    }


    //generate two random starting numbers either  or 4
    createStartNumbers = () => {
        const starters = [2, 4];
        const randomNum = starters[Math.floor(Math.random() * starters.length)];

        console.log(randomNum);

        return randomNum;
    }


    //function should pick two random tiles and add either 2 or 4 there
    placeNewRandom = (board) => {
        const blankTiles = this.getAllBlankSpaces(board);
        let randomTile = blankTiles[Math.floor(Math.random() * blankTiles.length)];

        console.log('random tile ' + randomTile);

        let randomStarter = this.createStartNumbers();

        board[randomTile[0]][randomTile[1]] = randomStarter;

        console.log(board);

        return board;
    }

    isGameOver = (board) => {
        return ((this.getAllBlankSpaces(board)).length < 1 ? true : false);
    }


    //checks the previous value of the board against the current value of the board
    checkBoard = (oldBoard, newBoard) => {
        return (JSON.stringify(newBoard) !== JSON.stringify(oldBoard)) ? true : false;
    }

    //intakes direction of movement and checks for game over
    move = (direction) => {
        console.log('Moved ' + direction);
        if (this.state.gameOver != true) {
            if (direction === 'left') {
                console.log('Game over???  ' + this.isGameOver(this.state.gameBoard));
                let movedLeft = this.moveLeft(this.state.gameBoard)
                if (this.checkBoard(this.state.gameBoard, movedLeft.boardOut)) {
                    let leftRandom = this.placeNewRandom(movedLeft.boardOut);
                    if (this.isGameOver(leftRandom)) {
                        this.setState({ gameBoard: leftRandom, gameOver: true, score: this.state.score, message: 'Game Over! Please start a new game.' })
                    } else {
                        this.setState({ gameBoard: leftRandom, gameOver: false, score: this.state.score += movedLeft.score, message: null })
                    }
                    console.log("SUCCESSSS");
                }

            } else if (direction === 'up') {
                console.log('Game over???  ' + this.isGameOver(this.state.gameBoard));
                let movedUp = this.moveUp(this.state.gameBoard)
                if (this.checkBoard(this.state.gameBoard, movedUp.boardOut)) {
                    let upRandom = this.placeNewRandom(movedUp.boardOut);
                    if (this.isGameOver(upRandom)) {
                        this.setState({ gameBoard: upRandom, gameOver: true, score: this.state.score, message: 'Game Over! Please start a new game.' })
                    } else {
                        this.setState({ gameBoard: upRandom, gameOver: false, score: this.state.score += movedUp.score, message: null })
                    }
                    console.log("SUCCESSSS");
                }
            } else if (direction === 'down') {
                console.log('Game over???  ' + this.isGameOver(this.state.gameBoard));
                let movedDown = this.moveDown(this.state.gameBoard)
                if (this.checkBoard(this.state.gameBoard, movedDown.boardOut)) {
                    let downRandom = this.placeNewRandom(movedDown.boardOut);
                    if (this.isGameOver(downRandom)) {
                        this.setState({ gameBoard: downRandom, gameOver: true, score: this.state.score, message: 'Game Over! Please start a new game.' })
                    } else {
                        this.setState({ gameBoard: downRandom, gameOver: false, score: this.state.score += movedDown.score, message: null })
                    }
                    console.log("SUCCESSSS");
                }
            } else if (direction === 'right') {
                console.log('Game over???  ' + this.isGameOver(this.state.gameBoard));
                let movedRight = this.moveRight(this.state.gameBoard)
                if (this.checkBoard(this.state.gameBoard, movedRight.boardOut)) {
                    let rightRandom = this.placeNewRandom(movedRight.boardOut);
                    if (this.isGameOver(rightRandom)) {
                        this.setState({ gameBoard: rightRandom, gameOver: true, score: this.state.score, message: 'Game Over! Please start a new game.' })
                    } else {
                        this.setState({ gameBoard: rightRandom, gameOver: false, score: this.state.score += movedRight.score, message: null })
                    }
                    console.log("SUCCESSSS");
                }
            }
        }
    }

    moveDown(boardIn) {
        let rotatedRight = this.rotateRight(boardIn);
        let boardOut = [];
        let score = 0;

        // Shift all numbers to bottom
        for (let r = 0; r < rotatedRight.length; r++) {
            let row = [];
            for (let c = rotatedRight[r].length - 1; c >= 0; c--) {
                let current = rotatedRight[r][c];
                (current === 0) ? row.push(current) : row.unshift(current);
            }
            boardOut.push(row);
        }

        // Combine numbers and shift to bottom
        for (let r = 0; r < boardOut.length; r++) {
            for (let c = 0; c < boardOut.length; c++) {
                if (boardOut[r][c] > 0 && boardOut[r][c] === boardOut[r][c + 1]) {
                    boardOut[r][c] = boardOut[r][c] * 2;
                    boardOut[r][c + 1] = 0;
                    score += boardOut[r][c];
                } else if (boardOut[r][c] === 0 && boardOut[r][c + 1] > 0) {
                    boardOut[r][c] = boardOut[r][c + 1];
                    boardOut[r][c + 1] = 0;
                }
            }
        }

        // Rotate board back upright
        boardOut = this.rotateLeft(boardOut);

        return { boardOut, score };
    }


    moveRight(boardIn) {
        let boardOut = [];
        let score = 0;
    
        // Shift all numbers to the right
        for (let r = 0; r < boardIn.length; r++) {
          let row = [];      
          for (let c = 0; c < boardIn[r].length; c++) {
            let current = boardIn[r][c];
            (current === 0) ? row.unshift(current) : row.push(current);
          }
          boardOut.push(row);
        }
    
        // Combine numbers and shift to right
        for (let r = 0; r < boardOut.length; r++) {
          for (let c = boardOut[r].length - 1; c >= 0; c--) {
            if (boardOut[r][c] > 0 && boardOut[r][c] === boardOut[r][c - 1]) {
              boardOut[r][c] = boardOut[r][c] * 2;
              boardOut[r][c - 1] = 0;
              score += boardOut[r][c];
            } else if (boardOut[r][c] === 0 && boardOut[r][c - 1] > 0) {
              boardOut[r][c] = boardOut[r][c - 1];
              boardOut[r][c - 1] = 0;
            }
          }
        }
    
        return {boardOut, score};
      }


    moveUp = (boardIn) => {
        let rotatedRight = this.rotateRight(boardIn);
        let boardOut = [];
        let score = 0;

        // Shift all numbers to the top
        for (let r = 0; r < rotatedRight.length; r++) {
            let row = [];
            for (let c = 0; c < rotatedRight[r].length; c++) {
                let current = rotatedRight[r][c];
                (current === 0) ? row.unshift(current) : row.push(current);
            }
            boardOut.push(row);
        }

        // matrix combination (found online)
        // Combine numbers and shift up
        for (let r = 0; r < boardOut.length; r++) {
            for (let c = boardOut[r].length - 1; c >= 0; c--) {
                if (boardOut[r][c] > 0 && boardOut[r][c] === boardOut[r][c - 1]) {
                    boardOut[r][c] = boardOut[r][c] * 2;
                    boardOut[r][c - 1] = 0;
                    score += boardOut[r][c];
                } else if (boardOut[r][c] === 0 && boardOut[r][c - 1] > 0) {
                    boardOut[r][c] = boardOut[r][c - 1];
                    boardOut[r][c - 1] = 0;
                }
            }
        }

        // Rotate board back upright
        boardOut = this.rotateLeft(boardOut);

        return { boardOut, score };
    }


    moveLeft = (boardIn) => {
        let boardOut = [];
        let score = 0;

        //shift all numbers to the left
        for (let r = 0; r < boardIn.length; r++) {
            let row = [];
            for (let c = boardIn.length - 1; c >= 0; c--) {
                let current = boardIn[r][c];
                (current === 0) ? row.push(current) : row.unshift(current);
            }
            boardOut.push(row);
        }

        // matrix combination (found online)
        //combines numbers and shifts all to left
        for (let r = 0; r < boardOut.length; r++) {
            for (let c = 0; c < boardOut.length; c++) {
                if (boardOut[r][c] > 0 && boardOut[r][c] === boardOut[r][c + 1]) {
                    boardOut[r][c] = boardOut[r][c] * 2;
                    boardOut[r][c + 1] = 0;
                    score += boardOut[r][c];
                } else if (boardOut[r][c] === 0 && boardOut[r][c + 1] > 0) {
                    boardOut[r][c] = boardOut[r][c + 1];
                    boardOut[r][c + 1] = 0;
                }
            }
        }

        return { boardOut, score };
    };


    //rotate board 90 degrees to process the shift, then rotates it back and returns
    rotateRight(matrix) {
        let result = [];

        for (let c = 0; c < matrix.length; c++) {
            let row = [];
            for (let r = matrix.length - 1; r >= 0; r--) {
                row.push(matrix[r][c]);
            }
            result.push(row);
        }

        return result;
    }

    //rotate board 90 degrees to process the shift, then rotates it back and returns
    rotateLeft(matrix) {
        let result = [];

        for (let c = matrix.length - 1; c >= 0; c--) {
            let row = [];
            for (let r = matrix.length - 1; r >= 0; r--) {
                row.unshift(matrix[r][c]);
            }
            result.push(row);
        }

        return result;
    }

    componentDidMount() {
        this.createBoard();
    }


    render() {
        return (
            <div>
                <div id="demos">
                    <button className="social" onClick={() => this.createBoard()}>NEW GAME</button>
                    <h3>Score : {this.state.score}</h3>
                </div>
                <div id="demos">
                    <button onClick={() => { this.move('left') }}>Left</button>
                    <button onClick={() => { this.move('up') }}>Up</button>
                    <button onClick={() => { this.move('down') }}>Down</button>
                    <button onClick={() => { this.move('right') }}>Right</button>
                </div>
                <div id="demos">
                    <table>
                        <tbody>
                            {
                                this.state.gameBoard.map((row, i) => (
                                    <tr key={i}>
                                        {
                                            row.map((tile, j) =>
                                                <td className={`tile color-${tile.toString()}`} color key={j}>{tile}</td>
                                            )
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Game;