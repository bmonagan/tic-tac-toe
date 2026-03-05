class Gameboard {
    constructor() {
        this.gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]];
        this.player1 = "X";
        this.player2= "O";
        this.currentPlayer = this.player1;
        this.gamestate = 1;
    }
    renderBoard() {
        console.log(this.gameboard);
    }
    resetBoard() {
        this.gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]];
    }
    changePlayer() {
        if (this.currentPlayer === this.player1) {
            this.currentPlayer = this.player2;
        }
        else {
            this.currentPlayer = this.player1;
        }
    }
    checkWinner() {
        const lines = [
            [this.gameboard[0][0], this.gameboard[0][1], this.gameboard[0][2]],
            [this.gameboard[1][0], this.gameboard[1][1], this.gameboard[1][2]],
            [this.gameboard[2][0], this.gameboard[2][1], this.gameboard[2][2]],
            [this.gameboard[0][0], this.gameboard[1][0], this.gameboard[2][0]],
            [this.gameboard[0][1], this.gameboard[1][1], this.gameboard[2][1]],
            [this.gameboard[0][2], this.gameboard[1][2], this.gameboard[2][2]],
            [this.gameboard[0][0], this.gameboard[1][1], this.gameboard[2][2]],
            [this.gameboard[0][2], this.gameboard[1][1], this.gameboard[2][0]]
        ];

        for (const [a, b, c] of lines) {
            if (a !== "" && a === b && b === c) {
                return a;
            }
        }

        const isBoardFull = this.gameboard.every((row) => row.every((cell) => cell !== ""));
        if (isBoardFull) {
            return "draw";
        }

        return null;
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
            const result = this.checkWinner();
            if (result === "draw") {
                this.renderBoard();
                console.log("Game ended in a draw");
                this.gamestate = 0;
                return;
            }
            if (result) {
                this.renderBoard();
                console.log(`Player ${result} wins!`);
                this.gamestate = 0;
                return;
            }
            this.changePlayer();
            this.renderBoard();

        }

    }
}

const GB = new Gameboard();
    const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
            if (GB.gamestate === 0) {
                    return;
            }

    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    GB.playersTurn(row, col);
            cell.textContent = GB.gameboard[row][col];
  });
});


