(() => {
  'use strict';

  // # Modules: `import` emulation

  const { GamingBannerSizeUtil } = window.module;

  window.module.GamingBanner = (() => {
    class GamingBanner {
      #contentContainerElement = this.#createContentContainerElement();
      #mainElement = this.#createMainElement(this.#contentContainerElement);

      get element() {
        return this.#mainElement;
      }

      showScene(sceneElement) {
        this.#contentContainerElement.innerHTML = '';
        this.#contentContainerElement.appendChild(sceneElement);
      }

      #calculateSize(mainElement, contentContainerElement) {
        const windowInnerWidth = document.documentElement.clientWidth;
        const windowInnerHeight = document.documentElement.clientHeight;
        const { height, transformScale, width } = GamingBannerSizeUtil.calculateParameters(windowInnerHeight, windowInnerWidth);
        mainElement.style.height = `${height * transformScale}px`;
        mainElement.style.width = `${width * transformScale}px`;
        contentContainerElement.style.height = `${height}px`;
        contentContainerElement.style.transform = `scale(${transformScale})`;
        contentContainerElement.style.width = `${width}px`;
      }

      #createContentContainerElement() {
        const element = document.createElement('div');
        element.classList.add('app-gaming-banner__content-container');
        return element;
      }

      #createMainElement(contentContainerElement) {
        const mainElement = document.createElement('main');
        mainElement.classList.add('app-gaming-banner__main');
        mainElement.appendChild(contentContainerElement);
        this.#observeWindowSize(mainElement, contentContainerElement);
        return mainElement;
      }

      #observeWindowSize(mainElement, contentContainerElement) {
        this.#calculateSize(mainElement, contentContainerElement);
        // TODO: Use `removeEventListener('resize', …).
        window.addEventListener('resize', () => {
          this.#calculateSize(mainElement, contentContainerElement);
        });
      }
    }

    return GamingBanner;
  })();
})();
