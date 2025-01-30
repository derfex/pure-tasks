(() => {
  'use strict';

  window.module.PlayerList = (() => {
    /**
     * Класс, позволяющий определить данные текущего игрока.
     * @param {object[]} dataPlayers — данные об игроках.
     * @constructor
     */
    const PlayerList = function(dataPlayers) {
      this._DATA_PLAYERS = dataPlayers.slice();
      this._DATA_PLAYERS.forEach(player => {
        Object.freeze(player);
      });

      this._LIMIT = this._DATA_PLAYERS.length - 1;

      this._currentPlayerIndex = this._LIMIT;
    };

    /**
     * Получить следующего игрока.
     * @returns {Object}
     */
    PlayerList.prototype.getNext = function() {
      let index = this._currentPlayerIndex + 1;
      if (index > this._LIMIT) {
        index = 0;
      }
      this._currentPlayerIndex = index;
      return this._DATA_PLAYERS[index];
    };

    /**
     * Вернуть предыдущее состояние.
     */
    PlayerList.prototype.revert = function() {
      let index = this._currentPlayerIndex - 1;
      if (index < 0) {
        index = this._LIMIT;
      }
      this._currentPlayerIndex = index;
    };

    const module = Object.create(null);
    module.PlayerList = PlayerList;
    return module;
  })();
})();
