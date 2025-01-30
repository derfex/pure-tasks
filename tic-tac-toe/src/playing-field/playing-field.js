(() => {
  'use strict';

  window.module.PlayingField = (() => {
    /**
     * Набор функций для создания игрового поля.
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
     * Создать игровое поле в виде пустой таблицы.
     * @param {number} size — размер таблицы (количество ячеек по горизонтали и вертикали).
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
     * Отметить ячейку игрового поля.
     * @param {HTMLTableCellElement} cellElement — указатель на DOM-element.
     * @param {string} color — цвет фона.
     */
    PlayingField.markCell = (cellElement, color) => {
      cellElement.style.backgroundColor = color;
      cellElement.style.cursor = 'not-allowed';
    };

    return PlayingField;
  })();
})();
