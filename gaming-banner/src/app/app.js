(() => {
  'use strict';

  // # Modules: `import` emulation

  const {
    GamingBanner,
  } = window.module;

  // # Main

  const appElement = document.getElementById('app');
  const gamingBanner = new GamingBanner(appElement);
  appElement.appendChild(gamingBanner.element);
})();
