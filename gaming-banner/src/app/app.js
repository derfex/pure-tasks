(() => {
  'use strict';

  // # Modules: `import` emulation

  const {
    GamingBanner,
    Scene1,
  } = window.module;

  // # Main

  const appElement = document.getElementById('app');
  const gamingBanner = new GamingBanner(appElement);
  appElement.appendChild(gamingBanner.element);
  const scene1 = new Scene1();
  gamingBanner.showScene(scene1.element);
})();
