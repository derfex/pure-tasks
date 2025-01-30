(() => {
  'use strict';

  window.module.MemoryTable = (() => {
    /**
     * Class that allows to determine the winner in Tic-Tac-Toe.
     * @param {number} size — size, a small natural number.
     * @param {readonly string[]} players — valid players, a string array.
     */
    class MemoryTable {
      #size;

      constructor(size, players) {
        this.#size = size;
        this._matrix = this._createMatrix(size);

        // Current and maximum number of moves.
        this._count = 0;
        this._limit = size * size;

        // Набор допустимых игроков.
        this._players = players.slice();

        this._lastPlayer = null;
      }

      _createMatrix(size) {
        const matrix = [];
        for (let i = 0; i < size; i++) {
          matrix.push(new Array(size));
        }
        return matrix;
      }

      _setMove(player, x, y) {
        const column = this._matrix[x];
        if (column[y] !== undefined) {
          return false;
        }
        column[y] = player;
        this._lastPlayer = player;
        ++this._count;
        return true;
      }

      // Проверить, был ли последний ход победным. В столбцах.
      _checkColumns() {
        for (let x = 0; x < this.#size; x++) {
          for (let y = 0; y < this.#size; y++) {
            if (this._matrix[x][y] !== this._lastPlayer) {
              break;
            }
            if (y === this.#size - 1) {
              return true;
            }
          }
        }
        return false;
      }

      // Проверить, был ли последний ход победным. В строках.
      _checkRows() {
        for (let y = 0; y < this.#size; y++) {
          for (let x = 0; x < this.#size; x++) {
            if (this._matrix[x][y] !== this._lastPlayer) {
              break;
            }
            if (x === this.#size - 1) {
              return true;
            }
          }
        }
        return false;
      }

      // Проверить, был ли последний ход победным. В диагоналях.
      _checkDiagonals() {
        let hasWinner = false;
        for (let i = 0; i < this.#size; i++) {
          if (this._matrix[i][i] !== this._lastPlayer) {
            break;
          }
          if (i === this.#size - 1) {
            hasWinner = true;
          }
        }
        if (hasWinner) return true;
        for (let i = 0; i < this.#size; i++) {
          if (this._matrix[i][this.#size - 1 - i] !== this._lastPlayer) {
            break;
          }
          if (i === this.#size - 1) {
            hasWinner = true;
          }
        }
        return hasWinner;
      }

      // Проверить, был ли последний ход победным.
      _hasWinner() {
        for (let i = CHECK_LIST.length - 1; i > -1; --i) {
          if (this[CHECK_LIST[i]]()) return true;
        }
        return false;
      }

      // Проверить, завершена ли игра.
      _gameIsOver() {
        return this._count >= this._limit;
      }

      /**
       * Make a move.
       * @param player — player name.
       * @param x — `x` coordinate.
       * @param y — `y` coordinate.
       * @returns {object} — report on the state of the game after the move.
       */
      makeMove(player, x, y) {
        if (!~this._players.indexOf(player)) {
          throw new Error('Неизвестный игрок.');
        }
        if (x < 0 || x >= this.#size || y < 0 || y >= this.#size) {
          throw new Error('Недопустимые координаты.');
        }
        const report = Object.create(null);
        report.moveIsCorrect = this._setMove(player, x, y);
        if (!report.moveIsCorrect) {
          return report;
        }
        report.hasWinner = this._hasWinner();
        if (report.hasWinner) {
          report.winnerName = player;
        }
        report.gameIsOver = this._gameIsOver();
        return report;
      }

      // Method for debugging.
      debug() {
        let toString = 'Visual representation:\r\n';
        for (let y = 0; y < this.#size; y++) {
          for (let x = 0; x < this.#size; x++) {
            const value = this._matrix[x][y];
            toString += value === undefined
              ? '_'
              : value;
          }
          toString += '\r\n';
        }
        return toString;
      };
    }

    const CHECK_LIST = [
      '_checkColumns',
      '_checkRows',
      '_checkDiagonals',
    ];

    const module = Object.create(null);
    module.MemoryTable = MemoryTable;
    return module;
  })();
})();
