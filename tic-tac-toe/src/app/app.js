(() => {
  'use strict';

  // # Modules: `import` emulation
  const {
    MemoryTable,
    PlayerList,
    PlayingField,
  } = window.module;


  // # Configuration
  const size = 3;
  const playersData = [{
    color: '#09d',
    name: 'A',
  }, {
    color: '#fc0',
    name: 'B',
  }];
  const playerNames = playersData.map(player => player.name);

  const reset = () => {
    location.reload();
  };


  // # Data managers
  const playerList = new PlayerList(playersData);
  const memoryTable = new MemoryTable(size, playerNames);


  // # Playing field
  const tableBoxElement = document.getElementById('js-app__table-box');
  tableBoxElement.appendChild(PlayingField.createTable(size));
  tableBoxElement.addEventListener('click', ({ target }) => {
    const elementTD = target.closest('td');
    if (!elementTD) return; // Click outside `<td>`, not interested.

    // Выполнить ход текущим игроком.
    const player = playerList.getNext();
    const report = memoryTable.makeMove(
      player.name,
      elementTD.cellIndex,
      elementTD.parentElement.rowIndex,
    );

    // Применить визуальное состояние.
    if (!report.moveIsCorrect) {
      // Сместить указатель обратно, на предыдущего игрока.
      playerList.revert();
      return;
    }
    PlayingField.markCell(elementTD, player.color);

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

  // # Button “Start again”
  const startAgainButtonElement = document.getElementById('js-app__start-again');
  startAgainButtonElement.addEventListener('click', () => {
    reset();
  });
})();
