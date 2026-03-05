class Gameboard {
    constructor() {
        this.gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]];
        this.player1 = "X";
        this.player2= "O";
        this.currentPlayer = this.player1;
    }
    renderBoard() {
        console.log(this.gameboard);
    }
    changePlayer() {
        if (this.currentPlayer === this.player1) {
            this.currentPlayer = this.player2;
        }
        else {
            this.currentPlayer = this.player1;
        }
    }
    playersTurn(x,y) {
        const isOutOfBounds = x < 0 || x > 2 || y < 0 || y > 2;
        const isTaken = !isOutOfBounds && this.gameboard[x][y] !== "";

        if (isOutOfBounds || isTaken) {
            console.log("Must be a valid choice");
            return;
        }
        else {
            this.gameboard[x][y] = this.currentPlayer;
            this.changePlayer();
            this.renderBoard();

        }

    }
}

const GB = new Gameboard();
console.log(GB.gameboard);

