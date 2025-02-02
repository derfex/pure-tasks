(() => {
  'use strict';

  // # Modules: `import` emulation

  const {
    GamingBanner,
    Scene1,
  } = window.module;

  // # Main

  {
    const appElement = document.getElementById('app');
    const gamingBanner = new GamingBanner(appElement);
    appElement.appendChild(gamingBanner.element);
    showScene1(gamingBanner);
  }

  // # Scenes

  function showScene1(gamingBanner) {
    const scene1 = new Scene1();
    const playButtonClickEventHandler = () => {
      scene1.destroy();
      scene1.element.removeEventListener('playButtonClick', playButtonClickEventHandler);
      showScene2(gamingBanner);
    };
    scene1.element.addEventListener('playButtonClick', playButtonClickEventHandler);
    gamingBanner.showScene(scene1.element);
  }

  function showScene2(gamingBanner) {
    // TODO: Implement.
  }
})();
