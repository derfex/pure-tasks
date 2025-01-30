(() => {
  'use strict';

  window.module.PlayerList = (() => {
    /**
     * Class that allows to determine the current player's data.
     * @class
     */
    class PlayerList {
      #currentPlayerIndex = 0;
      #limit = 0;
      #players = [];

      /**
       * Create a new `PlayerList`.
       * @constructor
       * @param {readonly unknown[]} players — данные об игроках.
       */
      constructor(players) {
        this.#players = players.slice();
        this.#players.forEach(player => {
          Object.freeze(player);
        });

        this.#limit = this.#players.length - 1;

        this.#currentPlayerIndex = this.#limit;
      }

      /**
       * Get the next player's data.
       * @returns {unknown}
       */
      getNext() {
        let index = this.#currentPlayerIndex + 1;
        if (index > this.#limit) {
          index = 0;
        }
        this.#currentPlayerIndex = index;
        return this.#players[index];
      }

      /**
       * Revert to previous state.
       */
      revert() {
        let index = this.#currentPlayerIndex - 1;
        if (index < 0) {
          index = this.#limit;
        }
        this.#currentPlayerIndex = index;
      }
    }

    const module = Object.create(null);
    module.PlayerList = PlayerList;
    return module;
  })();
})();
