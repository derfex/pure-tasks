(function() {
    'use strict';

    window.module.MemoryTable = (function() {
        /**
         * Класс, позволяющий определить победителя в «Крестики-нолики».
         * @param {number} size — размер, небольшое натуральное число.
         * @param {string[]} players — допустимые игроки, строковый массив.
         * @constructor
         */
        const MemoryTable = function(size, players) {
            this._size = size;
            this._matrix = this._createMatrix(size);

            // Текущее и максимальное количества ходов.
            this._count = 0;
            this._limit = size * size;

            // Набор допустимых игроков.
            this._players = players.slice();

            this._lastPlayer = null;
        };

        // Создать пустую таблицу для хранения ходов и поиска победителя.
        MemoryTable.prototype._createMatrix = function(size) {
            const matrix = [];
            for (let i = 0; i < size; i++) {
                matrix.push(new Array(size));
            }
            return matrix;
        };

        // Сделать ход.
        MemoryTable.prototype._setMove = function(player, x, y) {
            const column = this._matrix[x];
            if (column[y] !== undefined) {
                return false;
            }
            column[y] = player;
            this._lastPlayer = player;
            ++this._count;
            return true;
        };

        // Проверить был ли последний ход победным. В столбцах.
        MemoryTable.prototype._checkColumns = function() {
            for (let x = 0; x < this._size; x++) {
                for (let y = 0; y < this._size; y++) {
                    if (this._matrix[x][y] !== this._lastPlayer) {
                        break;
                    }
                    if (y === this._size - 1) {
                        return true;
                    }
                }
            }
            return false;
        };

        // Проверить был ли последний ход победным. В строках.
        MemoryTable.prototype._checkRows = function() {
            for (let y = 0; y < this._size; y++) {
                for (let x = 0; x < this._size; x++) {
                    if (this._matrix[x][y] !== this._lastPlayer) {
                        break;
                    }
                    if (x === this._size - 1) {
                        return true;
                    }
                }
            }
            return false;
        };

        // Проверить был ли последний ход победным. В диагоналях.
        MemoryTable.prototype._checkDiagonals = function() {
            let hasWinner = false;
            for (let i = 0; i < this._size; i++) {
                if (this._matrix[i][i] !== this._lastPlayer) {
                    break;
                }
                if (i === this._size - 1) {
                    hasWinner = true;
                }
            }
            if (hasWinner) return true;
            for (let i = 0; i < this._size; i++) {
                if (this._matrix[i][this._size - 1 - i] !== this._lastPlayer) {
                    break;
                }
                if (i === this._size - 1) {
                    hasWinner = true;
                }
            }
            return hasWinner;
        };

        const CHECK_LIST = [
            '_checkColumns',
            '_checkRows',
            '_checkDiagonals',
        ];

        MemoryTable.prototype._hasWinner = function() {
            for (let i = CHECK_LIST.length - 1; i > -1; --i) {
                if (this[CHECK_LIST[i]]()) return true;
            }
            return false;
        };

        MemoryTable.prototype._gameIsOver = function() {
            return this._count >= this._limit;
        };

        // Создать пустую таблицу для хранения ходов и поиска победителя.
        MemoryTable.prototype.makeMove = function(player, x, y) {
            if (!~this._players.indexOf(player)) {
                throw new Error('Неизвестный игрок.');
            }
            if (x < 0 || x >= this._size || y < 0 || y >= this._size) {
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
        };

        // Создать пустую таблицу для хранения ходов и поиска победителя.
        MemoryTable.prototype.debug = function() {
            let toString = 'Визуальное представление:\r\n';
            for (let y = 0; y < this._size; y++) {
                for (let x = 0; x < this._size; x++) {
                    const value = this._matrix[x][y]
                    toString += value === undefined
                        ? '_'
                        : value;
                }
                toString += '\r\n';
            }
             return toString;
        };

        return MemoryTable
    })();
})();
