(() => {
  'use strict';

  window.module.PlayingField = (() => {
    /**
     * Набор функций для создания игрового поля.
     */
    const PlayingField = Object.create(null);

    const createRow = size => {
      const elementTR = document.createElement('tr');
      for (let i = 0; i < size; i++) {
        const elementTD = document.createElement('td');
        elementTR.appendChild(elementTD);
      }
      return elementTR;
    };

    /**
     * Создать игровое поле в виде пустой таблицы.
     * @param {number} size — размер таблицы (количество ячеек по горизонтали и вертикали).
     * @returns {HTMLTableElement}
     */
    PlayingField.createTable = size => {
      const elementTable = document.createElement('table');
      for (let i = 0; i < size; i++) {
        const elementTR = createRow(size);
        elementTable.appendChild(elementTR);
      }
      return elementTable;
    };

    /**
     * Отметить ячейку игрового поля.
     * @param {HTMLTableCellElement} elementCell — указатель на DOM-element.
     * @param {string} color — цвет фона.
     */
    PlayingField.markCell = (elementCell, color) => {
      elementCell.style.backgroundColor = color;
      elementCell.style.cursor = 'not-allowed';
    };

    return PlayingField;
  })();
})();
