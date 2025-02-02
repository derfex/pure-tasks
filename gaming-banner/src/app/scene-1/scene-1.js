(() => {
  'use strict';

  window.module.Scene1 = (() => {
    class Scene1 {
      #element = this.#createElement();

      #createElement() {
        const element = document.createElement('section');
        element.classList.add('app-scene');
        element.appendChild(this.#createBackgroundElement());
        return element;
      }

      destroy() {
        // TODO: Implement.
      }

      get element() {
        return this.#element;
      }

      #createBackgroundElement() {
        const element = document.createElement('div');
        element.classList.add('app-scene-1__bg');
        return element;
      }
    }

    return Scene1;
  })();
})();
