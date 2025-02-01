(() => {
  'use strict';

  window.module.PlayingField = (() => {
    /**
     * A set of functions for creating a playing field.
     */
    const PlayingField = Object.create(null);

    const createRow = size => {
      const trElement = document.createElement('tr');
      for (let i = 0; i < size; i++) {
        const tdElement = document.createElement('td');
        trElement.appendChild(tdElement);
      }
      return trElement;
    };

    /**
     * Create a game field in the form of an empty table.
     * @param {number} size — the size of the table (number of cells horizontally and vertically).
     * @returns {HTMLTableElement}
     */
    PlayingField.createTable = size => {
      const tableElement = document.createElement('table');
      for (let i = 0; i < size; i++) {
        const trElement = createRow(size);
        tableElement.appendChild(trElement);
      }
      return tableElement;
    };

    /**
     * Mark a cell of the game field.
     * @param {HTMLTableCellElement} cellElement — pointer to DOM-element.
     * @param {string} color — background color.
     * @returns {void}
     */
    PlayingField.markCell = (cellElement, color) => {
      cellElement.style.backgroundColor = color;
      cellElement.style.cursor = 'not-allowed';
    };

    return PlayingField;
  })();
})();
