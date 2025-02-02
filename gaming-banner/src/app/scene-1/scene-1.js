(() => {
  'use strict';

  window.module.Scene1 = (() => {
    class Scene1 {
      #element = this.#createElement();

      #createElement() {
        const element = document.createElement('section');
        element.classList.add('app-scene');
        element.appendChild(this.#createBackgroundElement());
        element.appendChild(this.#createBacteriaGroupElement());
        element.appendChild(this.#createDescriptionAndButtonContainerElement());
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

      #createBacteriaGroupElement() {
        const element = document.createElement('div');
        element.classList.add('app-scene-1__bacteria-group-container');
        const imagesPath = 'src/assets/images'
        element.innerHTML = `
        <div class="app-scene-1__bacteria-1-container">
          <img class="app-scene-1__bacteria-1" alt="bacteria 1" src="${imagesPath}/bacteria-1.webp">
        </div>
        <div class="app-scene-1__bacteria-2-container">
          <img class="app-scene-1__bacteria-2" alt="bacteria 2" src="${imagesPath}/bacteria-2.webp">
        </div>
        <div class="app-scene-1__bacteria-3-container">
          <img class="app-scene-1__bacteria-3" alt="bacteria 3" src="${imagesPath}/bacteria-3.webp">
        </div>
      `;

        return element;
      }

      #createButtonElement() {
        const element = document.createElement('button');
        element.classList.add('app-button');
        element.innerText = `ИГРАТЬ`;
        return element;
      }

      #createDescriptionAndButtonContainerElement() {
        const element = document.createElement('div');
        element.classList.add('app-scene-1__description-and-button-container');

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('app-scene-1__description');
        descriptionElement.innerHTML = `
          <div class="app-scene-1__text-1">
            СКОЛЬКО ГРЯЗИ<br>
            И БАКТЕРИЙ СМОЖЕТ<br>
            УДАЛИТЬ НОВАЯ<br>
            <span class="app-scene-1__badge">КРЕМ-ПЕНА?</span>
          </div>
          <div class="app-scene-1__text-2">Сыграй в игру,<br>чтобы очистить дом</div>
        `;
        element.appendChild(descriptionElement);

        const buttonElement = this.#createButtonElement();
        element.appendChild(buttonElement);

        return element;
      }
    }

    return Scene1;
  })();
})();
