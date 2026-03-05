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
    changePlayer() {
        if (this.currentPlayer === this.player1) {
            this.currentPlayer = this.player2;
        }
        else {
            this.currentPlayer = this.player1;
        }
    }
}

const GB = new Gameboard();
console.log(GB.currentPlayer);
GB.changePlayer();
GB.gameboard[0][1] = GB.player1;
console.log(GB.gameboard);
console.log(GB.currentPlayer);
console.log(GB.gameboard);