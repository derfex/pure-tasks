(() => {
  'use strict';

  // # Modules: `import` emulation
  const {
    MemoryTable: { MemoryTable },
    PlayerList,
    PlayingField,
  } = window.module;


  // # Configuration
  const size = 3;
  const playersData = [
    {
      color: '#09d',
      name: 'A',
    },
    {
      color: '#fc0',
      name: 'B',
    },
  ];
  const playerNames = playersData.map(({ name }) => name);

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
    const tdElement = target.closest('td');
    if (!tdElement) return; // Click outside `<td>`, not interested.

    // Make a move by the current player.
    const player = playerList.getNext();
    const report = memoryTable.makeMove(player.name, tdElement.cellIndex, tdElement.parentElement.rowIndex);

    // Apply visual state.
    if (!report.moveIsCorrect) {
      // Move the pointer back to the previous player.
      playerList.revert();
      return;
    }
    PlayingField.markCell(tdElement, player.color);

    if (report.hasWinner) {
      const again = confirm(`Player “${report.winnerName}” has won! Would you like to start again?`);
      if (again) {
        reset();
      }
      alert(`Let us pretend that player “${report.winnerName}” did not win.`)
      return;
    }

    if (!report.gameIsOver) return;
    const again = confirm('Game over! Would you like to start again?');
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
