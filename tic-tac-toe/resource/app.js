(function() {
    'use strict';

    // Модули.
    const MemoryTable = window.module.MemoryTable;
    const PlayerList = window.module.PlayerList;
    const PlayingField = window.module.PlayingField;


    // Константы.
    const SIZE = 3;
    const PLAYERS_DATA = [{
        NAME: 'A',
        COLOR: '#09d',
    }, {
        NAME: 'B',
        COLOR: '#fc0',
    }];
    const PLAYERS_NAME = PLAYERS_DATA.map(player => player.NAME);

    const reset = function reset() {
        location.reload();
    };


    // Менеджеры данных.
    const playerList = new PlayerList(PLAYERS_DATA);
    const memoryTable = new MemoryTable(SIZE, PLAYERS_NAME);


    // Игровое поле.
    const elementTableBox = document.getElementById('js-app__table-box');
    elementTableBox.appendChild(PlayingField.createTable(SIZE));
    elementTableBox.addEventListener('click', function(event) {
        const elementTD = event.target.closest('td');
        if (!elementTD) return; // Щелчок вне `<td>`, не интересует.

        // Выполнить ход текущим игроком.
        const player = playerList.getNext();
        const report = memoryTable.makeMove(
            player.NAME,
            elementTD.cellIndex,
            elementTD.parentElement.rowIndex
        );

        // Применить визуальное состояние.
        if (!report.moveIsCorrect) return;
        elementTD.style.backgroundColor = player.COLOR;
        elementTD.style.cursor = 'not-allowed';

        // Сообщить о победителе.
        if (report.hasWinner) {
            const again = confirm('Победил игрок «' + report.winnerName + '»! Желаете начать заново?');
            if (again) {
                reset();
            }
            return;
        }

        // Проверить, завершена ли игра.
        if (!report.gameIsOver) return;
        const again = confirm('Игра окончена! Желаете начать заново?');
        if (again) {
            reset();
        }
    });

    // Кнопка «Начать заново».
    const elementStartAgain = document.getElementById('js-app__start-again');
    elementStartAgain.addEventListener('click', () => {
        reset();
    });
})();
