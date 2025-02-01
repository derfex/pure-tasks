(() => {
  'use strict';

  window.module.MemoryTable = (() => {
    /**
     * Class that allows to determine the winner in Tic-Tac-Toe.
     * @class
     */
    class MemoryTable {
      #lastPlayer = null;
      #matrix = [];
      #movesCount = 0;
      #movesLimit = 0;
      #players = [];
      #size = 0;

      /**
       * Create a new `MemoryTable`.
       * @constructor
       * @param {number} size — size, a small natural number.
       * @param {readonly string[]} players — valid players, a string array.
       */
      constructor(size, players) {
        this.#matrix = this.#createMatrix(size);
        this.#size = size;
        this.#movesLimit = size * size;
        this.#players = players.slice();
      }

      // Method for debugging.
      debug() {
        let toString = 'Visual representation:\r\n';
        for (let y = 0; y < this.#size; y++) {
          for (let x = 0; x < this.#size; x++) {
            const value = this.#matrix[x][y];
            toString += value === undefined
              ? '_'
              : value;
          }
          toString += '\r\n';
        }
        return toString;
      };

      /**
       * Make a move.
       * @param {string} playerName — player name.
       * @param {number} x — `x` coordinate.
       * @param {number} y — `y` coordinate.
       * @returns {object} — report on the state of the game after the move.
       */
      makeMove(playerName, x, y) {
        if (!~this.#players.indexOf(playerName)) {
          throw new Error('Unknown playerName.');
        }
        if (x < 0 || x >= this.#size || y < 0 || y >= this.#size) {
          throw new Error('Invalid coordinates.');
        }
        const report = Object.create(null);
        report.moveIsCorrect = this.#setMove(playerName, x, y);
        if (!report.moveIsCorrect) {
          return report;
        }
        report.hasWinner = this.#hasWinner();
        if (report.hasWinner) {
          report.winnerName = playerName;
        }
        report.gameIsOver = this.#gameIsOver();
        return report;
      }

      // Check if the last move was a winning one. In columns.
      #checkColumns() {
        for (let x = 0; x < this.#size; x++) {
          for (let y = 0; y < this.#size; y++) {
            if (this.#matrix[x][y] !== this.#lastPlayer) {
              break;
            }
            if (y === this.#size - 1) {
              return true;
            }
          }
        }
        return false;
      }

      // Check if the last move was a winning one. In rows.
      #checkRows() {
        for (let y = 0; y < this.#size; y++) {
          for (let x = 0; x < this.#size; x++) {
            if (this.#matrix[x][y] !== this.#lastPlayer) {
              break;
            }
            if (x === this.#size - 1) {
              return true;
            }
          }
        }
        return false;
      }

      // Check if the last move was a winning one. In diagonals.
      #checkDiagonals() {
        let hasWinner = false;
        for (let i = 0; i < this.#size; i++) {
          if (this.#matrix[i][i] !== this.#lastPlayer) {
            break;
          }
          if (i === this.#size - 1) {
            hasWinner = true;
          }
        }
        if (hasWinner) return true;
        for (let i = 0; i < this.#size; i++) {
          if (this.#matrix[i][this.#size - 1 - i] !== this.#lastPlayer) {
            break;
          }
          if (i === this.#size - 1) {
            hasWinner = true;
          }
        }
        return hasWinner;
      }

      #createMatrix(size) {
        const matrix = [];
        for (let i = 0; i < size; i++) {
          matrix.push(new Array(size));
        }
        return matrix;
      }

      #gameIsOver() {
        return this.#movesCount >= this.#movesLimit;
      }

      // Check if the last move was a winning one.
      #hasWinner() {
        if (this.#checkDiagonals()) return true;
        if (this.#checkColumns()) return true;
        return this.#checkRows();
      }

      #setMove(player, x, y) {
        const column = this.#matrix[x];
        if (column[y] !== undefined) {
          return false;
        }
        column[y] = player;
        this.#lastPlayer = player;
        ++this.#movesCount;
        return true;
      }
    }

    const module = Object.create(null);
    module.MemoryTable = MemoryTable;
    return module;
  })();
})();
