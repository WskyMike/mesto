import openPopup from "./index.js";

class Card {
  constructor(name, image, cardSelector) {
    this._name = name;
    this._image = image;
    this._cardSelector = cardSelector;
    this._popupFullscreen = document.querySelector(".popup_style_fullscreen-img");
    this._popupFullscreenImg = document.querySelector(".popup__fullscreen-img");
    this._popupFullscreenTitle = document.querySelector(".popup__fullscreen-title");
  }
  // Получим содержимое template и клонируем его
  _getTemplate() {
    const templateCard = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);

    return templateCard;
  }
  // Метод Лайка
  _handleGetLike() {
    this._elementLke.classList.toggle("elements__like-icon_active");
  }
  // Метод удаления карточки
  _handleDelete() {
    this._elementTrash.closest(".elements__card").remove(); // Немного не понял как без closest()
  }
  // Метод открытия фото Фуллскрин
  _handleOpenPopupFullscreen() {
    this._popupFullscreenImg.src = this._image;
    this._popupFullscreenImg.alt = this._name;
    this._popupFullscreenTitle.textContent = this._name;

    openPopup(this._popupFullscreen);
  }
  // Слушаем клики
  _setEventListeners() {
    this._elementLke.addEventListener("click", () => {
      this._handleGetLike();
    });

    this._elementTrash.addEventListener("click", () => {
      this._handleDelete();
    });

    this._elementImg.addEventListener("click", () => {
      this._handleOpenPopupFullscreen(this._name, this._image);
    });
  }
  // Генерим карточку
  generateCard() {
    this._element = this._getTemplate();
    this._elementName = this._element.querySelector(".elements__text");
    this._elementImg = this._element.querySelector(".elements__picture");
    this._elementLke = this._element.querySelector(".elements__like-icon");
    this._elementTrash = this._element.querySelector(".elements__trash");
    this._setEventListeners();
    this._elementName.textContent = this._name;
    this._elementImg.src = this._image;
    this._elementImg.alt = this._name;

    return this._element;
  }
}

export { Card };
