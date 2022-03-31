
import Popup from './Popup.js'

// Класс попап фуллскрин.
export default class PopupWithImage extends Popup {
  // Откроем попап и подставим данные.
  open(name, link) {
    super.open()

    this._popup.querySelector('.popup__fullscreen-img').src = link;
    this._popup.querySelector('.popup__fullscreen-img').alt = name;
    this._popup.querySelector('.popup__fullscreen-title').textContent = name;
  }
  // Слушатели для закрытия
  setEventListeners() {
    super.setEventListeners();
  }
}
