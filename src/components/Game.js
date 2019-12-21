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
                if (this.state.gameBoard[r][c] === 0) {
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
        if (direction === 'left') {
            console.log('Game over???  ' + this.isGameOver(this.state.gameBoard));
            let movedLeft = this.moveLeft(this.state.gameBoard)
            if (this.checkBoard(this.state.gameBoard, movedLeft.gameBoard)) {
                //  const leftWithRandom = this.placeNewRandom(movedLeft.gameBoard);
                console.log("SUCCESSSS");
                this.setState({
                    gameBoard: movedLeft,
                    score: 0,
                    gameOver: false,

                });
            }
        }else if (direction === 'up') {
            console.log('Game over???  ' + this.isGameOver(this.state.gameBoard));
            let movedUp = this.moveUp(this.state.gameBoard)
            if (this.checkBoard(this.state.gameBoard, movedUp.gameBoard)) {
                //  const leftWithRandom = this.placeNewRandom(movedLeft.gameBoard);
                console.log("SUCCESSSS");
                this.setState({
                    gameBoard: movedUp,
                    score: 0,
                    gameOver: false,

                });
            }
        }else if (direction === 'down') {
            console.log('Game over???  ' + this.isGameOver(this.state.gameBoard));
            let movedDown = this.moveDown(this.state.gameBoard)
            if (this.checkBoard(this.state.gameBoard, movedDown.gameBoard)) {
                //  const leftWithRandom = this.placeNewRandom(movedLeft.gameBoard);
                console.log("SUCCESSSS");
                this.setState({
                    gameBoard: movedDown,
                    score: 0,
                    gameOver: false,

                });
            }
        }else if(direction === 'right') {
            console.log('Game over???  ' + this.isGameOver(this.state.gameBoard));
            let movedRight = this.moveRight(this.state.gameBoard)
            if (this.checkBoard(this.state.gameBoard, movedRight.gameBoard)) {
                //  const leftWithRandom = this.placeNewRandom(movedLeft.gameBoard);
                console.log("SUCCESSSS");
                this.setState({
                    gameBoard: movedRight,
                    score: 0,
                    gameOver: false,

                });
            }
        }
    }

    moveLeft = (boardIn) => {
        let boardOut = this.placeNewRandom(boardIn);///change later this is just for testing
        return boardOut;
    };

    moveUp = (boardIn) => {
        let boardOut = this.placeNewRandom(boardIn);///change later this is just for testing
        return boardOut;
    };
    
    moveDown = (boardIn) => {
        let boardOut = this.placeNewRandom(boardIn);///change later this is just for testing
        return boardOut;
    };

    moveRight = (boardIn) => {
        let boardOut = this.placeNewRandom(boardIn);///change later this is just for testing
        return boardOut;
    };

    componentDidMount() {
        this.createBoard();
    }


    render() {
        return (
            <div>
                <div id="demos">
                    <button className="social" onClick={() => this.createBoard()}>NEW GAME</button>
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
                                                <td id='tile' key={j}>{tile}</td>
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