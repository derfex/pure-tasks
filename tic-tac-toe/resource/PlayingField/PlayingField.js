(function() {
    'use strict';

    window.module.PlayingField = (function() {
        /**
         * Набор функций для создания игрового поля.
         */
        const PlayingField = Object.create(null);

        const createRow = function createRow(size) {
            const elementTR = document.createElement('tr');
            for (let i = 0; i < size; i++) {
                const elementTD = document.createElement('td');
                elementTR.appendChild(elementTD);
            }
            return elementTR;
        };

        // Создать игровое поле в виде пустой таблицы.
        PlayingField.createTable = function(size) {
            const elementTable = document.createElement('table');
            for (let i = 0; i < size; i++) {
                const elementTR = createRow(size);
                elementTable.appendChild(elementTR);
            }
            return elementTable;
        };

        return PlayingField
    })();
})();
